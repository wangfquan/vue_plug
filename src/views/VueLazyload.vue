<!--
 * @Descripttion: 
 * @version: 
 * @Author: wangfquan
 * @Date: 2022-04-21 15:26:32
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-04-21 17:38:16
-->
<template>
  <div id="VueLazyload">
    <h1>前端VueLazyload图片懒加载</h1>
    <ul>
      <li v-for="(img, index) in ImgList" :key="index">
        <img v-lazy="img" :key="img" />
      </li>
      <li>
        <img v-lazy="requireImg" />
      </li>
      <li>
        <img v-lazy="imgNoFind" />
      </li>
    </ul>
    <component :is="componentName" :msg="'动态引入组件与图片方式'"></component>
  </div>
</template>
<script>
import ImgList from "@/utils/imgList";
export default {
  name: "VueLazyloadVue",
  components: {},
  data() {
    return {
      ImgList,
      requireImg: "",
      imgNoFind: "",
      componentName: "",
    };
  },
  mounted() {
    this.requireImg = require("@/static/404.png");
    this.componentName = () => import(`@/components/HelloWorld.vue`);
  },
  methods: {},
};
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
#VueLazyload {
  width: 100%;
  ul {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-wrap: wrap;
    padding: 0;
    margin: 0;
    list-style: none;
    li {
      list-style: none;
      img {
        display: inline-block;
        width: 100px;
      }
    }
  }
}
</style>