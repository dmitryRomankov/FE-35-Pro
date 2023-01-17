const webpack = require("webpack");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");

module.exports = {
  mode: "development",
  devtool: "cheap-module-source-map",
  devServer: {
    open: true,
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env.name": JSON.stringify("---Development---"),
    }),
    new ReactRefreshWebpackPlugin(),
  ],
};
