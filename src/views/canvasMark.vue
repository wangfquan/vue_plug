<!--
 * @Descripttion: 
 * @version: 
 * @Author: wangfquan
 * @Date: 2022-04-19 10:32:13
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-04-20 09:21:19
-->
<template>
  <div id="canvasMark-main" ref="imageCon" v-canvasmark="{text:'水印名称',textColor:'black'}" >
    <h1>前端canvas指令实现水印</h1>
  </div>
</template>
<script>
export default {
  name: "canvasMarkVue",
};
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
#canvasMark-main {
  height: 600px;
  width: 100%;
}
</style>