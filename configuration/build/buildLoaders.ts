import { BuildOptions } from "./types/configuration";

import MiniCssExtractPlugin from "mini-css-extract-plugin";
import webpack from "webpack";

export function buildLoaders(options: BuildOptions) {
  const { isDevelopment } = options;

  const cssLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      isDevelopment ? "style-loader" : MiniCssExtractPlugin.loader,
      {
        loader: "css-loader",
        options: {
          modules: {
            namedExport: false,
            exportLocalsConvention: "as-is",
            auto: (resPath: string) => Boolean(resPath.includes(".module.")),
            localIdentName: isDevelopment ? "[path][name]__[local]--[hash:base64:5]" : "[hash:base64:8]",
          },
        },
      },
      "sass-loader",
    ],
  };

  const typescriptLoader = {
    test: /\.tsx?$/,
    use: "ts-loader",
    exclude: /node_modules/,
  };

  const imageLoader: webpack.RuleSetRule = {
    test: /\.(ico)$/i,
    type: "asset/resource",
    generator: {
      filename: "images/[name].[hash:8][ext]",
    },
  };

  return [typescriptLoader, cssLoader, imageLoader];
}
