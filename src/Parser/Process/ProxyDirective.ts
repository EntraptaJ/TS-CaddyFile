// src/Parser/Process/ProxyDirective.ts
import { ProxyDirective, HTTPDirectiveTypes, ProxyCoreDirective } from '../../types';

const ProxyCoreExtract = /(?!\sproxy)\s(?<from>\S+)\s(?<to>\S+)(?<!{)/;

export function processProxyDirective(directive: string): ProxyDirective {
  const core = (ProxyCoreExtract.exec(directive).groups as unknown) as ProxyCoreDirective;
  const websocket = directive.includes('websocket');

  return { type: HTTPDirectiveTypes['proxy'], ...core, websocket };
}
