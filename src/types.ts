// src/types.ts
// KristianFJones <me@kristianjones.dev>
export interface CaddyFileType {
  blocks: Block[];
}

export enum HTTPDirectiveTypes {
  'basicauth' = 'basicauth',
  'proxy' = 'proxy',
  'tls' = 'tls'
}

export type HTTPDirectiveTypesType = 'basicauth' | 'proxy' | 'tls' | HTTPDirectiveTypes;

export interface Block {
  directives: DirectiveTypes[];
}

export type CaddyFile = { [key: string]: Block };

export interface BasicAuthCoreDirective {
  type: 'basicauth';
  username: string;
  password: string;
}

export interface BasicAuthPathDirective extends BasicAuthCoreDirective {
  path: string;
}

export interface BasicAuthDirective extends BasicAuthCoreDirective {
  realm: string;
  files: string[];
}

export interface ProxyCoreDirective {
  type: 'proxy';
  from: string;
  to: string;
}

export interface ProxyDirective extends ProxyCoreDirective {
  websocket?: boolean;
}

export interface HTTPDirectives {
  basicauth: BasicAuthDirective;
  proxy: ProxyDirective;
}

export type DirectiveTypes = BasicAuthDirective | ProxyDirective | BasicAuthPathDirective;

export interface Directive {
  type: DirectiveTypes;
}

export interface WebBlock {
  server: string | string[];
}

export interface TLSCoreDirective {
  type: 'tls',
  
}
