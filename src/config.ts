import dotenv from 'dotenv';
import path from 'path';

dotenv.config();

export const CONFIG = {
  PORT: parseInt(process.env.PORT || '3000', 10),
  NODE_ENV: process.env.NODE_ENV || 'development',
  GEMINI_API_KEY: process.env.GEMINI_API_KEY || '',
  GEMINI_VISION_MODEL: process.env.GEMINI_VISION_MODEL || 'gemini-2.5-flash',
  GEMINI_EMBEDDING_MODEL: process.env.GEMINI_EMBEDDING_MODEL || 'text-embedding-004',
  USE_MOCK_FALLBACK: process.env.USE_MOCK_FALLBACK === 'true' || !process.env.GEMINI_API_KEY,
  SIMILARITY_THRESHOLD: parseFloat(process.env.SIMILARITY_THRESHOLD || '0.60'),
  CONFIDENCE_THRESHOLD: parseFloat(process.env.CONFIDENCE_THRESHOLD || '0.70'),
  DB_PATH: process.env.DB_PATH || path.join(__dirname, '../../data/flyrank.db'),
  
  // Cost tracking rates (Estimated USD per 1k tokens)
  COST_RATES: {
    VISION_INPUT_PER_1K: 0.000075,
    VISION_OUTPUT_PER_1K: 0.00030,
    EMBEDDING_PER_1K: 0.00002
  }
};
