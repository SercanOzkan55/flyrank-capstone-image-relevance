import { z } from 'zod';
import { GoogleGenerativeAI } from '@google/generative-ai';
import fs from 'fs';
import path from 'path';
import { CONFIG } from '../config';
import { getDatabase } from '../db/database';
import { cryptoRandomId } from '../utils/cryptoUtils';

export const ImageMetadataSchema = z.object({
  subject: z.string().min(1),
  category: z.string().min(1),
  attributes: z.array(z.string()),
  caption: z.string().min(5),
  confidence: z.number().min(0).max(1)
});

export type ImageMetadata = z.infer<typeof ImageMetadataSchema>;

export interface VisionProcessResult {
  metadata: ImageMetadata;
  isFlagged: boolean;
  costUsd: number;
}

// Built-in metadata lookup table for local mock fallback corpus
const MOCK_IMAGE_REGISTRY: Record<string, ImageMetadata> = {
  'fox-01.jpg': {
    subject: 'red fox',
    category: 'animal',
    attributes: ['orange fur', 'wild', 'forest', 'vulpes vulpes', 'canid'],
    caption: 'A red fox (Vulpes vulpes) standing gracefully in a dense green forest',
    confidence: 0.96
  },
  'fox-02.jpg': {
    subject: 'red fox',
    category: 'animal',
    attributes: ['red coat', 'bushy tail', 'snow', 'wildlife'],
    caption: 'Red fox pouncing in deep winter snow in search of prey',
    confidence: 0.93
  },
  'fox-lowconf-01.jpg': {
    subject: 'fox or dingo',
    category: 'animal',
    attributes: ['blurry', 'distant mammal', 'woodland'],
    caption: 'A distant blurry mammal that appears to be a fox or dingo',
    confidence: 0.52 // Low confidence -> MUST be flagged!
  },
  'wolf-01.jpg': {
    subject: 'gray wolf',
    category: 'animal',
    attributes: ['gray fur', 'wild predator', 'pack leader', 'canis lupus'],
    caption: 'A large gray wolf standing amidst pine trees looking directly at the camera',
    confidence: 0.94
  },
  'wolf-02.jpg': {
    subject: 'timber wolf',
    category: 'animal',
    attributes: ['canine', 'forest', 'wolf howl'],
    caption: 'A timber wolf howling in an open snowy clearing',
    confidence: 0.91
  },
  'dog-01.jpg': {
    subject: 'golden retriever',
    category: 'animal',
    attributes: ['domestic dog', 'pet', 'golden coat', 'friendly'],
    caption: 'A happy golden retriever dog playing with a tennis ball on green grass',
    confidence: 0.98
  },
  'dog-02.jpg': {
    subject: 'german shepherd',
    category: 'animal',
    attributes: ['domestic dog', 'pet', 'canine', 'guard dog'],
    caption: 'A German Shepherd dog sitting alertly in a backyard',
    confidence: 0.95
  },
  'bear-01.jpg': {
    subject: 'grizzly bear',
    category: 'animal',
    attributes: ['brown fur', 'apex predator', 'river', 'salmon'],
    caption: 'A large brown grizzly bear standing in a rushing river catching salmon',
    confidence: 0.97
  },
  'deer-01.jpg': {
    subject: 'white-tailed deer',
    category: 'animal',
    attributes: ['antlers', 'herbivore', 'meadow', 'wildlife'],
    caption: 'A white-tailed deer buck grazing peacefully in a sunlit meadow',
    confidence: 0.95
  },
  'quantum-01.jpg': {
    subject: 'quantum computer lab',
    category: 'technology',
    attributes: ['cryostat', 'gold cables', 'physics', 'computing'],
    caption: 'A modern quantum processor cryostat dilution refrigerator hanging in a laboratory',
    confidence: 0.92
  }
};

export class VisionService {
  private genAI: GoogleGenerativeAI | null = null;

  constructor() {
    if (CONFIG.GEMINI_API_KEY && !CONFIG.USE_MOCK_FALLBACK) {
      this.genAI = new GoogleGenerativeAI(CONFIG.GEMINI_API_KEY);
    }
  }

