// src/Parser/CaddyFileGenerator.ts
import { CaddyFile, Block } from './types';

export function generateServerBlock(host: string, block: Block): string {
  return `${host} {

  }`;
}

/**
 * Creates a CaddyFile string from a CaddyFile Object
 * @param CaddyFile CaddyFile Object
 */
export function generateCaddyFile(CaddyFile: CaddyFile): string {
  const Map = Object.entries(CaddyFile);
  const Blocks = Map.map(([host, block]) => generateServerBlock(host, block));

  return `${Blocks}`;
}
