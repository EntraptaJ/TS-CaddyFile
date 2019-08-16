// src/__tests__/CaddyFileParser.test.ts
import { parseCaddyFile } from "../index";
import { CaddyFileSample1, CaddyFileSample2 } from "./Samples";

describe("Parse CaddyFile", () => {
  test("CaddyFile without curly braces (Single Entry)", () => {
    const Caddyfile = parseCaddyFile(CaddyFileSample1);
    expect(Caddyfile).toMatchInlineSnapshot(`
      Object {
        "your.public.com": Object {
          "directives": Array [
            Object {
              "password": "password",
              "path": "/",
              "type": "basicauth",
              "username": "username",
            },
            Object {
              "from": "/api",
              "to": "http://api",
              "type": "proxy",
              "websocket": true,
            },
            Object {
              "files": Array [
                "/notes-for-mary-lou.txt",
                "/marylou-files",
                "/another-file.txt",
              ],
              "password": "milkshakes",
              "realm": "Mary Lou's documents",
              "type": "basicauth",
              "username": "Mary Lou",
            },
            Object {
              "files": Array [
                "/notes-for-mary-lou.txt",
                "/marylou-files",
                "/another-file.txt",
              ],
              "password": "milkshakes",
              "realm": "TESTRealm",
              "type": "basicauth",
              "username": "username",
            },
            Object {
              "type": "gzip",
            },
            Object {
              "from": "/",
              "to": "localhost:8080",
              "type": "proxy",
              "websocket": false,
            },
          ],
        },
      }
    `);
  });
  test("CaddyFile Curly Braces", () => {
    const Caddyfile = parseCaddyFile(CaddyFileSample2);
    expect(Caddyfile).toMatchInlineSnapshot(`
      Object {
        "kristianjones.dev": Object {
          "directives": Array [
            Object {
              "certificate": "/SSL/kristianjones.dev.pem",
              "key": "/SSL/kristianjones.dev.key",
              "type": "tls",
            },
            Object {
              "from": "/api",
              "to": "http://test-api",
              "type": "proxy",
              "websocket": true,
            },
          ],
        },
      }
    `);
  });
});
