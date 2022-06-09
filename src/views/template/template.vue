<!--
 * @Descripttion: 
 * @version: 
 * @Author: wangfquan
 * @Date: 2022-04-18 13:39:33
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-04-20 09:19:57
-->

<template>
  <div id="template">
    <button @click="send(1)">切换1</button>
    <button @click="send(2)">切换2</button>
    <button @click="send(3)">切换3</button>
    <component :is="themeName" />
  </div>
</template>
<script>
import template1 from "@/views/template/components/template1.vue";
import template2 from "@/views/template/components/template2.vue";
import template3 from "@/views/template/components/template3.vue";
export default {
  name: "App",
  components: {
    template1,
    template2,
    template3,
  },
  data() {
    return {
      themeName: "template1",
    };
  },
  methods: {
    send(index) {
      this.themeName = `template${index}`;
    },
  },
};
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
#template {
  // border: 1px solid red;
  // width: 400px;
}
</style>
