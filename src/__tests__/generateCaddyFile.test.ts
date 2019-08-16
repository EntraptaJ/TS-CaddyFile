// src/__tests__/generateCaddyFile.test.ts
import { CaddyFile, DirectiveTypes } from '../types';
import { generateCaddyFile } from '../CaddyFileGenerator';

const CaddyFile1: CaddyFile = {
  'https://kristianjones.dev': { directives: [{ type: 'proxy', from: '/api', to: 'http://newNS' }] }
};

describe('Generate CaddyFile', () => {
  test('Test Generation 1', async () => {
    const test = generateCaddyFile(CaddyFile1);
    console.log(test);
  });
});
