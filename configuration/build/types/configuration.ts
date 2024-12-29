export type BuildMode = "development" | "production";

export interface BuildPaths {
  build: string;
  html: string;
  entry: string;
}

export interface BuildOptions {
  mode: BuildMode;
  paths: BuildPaths;

  isDevelopment: boolean;
}
