/**
 * Created by Administrator on 2018/12/10 0010.
 */
const path = require('path')
const resolve = (dir) => path.join(__dirname, dir)
const IS_PROD = ['production', 'prod'].includes(process.env.NODE_ENV)
module.exports = {
  css: {
    modules: false,
    extract: IS_PROD,
    sourceMap: false,
    loaderOptions: {
      less: {
        modifyVars: {
          'toast-font-size': '26px',
          'toast-line-height': '40px',
          'toast-border-radius': '8px',
          'toast-icon-size': '100px',
          'toast-text-min-width': '160px',
          'toast-text-padding': '16px 24px',
          'toast-default-padding': '20px',
          'toast-default-width': '180px',
          'toast-default-min-height': '180px',
          'toast-position-top-distance': '100px',
          'toast-position-bottom-distance': '100px',
        }
      }
    }
  },
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('api', resolve('src/api'))
      .set('assets', resolve('src/assets'))
      .set('components', resolve('src/components'))
      .set('config', resolve('src/config'))
      .set('filter', resolve('src/filter'))
      .set('store', resolve('src/store'))
  },
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [
        path.resolve(__dirname, "src/assets/style/variables.less")
      ]
    }
  },
  devServer: {
    open: true,
    proxy: {
      '/v2': {
        target: 'http://api.dev.develop.miguo.cn',
        changeOrigin: true
      }
    }
  }
};
