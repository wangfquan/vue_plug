<!--
 * @Descripttion: 
 * @version: 
 * @Author: wangfquan
 * @Date: 2022-04-20 15:26:29
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-04-20 16:43:14
-->
<template>
  <div id="Driverjs">
    <h1>前端Driverjs分步引导</h1>
    <h5>需在mounted生命周期中执行</h5>
    <el-button @click="startModul">开始（点击事件无用）</el-button>
    <el-button @click="highlight">高亮（点击事件无用）</el-button>
    <div id="some-element1">第一个</div>
    <div id="some-element2">第二个</div>
    <div id="some-element3">第三个</div>
    <div></div>
  </div>
</template>
<script>
import Driver from "driver.js";
import "driver.js/dist/driver.min.css";
import driverStep from "@/utils/driver";
export default {
  name: "DriverjsVue",
  components: {},
  data() {
    return {
      demoDriver: null,
    };
  },
  mounted() {
    //分步引导
    // this.$driver.defineSteps(driverStep);
    // this.$driver.start();
    //高亮
    // this.demoDriver = new Driver();
    // this.demoDriver.highlight("#some-element3");
  },
  methods: {
    startModul() {
      this.$nextTick(() => {
        this.$driver.defineSteps(driverStep);
        this.$driver.start();
      });
    },
    highlight() {
      this.demoDriver = new Driver();
      console.log(this.demoDriver);
      this.demoDriver.highlight("#some-element3");
    },
  },
};
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
#Driverjs {
  width: 100%;
  img {
    width: 100%;
  }
}
</style>