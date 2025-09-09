export type ModuleReferenceMode = "data" | "absolute" | "relative" | "bare";

export interface ModuleInfo {
  name: string;
  mode: ModuleReferenceMode;
  original: {
    path: string;
    mode: ModuleReferenceMode;
  };
  path: string;
  isMetaResolved: boolean;
  target?: string | Blob;
}

export function getModuleInfo(name: string, root?: string): ModuleInfo;
