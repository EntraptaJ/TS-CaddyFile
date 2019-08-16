// src/Parser/Process/TLS.ts
import { TLSCoreDirective, TLSDirective } from '../../types';

const TLSCoreExtract = /(?!\stls)\s(?<certificate>\S+)\s(?<key>\S+)(?<!{)/

export function ProcessTLSDirective(directive: string): TLSDirective {
  const core = (TLSCoreExtract.exec(directive).groups as unknown) as TLSCoreDirective;
  return { ...core };
}
