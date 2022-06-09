/*
 * @Descripttion: 
 * @version: 
 * @Author: wangfquan
 * @Date: 2022-04-15 10:46:13
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-04-21 17:33:34
 */
import Vue from 'vue'
import App from './App.vue'

/* 引入路由 */
import router from './router/index.js'

/* 引入图片裁减组件 */
import VueCropper from 'vue-cropper'
Vue.use(VueCropper)

/* 引入element-ui */
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

/* 引入自定义指令canvas实现水印 */
import '@/utils/directives'

/* 引入htmlToPdf插件，及其他自定义，全局属性方法 */
import htmlToPdf from '@/utils/htmlToPdf'
Vue.use(htmlToPdf)

/* 引入视频播放器 */
import VideoPlayer from 'vue-video-player'
require('video.js/dist/video-js.css')
require('vue-video-player/src/custom-theme.css')
Vue.use(VideoPlayer)

/* 引入剪切板插件 */
import VueClipBoard from 'vue-clipboard2'
Vue.use(VueClipBoard);

/* 引入分步引导js */
import Driver from 'driver.js';
import 'driver.js/dist/driver.min.css';
Vue.prototype.$driver = new Driver({  //挂载全局使用
  doneBtnText: '完成',              // Text on the final button
  closeBtnText: '关闭',            // Text on the close button for this step
  stageBackground: 'salmon',       // Background color for the staged behind highlighted element
  nextBtnText: '下一步',              // Next button text for this step
  prevBtnText: '上一步',          // Previous button text for this step
})

/* 引入顶部进度条 */
import NProgress from 'nprogress' // 引入nprogress插件
import 'nprogress/nprogress.css'  // 这个nprogress样式必须引入
// 简单配置
// NProgress.inc(0.2)
// NProgress.configure({ easing: 'ease', speed: 500, showSpinner: false })
NProgress.start()

/* 引入图片懒加载 */
import VueLazyload from 'vue-lazyload'
import errorImg from '@/static/warn.png'
import loadImg from '@/static/loading.gif'
Vue.use(VueLazyload, {//懒加载配置项
  preLoad: 1.3,
  error: errorImg,
  loading: loadImg,
  attempt: 1
})


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
