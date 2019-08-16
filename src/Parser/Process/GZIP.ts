// src/Parser/Process/GZIP.ts
import { GZIPDirective } from '../../types';

export function processGZIP(directiveString: string): GZIPDirective {
  return { type: 'gzip' };
}
