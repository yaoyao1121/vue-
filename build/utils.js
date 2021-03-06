'use strict'
const path = require('path')
const config = require('../config')
//这个plugin的作用是将打包后生成的css文件通过link的方式引入到html中，如果不使用这个插件css代码会放到head标签的style中
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const packageConfig = require('../package.json')

//process.env.NODE_ENV是一个环境变量，它是由webpack.dev/prod.conf.js这两个文件声明的；
//这里的意思是判断当前是否是开发环境，如果是就把config下的index.js文件中的build.assetsSubDirectory或
//dev.assetsSubDirecotory的值赋给assetsSubDirectory
exports.assetsPath = function (_path) {
  const assetsSubDirectory = process.env.NODE_ENV === 'production'
    ? config.build.assetsSubDirectory
    : config.dev.assetsSubDirectory
 //path.posix.join是path.join的一种兼容性写法，它的作用是路径的拼接，这里返回的是"static/_path"
  return path.posix.join(assetsSubDirectory, _path)
}
//cssLoaders的作用是导出一个供vue-loader的options使用的一个配置
exports.cssLoaders = function (options) {
  options = options || {}

  const cssLoader = {
    loader: 'css-loader',
    options: {
      sourceMap: options.sourceMap
    }
  }

  const postcssLoader = {
    // postcss-loader后处理器
    loader: 'postcss-loader',
    options: {
      sourceMap: options.sourceMap
    }
  }

  // generate loader string to be used with extract text plugin
  function generateLoaders (loader, loaderOptions) {
    const loaders = options.usePostCSS ? [cssLoader, postcssLoader] : [cssLoader]

    if (loader) {
      loaders.push({
        loader: loader + '-loader',
        options: Object.assign({}, loaderOptions, {
          sourceMap: options.sourceMap
        })
      })
    }

    // Extract CSS when that option is specified
    // (which is the case during production build)
    
    //根据传进来得参数是否有extract属性来返回不同的值，生产环境下extract属性为true，开发模式下为false
    if (options.extract) {
      return ExtractTextPlugin.extract({
        use: loaders,   //生产环境  use:["css-loader","less-loader","sass-loader"...]
        fallback: 'vue-style-loader'
        //这些css代码打包以link的方式放到HTML中
        //use的值确切的说应该是这样：[{loader:'css-loader',options:{sourceMap:true}},{loader:'less-loader',options:{sourceMap:true}}]
      })
    } else {
      return ['vue-style-loader'].concat(loaders) 
      //开发环境下：["vue-style-loader","css-loader","less-loader","sass-loader"....]
    }
  }

  // https://vue-loader.vuejs.org/en/configurations/extract-css.html
  return {
    css: generateLoaders(),
    postcss: generateLoaders(),
    less: generateLoaders('less'),
    sass: generateLoaders('sass', { indentedSyntax: true }),
    scss: generateLoaders('sass'),
    stylus: generateLoaders('stylus'),
    styl: generateLoaders('stylus')
  }
}

// Generate loaders for standalone style files (outside of .vue)
//styleLoaders是用来给webpack提供所有和css相关得loader的配置，它也使用了cssLoaders()方法；
//它返回的是webpack中module里常用的配置格式
exports.styleLoaders = function (options) {
  const output = []
  const loaders = exports.cssLoaders(options)

  for (const extension in loaders) {
    const loader = loaders[extension]
    output.push({
      test: new RegExp('\\.' + extension + '$'),
      use: loader
    })
  }

  return output
}

//'node-notifier'是一个跨平台系统通知的页面，当遇到错误时，它能用系统原生的推送方式给你推送信息
exports.createNotifierCallback = () => {
  const notifier = require('node-notifier')

  return (severity, errors) => {
    if (severity !== 'error') return

    const error = errors[0]
    const filename = error.file && error.file.split('!').pop()

    notifier.notify({
      title: packageConfig.name,
      message: severity + ': ' + error.name,
      subtitle: filename || '',
      icon: path.join(__dirname, 'logo.png')
    })
  }
}
