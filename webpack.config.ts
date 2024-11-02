import { BuildPaths } from "./configuration/build/types/configuration";
import { buildWebpackConfiguration } from "./configuration/build/buildWebpackConfiguration";

import path from "path";
import webpack from "webpack";

const PATHS: BuildPaths = {
  build: path.resolve(__dirname, "build"),
  html: path.resolve(__dirname, "public", "index.html"),
  entry: path.resolve(__dirname, "src", "index.ts"),
};

const MODE = "development";
const IS_DEVELOPMENT = MODE === "development";

const webpackConfiguration: webpack.Configuration = buildWebpackConfiguration({
  mode: MODE,
  paths: PATHS,
  isDevelopment: IS_DEVELOPMENT,
});

export default webpackConfiguration;
