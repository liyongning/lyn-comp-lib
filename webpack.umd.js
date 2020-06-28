const path = require('path')

module.exports = {
    // 实际开发时这部分可以自动生成，可采用 element-ui 的方式
    // 按需加载 需要将入口配置为多入口模式，一个组件 一个入口
    entry: {
        log: './packages/log/src/index.js',
        hello: './packages/hello/src/index.js'
    },
    mode: 'development',
    output: {
        path: path.join(__dirname, './lib'),
        filename: '[name].js',
        // umd 规范
        libraryTarget: 'umd',
        globalObject: 'this',
        // 组件库暴露出来的 全局变量，比如 通过 script 方式引入 bundle 时就可以使用
        library: 'lyn-comp-lib',
        libraryExport: 'default'
    }
}