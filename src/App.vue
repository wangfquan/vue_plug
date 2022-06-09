<!--
 * @Descripttion: 
 * @version: 
 * @Author: wangfquan
 * @Date: 2022-04-15 10:46:13
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-04-22 10:42:33
-->

<template>
  <div id="app">
    <HelloWorld msg="Demo验证" />
    <router-view></router-view>
  </div>
</template>

<script>
import HelloWorld from "@/components/HelloWorld.vue";
export default {
  name: "App",
  components: {
    HelloWorld,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style>
body{
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  border: 1px solid black;
  padding: 20px;
}
.content {
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
}
</style>
