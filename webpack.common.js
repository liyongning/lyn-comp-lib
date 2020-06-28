const path = require('path')

module.exports = {
    entry: './src/index.js',
    // 使用 开发者 模式，目的是为了一会儿的调试，实际开发中可改为 production
    mode: 'development',
    output: {
        path: path.join(__dirname, './lib'),
        filename: 'lyn-comp-lib.common.js',
        // commonjs2 规范
        libraryTarget: 'commonjs2',
        // 将 bundle 中的 window 对象替换为 this，不然会报 window is not defined
        globalObject: 'this',
        // 没有该配置项，组件会挂载到 default 属性下，需要 comp.default.xxx 这样使用，不方便
        libraryExport: 'default'
    }
}