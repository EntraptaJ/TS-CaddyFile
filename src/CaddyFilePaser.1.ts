import { CaddyFileType, Block, Directive, HTTPDirectiveTypes, HTTPDirectives, BasicAuthPathDirective } from './types';

// src/CaddyFileParser.ts
// KristianFJones <me@kristianjones.dev>
// Converts a CaddyFile string input into a javascript object CaddyFile

const commentTest = /^#.*/;
const blockEndTest = /.*^}/;
const textTest = /\S/;
const directiveExtract = /(?<!\s)^\w+/;
const directiveTest = new RegExp(
  `.*(${Object.entries(HTTPDirectiveTypes).map(([value], a, b) => (a === b.length - 1 ? `${value}` : `${value}|`))})`
);
const BasicAuthPathExtract = /(?!basicauth)\s(?<path>.*)\s(?<username>\S+)\s(?<password>\S+)/;

// if (Object.values(HTTPDirectiveTypes).includes(directiveExtract.exec(line)[0])) console.log(line)

const extractDirective = <D extends keyof typeof HTTPDirectiveTypes>(directive: D, line: string): HTTPDirectives[D] => {
  switch (directive) {
    case 'basicauth':
      console.log('Basic Auth');
      // @ts-ignore
      return { ...BasicAuthPathExtract.exec(line).groups } as BasicAuthPathDirective;
  }
};

/**
 *
 * @param CaddyFile CaddyFile as a string.
 */
export function parseCaddyFile(CaddyFileSTR: string): CaddyFileType {
  const lines = CaddyFileSTR.split(/\n/);
  console.log(directiveTest);

  let comment: string;
  let path: any;
  let block: Block;
  let CaddyFile: CaddyFileType = { blocks: [] };

  for (let line of lines) {
    line = line.replace(/(^|[^\\]);.*/g, '');
    if (commentTest.test(line)) {
      if (comment) comment = `${comment}\n${line}`;
    } else if (!block && textTest.test(line)) block = { label: line, directives: [] };
    // @ts-ignore
    else if (directiveTest.test(line))
      block.directives.push(extractDirective(directiveTest.exec(line)[0] as keyof typeof HTTPDirectiveTypes, line));

    if (lines.indexOf(line) === lines.length - 1) CaddyFile.blocks.push(block);
    // console.log(line);
  }

  return CaddyFile;
}
