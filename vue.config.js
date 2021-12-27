module.exports = {
  devServer: {
    proxy: {
      "/oauth/v1": {
        target: "https://kang.oneauth.cn/",
        changeOrigin: true,
      },
    },
  },
  // 扩展 webpack 配置，使 packages 加入编译
  chainWebpack: (config) => {
    config.module
      .rule("js|ts|vue")
      .include.add("/packages")
      .end()
      .use("babel")
      .loader("babel-loader")
      .tap((options) => {
        // 修改它的选项...
        return options;
      });

    config.module
      .rule("eslint")
      .exclude.add(/sdk-core/)
      .end();
  },
};
