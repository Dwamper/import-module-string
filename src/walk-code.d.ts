import type { Program } from "acorn";

export interface WalkCodeFeatures {
  export: boolean;
  require: boolean;
  importMetaUrl: boolean;
}

export interface WalkCodeResult {
  ast: Program;
  globals: Set<string>;
  imports: Set<string>;
  features: WalkCodeFeatures;
  used: Set<string>;
}

export function walkCode(ast: Program): WalkCodeResult;