  async processImage(imagePath: string, filename: string): Promise<VisionProcessResult> {
    let retries = 3;
    let lastError: Error | null = null;

    while (retries > 0) {
      try {
        let rawOutput: any;
        let inputTokens = 500;
        let outputTokens = 150;

        if (this.genAI && !CONFIG.USE_MOCK_FALLBACK) {
          const model = this.genAI.getGenerativeModel({ model: CONFIG.GEMINI_VISION_MODEL });
          const imageBuffer = fs.readFileSync(imagePath);
          const base64Data = imageBuffer.toString('base64');

          const prompt = `Analyze this image and output valid JSON matching this exact schema:
{
  "subject": "main subject name, e.g. red fox",
  "category": "broad category, e.g. animal, technology, landscape",
  "attributes": ["array", "of", "descriptive", "keywords"],
  "caption": "detailed description of what is in the image",
  "confidence": float between 0.0 and 1.0 representing classification confidence
}
Do not wrap in markdown quotes if possible, output raw JSON only.`;

          const result = await model.generateContent([
            prompt,
            { inlineData: { data: base64Data, mimeType: 'image/jpeg' } }
          ]);

          const text = result.response.text().trim();
          const cleanJson = text.replace(/^```json\s*/i, '').replace(/```$/i, '').trim();
          rawOutput = JSON.parse(cleanJson);
          
          if (result.response.usageMetadata) {
            inputTokens = result.response.usageMetadata.promptTokenCount || 500;
            outputTokens = result.response.usageMetadata.candidatesTokenCount || 150;
          }
        } else {
          // Mock / Heuristic processing
          rawOutput = this.getMockVisionOutput(filename);
        }

        // Validate strictly against schema
        const validated = ImageMetadataSchema.parse(rawOutput);
        const isFlagged = validated.confidence < CONFIG.CONFIDENCE_THRESHOLD;

        // Calculate Cost
        const costUsd = (inputTokens / 1000) * CONFIG.COST_RATES.VISION_INPUT_PER_1K +
                        (outputTokens / 1000) * CONFIG.COST_RATES.VISION_OUTPUT_PER_1K;

        // Track Cost Entry
        this.logCost('Google', CONFIG.GEMINI_VISION_MODEL, 'vision', filename, inputTokens, outputTokens, costUsd);

        return {
          metadata: validated,
          isFlagged,
          costUsd
        };
      } catch (err: any) {
        lastError = err;
        retries--;
        if (retries > 0) {
          await new Promise(r => setTimeout(r, 200));
        }
      }
    }

    throw new Error(`Vision processing failed after retries for ${filename}: ${lastError?.message}`);
  }

  private getMockVisionOutput(filename: string): ImageMetadata {
    const baseName = path.basename(filename);
    if (MOCK_IMAGE_REGISTRY[baseName]) {
      return MOCK_IMAGE_REGISTRY[baseName];
    }

    // Generic fallback based on filename patterns
    if (baseName.includes('fox')) {
      return {
        subject: 'red fox',
        category: 'animal',
        attributes: ['orange fur', 'wild', 'canid'],
        caption: `A red fox in the wild (${baseName})`,
        confidence: 0.92
      };
    } else if (baseName.includes('wolf')) {
      return {
        subject: 'gray wolf',
        category: 'animal',
        attributes: ['gray fur', 'predator', 'canine'],
        caption: `A wild gray wolf sitting in woods (${baseName})`,
        confidence: 0.93
      };
    } else if (baseName.includes('dog')) {
      return {
        subject: 'domestic dog',
        category: 'animal',
        attributes: ['pet', 'canine', 'domestic'],
        caption: `A domestic dog playing in a park (${baseName})`,
        confidence: 0.95
      };
    }

    return {
      subject: 'unknown subject',
      category: 'general',
      attributes: ['photo', 'nature'],
      caption: `An unclassified photo of ${baseName}`,
      confidence: 0.65 // Low confidence fallback
    };
  }

  private logCost(provider: string, model: string, callType: string, targetId: string, inputTokens: number, outputTokens: number, costUsd: number) {
    const db = getDatabase();
    db.prepare(`
      INSERT INTO cost_logs (id, provider, model, call_type, target_id, input_tokens, output_tokens, estimated_cost_usd, created_at)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
    `).run(
      cryptoRandomId(),
      provider,
      model,
      callType,
      targetId,
      inputTokens,
      outputTokens,
      costUsd,
      new Date().toISOString()
    );
  }
}
