import { BuildOptions } from "./types/configuration";

import webpack from "webpack";

export function buildResolvers(options: BuildOptions): webpack.ResolveOptions {
  const { paths } = options;

  return {
    extensions: [".tsx", ".ts", ".js"],
    preferAbsolute: true,
    modules: [options.paths.src, "node_modules"],
    mainFiles: ["index"],
    alias: {
      "@": paths.src,
    },
  };
}
