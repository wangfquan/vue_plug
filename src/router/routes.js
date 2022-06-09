/*
 * @Descripttion: 
 * @version: 
 * @Author: wangfquan
 * @Date: 2022-04-15 17:23:16
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-04-22 15:53:51
 */
const baseRoute = [{
  path: '/',
  name: 'home',
  meta: {
    auth: false, // 是否登录状态下可访问
    keepAlive: false, // 是否缓存页面
  },
  component: () => import('@/views/home.vue')
},
// 无效路由重定向到首页
{
  path: "*",
  redirect: "/"
},
//pdf预览
{
  path: '/pdfPreview',
  name: 'pdfPreview',
  component: () => import('@/views/filePreview/components/PdfPreview.vue')
},
//elementUI table表格使用与封装
{
  path: '/tableMain',
  name: 'TableMain',
  component: () => import('@/views/TableMain.vue')
},

];
export default baseRoute
