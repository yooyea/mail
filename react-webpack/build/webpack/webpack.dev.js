const path = require("path");
const base = require("./webpack.base.js");
const { merge } = require("webpack-merge");

module.exports = merge(base, {
  mode: "development", // 开发模式
  devServer: {
    open: true, // 编译完自动打开浏览器
    port: 8080,
  },
});
