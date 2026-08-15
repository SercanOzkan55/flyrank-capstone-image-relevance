import fs from 'fs';
import path from 'path';
import { CONFIG } from '../config';

export interface DatabaseStore {
  images: Record<string, any>;
  embeddings: Record<string, any>;
  posts: Record<string, any>;
  suggestions: Record<string, any>;
  reviews: Record<string, any>;
  cost_logs: Record<string, any>;
  batch_jobs: Record<string, any>;
}

class PureDatabase {
  private filePath: string;
  private data: DatabaseStore;

  constructor(filePath: string) {
    this.filePath = filePath.endsWith('.json') ? filePath : `${filePath}.json`;
    const dir = path.dirname(this.filePath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    if (fs.existsSync(this.filePath)) {
      try {
        const content = fs.readFileSync(this.filePath, 'utf-8');
        this.data = JSON.parse(content);
      } catch {
        this.data = this.createEmptyStore();
      }
    } else {
      this.data = this.createEmptyStore();
      this.save();
    }
  }

  private createEmptyStore(): DatabaseStore {
    return {
      images: {},
      embeddings: {},
      posts: {},
      suggestions: {},
      reviews: {},
      cost_logs: {},
      batch_jobs: {}
    };
  }

  private save() {
    fs.writeFileSync(this.filePath, JSON.stringify(this.data, null, 2), 'utf-8');
  }

  exec(sql: string) {
    // DDL schema initialization compatibility
  }

  prepare(sql: string) {
    const db = this;
    const cleanSql = sql.trim().replace(/\s+/g, ' ');

    return {
      run(...args: any[]) {
        db.executeRun(cleanSql, args);
        return { changes: 1 };
      },
      get(...args: any[]) {
        return db.executeGet(cleanSql, args);
      },
      all(...args: any[]) {
        return db.executeAll(cleanSql, args);
      }
    };
  }

  private executeRun(sql: string, args: any[]) {
    const normalized = sql.toLowerCase();

    if (normalized.includes('into images')) {
      const [id, filepath, filename, subject, category, attributes_json, caption, confidence, is_flagged, processed_at] = args;
      this.data.images[id] = { id, filepath, filename, subject, category, attributes_json, caption, confidence, is_flagged, processed_at };
    }
    else if (normalized.includes('into embeddings')) {
      const [id, target_type, target_id, vector_json, dimension, created_at] = args;
      const key = `${target_type}:${target_id}`;
      this.data.embeddings[key] = { id, target_type, target_id, vector_json, dimension, created_at };
    }
    else if (normalized.includes('into posts')) {
      const [id, slug, title, content, category, expected_subject, created_at] = args;
      this.data.posts[id] = { id, slug, title, content, category, expected_subject, created_at };
    }
    else if (normalized.includes('into suggestions')) {
      const [id, post_id, candidate_image_id, similarity_score, status, reason, created_at] = args;
      this.data.suggestions[id] = { id, post_id, candidate_image_id, similarity_score, status, reason, created_at };
    }
    else if (normalized.includes('into reviews')) {
      const [id, suggestion_id, post_id, image_id, action, reviewer_notes, created_at] = args;
      this.data.reviews[id] = { id, suggestion_id, post_id, image_id, action, reviewer_notes, created_at };
    }
    else if (normalized.includes('into cost_logs')) {
      const [id, provider, model, call_type, target_id, input_tokens, output_tokens, estimated_cost_usd, created_at] = args;
      this.data.cost_logs[id] = { id, provider, model, call_type, target_id, input_tokens, output_tokens, estimated_cost_usd, created_at };
    }
    else if (normalized.includes('into batch_jobs')) {
      const [id, job_type, status, total_items, processed_items, error_log, created_at, updated_at] = args;
      this.data.batch_jobs[id] = { id, job_type, status, total_items, processed_items, error_log, created_at, updated_at };
    }
    else if (normalized.includes('update batch_jobs')) {
      if (normalized.includes('status =')) {
        const [status, processed_items, error_log, updated_at, id] = args;
        if (this.data.batch_jobs[id]) {
          this.data.batch_jobs[id].status = status;
          this.data.batch_jobs[id].processed_items = processed_items;
          this.data.batch_jobs[id].error_log = error_log;
          this.data.batch_jobs[id].updated_at = updated_at;
        }
      } else {
        const [processed_items, error_log, updated_at, id] = args;
        if (this.data.batch_jobs[id]) {
          this.data.batch_jobs[id].processed_items = processed_items;
          this.data.batch_jobs[id].error_log = error_log;
          this.data.batch_jobs[id].updated_at = updated_at;
        }
      }
    }

    this.save();
  }

  private executeGet(sql: string, args: any[]): any {
    const list = this.executeAll(sql, args);
    return list.length > 0 ? list[0] : null;
  }

  private executeAll(sql: string, args: any[] = []): any[] {
    const lowerSql = sql.toLowerCase();

    let collection: any[] = [];
    if (lowerSql.includes('from images')) {
      collection = Object.values(this.data.images);
    } else if (lowerSql.includes('from posts')) {
      collection = Object.values(this.data.posts);
    } else if (lowerSql.includes('from embeddings')) {
      collection = Object.values(this.data.embeddings);
    } else if (lowerSql.includes('from batch_jobs')) {
      collection = Object.values(this.data.batch_jobs).sort((a: any, b: any) =>
        new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
      );
    } else if (lowerSql.includes('from reviews')) {
      collection = Object.values(this.data.reviews).sort((a: any, b: any) =>
        new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
      );
    } else if (lowerSql.includes('from cost_logs')) {
      collection = Object.values(this.data.cost_logs).sort((a: any, b: any) =>
        new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
      );
    } else if (lowerSql.includes('from suggestions')) {
      collection = Object.values(this.data.suggestions);
    }

    // Apply is_flagged filter if specified
    if (lowerSql.includes('is_flagged = 0')) {
      collection = collection.filter((item: any) => item.is_flagged === 0);
    } else if (lowerSql.includes('is_flagged = 1')) {
      collection = collection.filter((item: any) => item.is_flagged === 1);
    }

    // Filter expected_subject != ''
    if (lowerSql.includes('expected_subject != \'\'')) {
      collection = collection.filter((item: any) => item.expected_subject && item.expected_subject.trim() !== '');
    }

    // Embeddings Query Handler: target_type = 'image' AND target_id = ?
    if (lowerSql.includes('from embeddings')) {
      if (lowerSql.includes("target_type = 'image'") && lowerSql.includes('target_id = ?')) {
        const targetId = args[0];
        collection = collection.filter((item: any) => item.target_type === 'image' && item.target_id === targetId);
      } else if (lowerSql.includes("target_type = 'post'") && lowerSql.includes('target_id = ?')) {
        const targetId = args[0];
        collection = collection.filter((item: any) => item.target_type === 'post' && item.target_id === targetId);
      } else if (args.length >= 2) {
        const [ttype, tid] = args;
        collection = collection.filter((item: any) => item.target_type === ttype && item.target_id === tid);
      }
    }
    // Posts Query Handler: id = ? OR slug = ?
    else if (lowerSql.includes('from posts') && args.length > 0) {
      const val = args[0];
      collection = collection.filter((item: any) => item.id === val || item.slug === val);
    }
    // Images Query Handler: id = ? OR filename = ?
    else if (lowerSql.includes('from images')) {
      const literalSubjectMatch = sql.match(/subject\s*=\s*'([^']+)'/i);
      if (literalSubjectMatch) {
        const subjectVal = literalSubjectMatch[1];
        collection = collection.filter((item: any) => item.subject === subjectVal);
      }

      if (args.length > 0) {
        const val = args[0];
        collection = collection.filter((item: any) => item.id === val || item.filename === val);
      }
    }

    return collection;
  }
}

let dbInstance: PureDatabase | null = null;

export function getDatabase(): PureDatabase {
  if (!dbInstance) {
    dbInstance = new PureDatabase(CONFIG.DB_PATH);
  }
  return dbInstance;
}

export function initSchema(db: PureDatabase) {
  // Schema initialized automatically
}

export function closeDatabase() {
  dbInstance = null;
}
