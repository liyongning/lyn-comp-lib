# 介绍

从 0 到 1 搭建自己的组件库，当然目前还有很多不完善的地方，比如 文档部分，样式相关等，后续会持续完善

# 安装

```
npm i @liyongning/lyn-comp-lib -S
```

# 使用

该组件库可 整体加载，也支持 按需加载

## 1. 全量引入

```javascript
import LynCompLib from '@liyongning/lyn-comp-lib'
```

## 2. 按需加载

按需加载通过 `babel-plugin-component` 插件实现

### 2.1 安装 `babel-plugin-component`

```
npm i babel-plugin-component -D
```

### 2.2 安装 babel-loader、@babel/core

```
npm install --save-dev babel-loader @babel/core
```

### 2.3 配置 webpack

```javascript
module.exports = {
  ...
  module: {
    rules: [
      ...
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
      ...
    ]
  }
  ...
}
```

### 2.4 安装 @babel/preset-env

```
npm install @babel/preset-env --save-dev
```

### 2.5 配置 .babelrc 文件

```
{
  "presets": ["@babel/preset-env"],
  "plugins": [
    [
      "component",
      {
        "libraryName": "@liyongning/lyn-comp-lib",
        "style": false
      }
    ]
  ]
}
```