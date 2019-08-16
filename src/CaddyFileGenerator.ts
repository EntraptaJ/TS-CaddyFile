// src/Parser/CaddyFileGenerator.ts
import { CaddyFile, Block } from './types';

export function generateServerBlock(host: string, block: Block): string {
  return `${host} {\n${block.directives
    .map(directive => {
      if (directive.type === 'tls') {
        return `\ttls ${directive.certificate} ${directive.key}`;
      } else if (directive.type === 'proxy') {
        return `\tproxy ${directive.from} ${directive.to}${directive.websocket ? ` {\n\t\twebsocket\n\t}` : ``}`;
      } else if (directive.type === 'basicauth') {
        if ('path' in directive) return `\tbasicauth ${directive.path} ${directive.username} ${directive.password}`;
        else
          return `\tbasicauth "${directive.username}" ${directive.password} {\n\t\trealm "${
            directive.realm
          }"\n\t${directive.files.map(file => `\t${file}`).join('\n\t')}\n\t}`;
      } else if (directive.type === 'gzip') {
        return `\tgzip`;
      } else if (directive.type === 'bind') return `\tbind ${directive.host}`;
      else if (directive.type === 'expvar') return `\texpvar${directive.path ? ` ${directive.path}` : ``}`;
    })
    .join('\n')}\n}`;
}

/**
 * Creates a CaddyFile string from a CaddyFile Object
 * @param CaddyFile CaddyFile Object
 */
export function generateCaddyFile(Caddyfile: CaddyFile): string {
  const Map = Object.entries(Caddyfile);
  const Blocks = Map.map(([host, block]) => generateServerBlock(host, block));
  return `${Blocks}`;
}
