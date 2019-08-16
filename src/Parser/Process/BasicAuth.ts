// src/Parser/Process/BasicAuth.ts
import { BasicAuthDirective, BasicAuthPathDirective } from '../../types';

const BasicAuthCoreExtract = /(?!basicauth)\s((.|\n)*)(?<!\})/;
const OtherBasicAuthExtract = /\s+?"?(?<username>.*(?<!")).*\s(?<password>\w+)\s\{((.|\n)*)realm\s"?(?<realm>.*(?<!")).*/gm;

export function processBasicAuthDirective(directive: string): BasicAuthDirective | BasicAuthPathDirective {
  const core = BasicAuthCoreExtract.exec(directive)[0];
  // if (core.match(/\n/).length)
  if (!core.match('\n'))
    return {
      type: 'basicauth',
      ...((/(?!basicauth)\s(?<path>.*)\s(?<username>\S+)\s(?<password>\S+)/.exec(directive)
        .groups as unknown) as BasicAuthPathDirective)
    };

  return {
    type: 'basicauth',
    ...(OtherBasicAuthExtract.exec(core).groups as Omit<BasicAuthPathDirective, 'files'>),
    files: core
      .replace(OtherBasicAuthExtract, '')
      .replace(/\s+/, '')
      .split(/\n/)
      .filter(a => a.length > 0)
  };
}
