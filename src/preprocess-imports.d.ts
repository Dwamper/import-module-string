import type { Program } from "acorn";
import type { ModuleInfo } from "./resolve.js";

export interface PreprocessOptions {
  resolved: Array<ModuleInfo>;
  ast: Program;
  used: Set<string>;
  compileAsFunction?: boolean;
}

export function preprocess(
  codeStr: string,
  options: PreprocessOptions
): Promise<string | undefined>;
