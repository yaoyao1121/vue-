'use strict'
// Template version: 1.2.5
// see http://vuejs-templates.github.io/webpack for documentation.

const path = require('path') //这里引用了node的path模块

module.exports = {
  dev: {

    // Paths
    assetsSubDirectory: 'static', //静态资源目录，默认是"static"
    assetsPublicPath: '/',   //指的是发布路径
    proxyTable: {
      '/api': {
              target: 'url',
              changeOrigin: true,
              pathRewrite: {
                  '^/api': ''
              }
          }
    },   //是我们常用来配置代理API地方（解决跨域）

    // Various Dev Server settings
    host: 'localhost', // can be overwritten by process.env.HOST
    port: 8080, // can be overwritten by process.env.PORT, if port is in use, a free one will be determined
    autoOpenBrowser: false,  //是否自动打开默认浏览器  false不打开   true 打开
    errorOverlay: true, //查询错误
    notifyOnErrors: true, //通知错误
    poll: false, // https://webpack.js.org/configuration/dev-server/#devserver-watchoptions-
    
    //poll是跟devserver相关的一个配置，webpack为我们提供的devserver是可以监控文件改动的，但在有些情况下却不能工作，我们可以设置一个轮询（poll）来解决
    
    // Use Eslint Loader?
    // If true, your code will be linted during bundling and
    // linting errors and warnings will be shown in the console.
    useEslint: true,  //是否使用eslint代码检查工具
    // If true, eslint errors and warnings will also be shown in the error overlay
    // in the browser.
    showEslintErrorsInOverlay: false,  //是否展示eslint的错误提示

    /**
     * Source Maps
     */

    // https://webpack.js.org/configuration/devtool/#development
    devtool: 'eval-source-map',   //webpack提供的用来方便调试的配置，它有四种模式，可以查看webpack文档了解更多

    // If you have problems debugging vue-files in devtools,
    // set this to false - it *may* help
    // https://vue-loader.vuejs.org/en/options.html#cachebusting
    cacheBusting: true, //一个配合devtool的配置，当给文件名插入新的hash导致清楚缓存时是否生成souce maps，默认在开发环境下为true

    // CSS Sourcemaps off by default because relative paths are "buggy"
    // with this option, according to the CSS-Loader README
    // (https://github.com/webpack/css-loader#sourcemaps)
    // In our experience, they generally work as expected,
    // just be aware of this issue when enabling this option.
    cssSourceMap: false, //是否开启cssSourceMap
  },

  build: {
    // Template for index.html
    index: path.resolve(__dirname, '../dist/index.html'),
    //index编译后index.html的路径，path.resolve(__dirname,'../dist')中
    //path.resolve(__dirname)指的是index.js所在的绝对路径，再去找"../dist"这个路径（node相关知识）

    // Paths
    assetsRoot: path.resolve(__dirname, '../dist'), //打包后的文件跟路径
    assetsSubDirectory: 'static', //静态资源目录，默认是"static"
    assetsPublicPath: '/',  //指的是发布路径

    /**
     * Source Maps
     */

    productionSourceMap: true,  //是否开启source-map  源映射 
    // 源映射详情：  https://www.cnblogs.com/xuld/p/5882677.html
    
    // https://webpack.js.org/configuration/devtool/#production
    devtool: '#source-map', //webpack提供的用来方便调试的配置

    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: false, //是否压缩
    productionGzipExtensions: ['js', 'css'], //gzip模式下需要压缩的文件的扩展名，设置后会对相应扩展名的文件进行压缩

    // Run the build command with an extra argument to
    // View the bundle analyzer report after build finishes:
    // `npm run build --report`
    // Set to `true` or `false` to always turn it on or off
    bundleAnalyzerReport: process.env.npm_config_report    //是否开启打包后的分析报告
  }
}
