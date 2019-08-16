// src/__tests__/generateCaddyFile.test.ts
import { CaddyFile, DirectiveTypes } from '../types';
import { generateCaddyFile } from '../CaddyFileGenerator';

const CaddyFile1: CaddyFile = {
  'https://kristianjones.dev': {
    directives: [
      { type: 'proxy', from: '/api', to: 'http://newNS' },
      { type: 'basicauth', username: 'KristianFJones', password: '@Hope6699', realm: 'test', files: ['/', '/api'] },
      { type: 'tls', certificate: '/SSL/kristianjones.dev.pem', key: '/SSL/kristianjones.dev.key' }
    ]
  }
};

describe('Generate CaddyFile', () => {
  test('Test Generation 1', async () => {
    const test = generateCaddyFile(CaddyFile1);
    console.log(test);
  });
});
