// src/__tests__/Samples/Sample2.ts
// KristianFJones <me@kristianjones.dev>
// CaddyFile Sample 2 (Single Entry without curly braces)

export const CaddyFileSample2 = `
kristianjones.dev {
  tls /SSL/kristianjones.dev.pem /SSL/kristianjones.dev.key
  proxy /fucker http://test-api  {
    websocket
  }

}`;
