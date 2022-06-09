/*
 * @Descripttion: 
 * @version: 
 * @Author: wangfquan
 * @Date: 2022-04-15 17:23:07
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-04-19 09:59:17
 */

import Vue from 'vue'

import routes from './routes.js'

import Router from 'vue-router'
Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

router.beforeEach(async (to, from, next) => {
  console.log(to)
  console.log(from)
  next();
  // if (window._hmt) {
  //   if (to.path) {
  //     window._hmt.push(['_trackPageview', '/#' + to.fullPath])
  //   }
  // }

  // // 判断是否是其他地方跳转进来
  // if (to.query.clientId) {
  //   try {
  //     let { data } = await http.get(`${process.env.VUE_APP_QIGUANBANGLOGING}tokensync/getRedisValue/${to.query.clientId}`)
  //     if (data.code == 200 && data.data) {
  //       router.push({ query: {} })
  //       cookie.cookieSet("token", data.data);
  //       store.dispatch("setUser");
  //     }
  //   } catch (error) {
  //     console.log("请求错误", error);
  //   }
  // }

  // if (!cookie.cookieRead('token')) {
  //   apiHome.memberUser().then(data => {
  //     if (data.data.code == 0) {
  //       cookie.cookieSet("token", data.data.msg)
  //       store.dispatch("setUser");
  //     }
  //   })
  // }

  // if (to.path == "/RegionalLogistics") {
  //   store.commit("SET_INDEXKEY", 1);
  //   localStorage.set("tabIndexKey", 1);
  // } else if (to.path == "/RegionalVehicle") {
  //   store.commit("SET_INDEXKEY", 2);
  //   localStorage.set("tabIndexKey", 2);
  // }

  // 区分路由是否需要登录才能访问
  // if (to.meta.auth) {
  //   if (!cookie.cookieRead('token')) {
  //     console.log('没有登录')
  //     router.push('/')
  //     next()
  //   } else {
  //     next()
  //   }
  // } else {
  //   next();
  // }
});

router.afterEach((to, from, next) => {
  console.log(to)
  console.log(from)
  console.log(next)
  // next();
  window.scrollTo(0, 0)
  // let mo,so,mt = '';
  // if(to.path === '/trunk' || to.meta.pvCount) {
  //   if(to.fullPath === '/trunk?active=1') {
  //     // 货运大厅
  //     so = 'jyb-wuliu';
  //     mo = 'trunk_index';
  //   } else if(to.fullPath === '/trunk?active=2') {
  //     // 货车大厅
  //     so = 'jyb-wuliu';
  //     mo = 'trunk_car_index'
  //   } else if(to.fullPath === '/trunk?active=1&childActive=1') {
  //     // 竞价货运
  //     so = 'jyb-wuliu';
  //     mo = 'trunk_cargo_index'
  //   } else if(to.fullPath === '/trunk?active=2&childActive=1') {
  //     // 竞价承运
  //     so = 'jyb-wuliu';
  //     mo = 'trunk_transport_index'
  //   } else if(to.fullPath === '/trunk?active=1&childActive=3') {
  //     // 企业专项
  //     so = 'jyb-wuliu';
  //     mo = 'trunk_com_index'
  //   } else if(to.meta.pvCount) {
  //     let pvCount = to.meta.pvCount;
  //     so = pvCount.source;
  //     mo = pvCount.module;
  //     mt = pvCount.moduleType ? to.query[pvCount.moduleType]: '';
  //   }
  //   setTimeout(() => {
  //     new Probe({
  //       event: "pvCount",
  //       url: `${process.env.VUE_APP_BURYINGPOINT}/v3/visitor/index`,
  //       source: so,
  //       module: mo,
  //       moduleType: mt
  //     }).excute(window);
  //   }, 500);
  // }
});

export default router
