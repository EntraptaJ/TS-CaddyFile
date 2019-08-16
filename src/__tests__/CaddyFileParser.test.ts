// src/__tests__/CaddyFileParser.test.ts
import { parseCaddyFile } from '../index';
import { CaddyFileSample1, CaddyFileSample2 } from './Samples';

describe('Parse CaddyFile', () => {
  test('CaddyFile without curly braces (Single Entry)', () => {
    const Test1OBJ = parseCaddyFile(CaddyFileSample1);
    // @ts-ignore
    // Object.entries(Test1OBJ).map(([stuff, { directives }]) => console.log(directives));
    // console.log(Test1OBJ);
  });
  test('CaddyFile Curly Braces', () => {
    const Test2OBJ = parseCaddyFile(CaddyFileSample2);
    Object.entries(Test2OBJ).map(([stuff, { directives }]) => console.log(directives));
  })
});
