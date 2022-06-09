<!--
 * @Descripttion: 
 * @version: 
 * @Author: wangfquan
 * @Date: 2022-04-20 09:41:06
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-04-20 10:00:24
-->
<template>
  <div id="watermark-main">
    <h1>前端剪切板插件</h1>
    <span
      style="cursor: pointer"
      v-clipboard:copy="value"
      v-clipboard:success="onCopy"
      v-clipboard:error="onError"
    >
      {{ value }}</span
    >
    <button
      type="button"
      v-clipboard:copy="value"
      v-clipboard:success="onCopy"
      v-clipboard:error="onError"
    >
      按钮复制文案
    </button>
    <button type="button" @click="copy">调用原型方法复制文案</button>
    <textarea name="rowtext" id="" cols="30" rows="10"></textarea>
  </div>
</template>
<script>
export default {
  name: "Clipboard2Vue",
  components: {},
  data() {
    return {
      value: "文本上直接点击复制文案",
    };
  },
  methods: {
    onCopy(e) {
      this.$message.success("复制成功！");
      console.log(e);
    },
    onError(e) {
      this.$message.error("复制失败！");
      console.log(e);
    },
    //通过调用clipboard2绑定到原型上的copyText方法进行复制
    copy() {
      var _this = this;
      this.$copyText(this.value).then(
        function (e) {
          //复制成功
          _this.$message.success("复制成功！");
          console.log(e);
        },
        function (e) {
          //复制失败
          _this.$message.success("复制成功！");
          console.log(e);
        }
      );
    },
  },
};
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
</style>