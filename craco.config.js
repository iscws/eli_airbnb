const path = require('path')
// __dirname为绝对路径
const resolve = pathname => path.resolve(__dirname, pathname);
const CracoLessPlugin = require('craco-less');


module.exports = {
    // less
    plugins: [
        {
            plugin: CracoLessPlugin,
        },
    ],
    // 配置webpack
    webpack: {
        alias: {
            "@": resolve("src"),
            "components": resolve("src/components"),
            "utils": resolve("src/utils"),
            "assets": resolve("src/assets")
        }
    }
}