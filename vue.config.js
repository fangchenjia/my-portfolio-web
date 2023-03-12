const { defineConfig } = require("@vue/cli-service");
const path = require("path");

module.exports = defineConfig({
  transpileDependencies: true,
  chainWebpack: (config) => {
    const types = ["vue-modules", "vue", "normal-modules", "normal"];
    types.forEach((type) =>
      addStyleResource(config.module.rule("scss").oneOf(type))
    );
    config.plugin('html').tap(args => {
      args[0].title = 'My Portfolio Website';
      return args;
    });
  },
});

function addStyleResource(rule) {
  rule
    .use("style-resource")
    .loader("style-resources-loader")
    .options({
      patterns: [path.resolve(__dirname, "./src/styles/tools/_sassMagic.scss")],
    });
}
