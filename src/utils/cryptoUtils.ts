import crypto from 'crypto';

export function cryptoRandomId(): string {
  return crypto.randomUUID();
}
