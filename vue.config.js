/*
 * @Descripttion: vue.config文件配置
 * @version: 
 * @Author: wangfquan
 * @Date: 2022-04-15 10:46:13
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-04-20 09:16:00
 */
/**
 * @name: 
 * @test: 
 * @msg: 
 * @param {*}
 * @return {*}
 */
const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  chainWebpack: config => {
    /* 设置别名 */
    config.resolve.alias
    // .set('@', resolve('./src'))
    // .set('videojs', resolve('video.js'))
    /* 配置 */
    config.module
      .rule('vue')
      .use('vue-loader')
      .tap(options => {
        // 修改它的选项...
        return options
      })
  },
  // 解决vue-video-play最新版会报错问题https://github.com/surmon-china/vue-video-player/issues/211
  configureWebpack:{
    resolve:{
      alias:{
        videojs: 'video.js'
      }
    }
  }
})
