import type { Options, Program } from "acorn";
import type { ModuleInfo } from "./src/resolve.js";

export { parseCode } from "./src/parse-code.js";
export { walkCode } from "./src/walk-code.js";
export { getTarget, getTargetDataUri } from "./src/url.js";
export { getModuleInfo } from "./src/resolve.js";

export interface GetCodeOptions {
  data?: Record<string, any>;
  filePath?: string;
  implicitExports?: boolean;
  addRequire?: boolean;
  resolveImportContent?: (
    moduleInfo: { path: string; mode: ModuleInfo["mode"]; resolved?: string }
  ) => string | Promise<string | undefined> | undefined;
  serializeData?: (data: Record<string, any>) => string | Promise<string>;
  ast?: Program;
  acornOptions?: Options;
  compileAsFunction?: boolean;
}

export function resolveModule(ref: string): string;

export function getCode(
  codeStr: string,
  options?: GetCodeOptions
): Promise<string>;

export function importFromString(
  codeStr: string,
  options?: GetCodeOptions
): Promise<Record<string, any>>;
