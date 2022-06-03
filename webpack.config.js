const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/js/main.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  optimization: {
    minimize: true,
    minimizer: [
      new CssMinimizerPlugin(),
      new TerserPlugin(),
      new ImageMinimizerPlugin({
        minimizer: {
          implementation: ImageMinimizerPlugin.imageminMinify,
          options: {
            plugins: [
              ["imagemin-pngquant", { optimizationLevel: 6 }],
            ],
          },
        },
    }),
    ],
  },
  devServer: {
    port: 4000,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html",
      minify: {
        collapseWhitespace: true,
      },
    }),
    new CleanWebpackPlugin(),
    new CopyPlugin({
      patterns: [{ from: "./src/img", to: "src/img" }],
    }),
    new MiniCssExtractPlugin({
      filename: "style.css",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
        // use: [{
        //   loader:MiniCssExtractPlugin.loader,
        //   options:{
        //     hmr: true,
        //     reloadAll: true
        //   }
        // }, "css-loader"],
      },
    ],
  },
};
