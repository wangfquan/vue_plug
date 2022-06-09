<!--
 * @Descripttion: 
 * @version: 
 * @Author: wangfquan
 * @Date: 2022-04-19 09:49:23
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-04-20 09:20:34
-->

<template>
  <div id="watermark-main">
    <h1>前端watermark插件水印</h1>
  </div>
</template>
<script>
import watermark from "watermark-dom";
export default {
  name: "WatermarkVue",
  components: {},
  data() {
    return {};
  },
  mounted() {
    console.log("开始");
    console.log(watermark);
    console.log(document.getElementById('watermark-main'));
    //   watermark.watermark.init({ watermark_txt: "测试水印，1021002301，测试水印，100101010111101" });
    watermark.watermark.init({
      watermark_txt: "测试水印，saucxs，测试水印，songEagle，工号等1", //水印的内容
      watermark_color: "#5579ee", //水印字体颜色
      watermark_fontsize: "24px", //水印字体大小
      watermark_alpha: 0.5, //水印透明度，要求设置在大于等于0.005
      watermark_angle: 45, //水印倾斜度数
      watermark_width: 200, //水印宽度
      watermark_height: 200, //水印长度
      watermark_parent_width: 0, //水印的总体宽度（默认值：body的scrollWidth和clientWidth的较大值）
      watermark_parent_height: 0, //水印的总体高度（默认值：body的scrollHeight和clientHeight的较大值）
    //   watermark_parent_node: document.getElementById('watermark'), //水印插件挂载的父元素element,不输入则默认挂在body上
      watermark_parent_node: 'watermark-main', //水印插件挂载的父元素element,不输入则默认挂在body上
    });
  },
  methods: {},
};
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
#watermark-main {
  height: 600px;
  width: 100%;
}
</style>