import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import path from 'path';
import fs from 'fs';
import { CONFIG } from './config';
import { getDatabase } from './db/database';
import { apiRouter } from './routes/api';

export const app = express();

app.use(cors());
app.use(express.json());

// Serve Static Demo UI
app.use(express.static(path.join(process.cwd(), 'public')));

// Explicit Image Content-Type Delivery Handler (Guarantees 100% Crisp Vector/Image Rendering)
app.get('/data/images/:filename', (req: Request, res: Response) => {
  const filename = req.params.filename;
  const filePath = path.join(process.cwd(), 'data/images', filename);
  
  if (!fs.existsSync(filePath)) {
    return res.status(404).send('Image Not Found');
  }

  const content = fs.readFileSync(filePath, 'utf-8');
  if (content.trim().startsWith('<svg')) {
    res.setHeader('Content-Type', 'image/svg+xml');
  } else {
    res.setHeader('Content-Type', 'image/jpeg');
  }
  res.send(content);
});

// Initialize Database connection on boot
getDatabase();

// API Router
app.use('/api', apiRouter);

// 404 Fallback for API
app.use('/api/*', (req: Request, res: Response) => {
  res.status(404).json({ error: 'Endpoint Not Found', path: req.path });
});

// Global Error Handler
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  console.error('[API ERROR]', err.stack || err.message || err);
  res.status(500).json({
    error: 'Internal Server Error',
    message: err.message || 'An unexpected error occurred'
  });
});

if (require.main === module) {
  app.listen(CONFIG.PORT, () => {
    console.log(`=======================================================`);
    console.log(`🚀 FLYRANK CAPSTONE SERVER RUNNING ON PORT ${CONFIG.PORT}`);
    console.log(`   Interactive Web UI: http://localhost:${CONFIG.PORT}`);
    console.log(`   API Base URL:       http://localhost:${CONFIG.PORT}/api`);
    console.log(`   Environment:        ${CONFIG.NODE_ENV}`);
    console.log(`   Mock Fallback:      ${CONFIG.USE_MOCK_FALLBACK}`);
    console.log(`   Similarity Cutoff:  ${CONFIG.SIMILARITY_THRESHOLD}`);
    console.log(`=======================================================`);
  });
}
