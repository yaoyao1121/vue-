'use strict'
//引入webpack-merge模块  作用是来合并两个配置文件对象并生成一个新的配置文件，有点儿类似于es6的object.assign()
const merge = require('webpack-merge')
//引入prod.env.js文件
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"' //开发环境
})
//vue-cli中将一些通用的配置抽出来放在一个文件内，在对不同的环境配置不同的代码，最后使用webpack-merge来进行合并，减少重复代码
//https://www.npmjs.com/package/webpack-merge   
//还有一点需要注意是的，development和production一定要加双引号，不然会报错！！！
