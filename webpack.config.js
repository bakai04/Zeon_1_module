const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");

module.exports={
    mode:"development",
    entry: "./src/js/main.js",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist")
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'./index.html'
        }),
        new CleanWebpackPlugin(),
        new CopyPlugin({
            patterns: [
              { from: "./src/img", to: "src/img" },
            ],
          }),
    ],
    module:{
        rules:[
            {
                test: /\.css$/,
                use:['style-loader','css-loader']
            }
        ]
    }
}