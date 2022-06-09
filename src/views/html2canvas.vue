<!--
 * @Descripttion: 
 * @version: 
 * @Author: wangfquan
 * @Date: 2022-04-20 09:44:27
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-04-20 15:08:12
-->
<template>
  <div id="Html2canvas">
    <h1>前端html2canvas截取网页dom生成图片</h1>
    <h5>
      读取 DOM 以及应用于元素的不同样式，将当前页面呈现为 canvas
      图像,该文案禁止选中复制
    </h5>
    <button @click="toImage">截取</button>
    <section class="image_tofile" ref="imageTofile">
      <img :src="picImg" alt="" />
      <span>
        <big
          >脚本遍历加载页面的DOM元素的信息，然后将其用于构建页面的表示形式。</big
        >
        换句话说，<strong
          >它实际上并不截取页面的屏幕截图，而是根据它从DOM读取的属性来构建页面的表示形式。</strong
        >
        结果，它只能正确呈现它理解的属性，这意味着有许多CSS属性无效，受支持的CSS
        <b>脚本使用的所有图片都必须位于相同的来源</b
        >，以便它无需代理即可读取它们。
        同样，如果canvas页面上还有其他元素被跨域内容污染，它们将变脏并且无法被html2canvas读取。
      </span>
    </section>
  </div>
</template>
<script>
import html2canvas from "html2canvas";
import picImg from "@/assets/img/test.png";
import EventBus from "@/utils/event-bus";
export default {
  name: "Html2canvasVue",
  components: {},
  data() {
    return {
      picImg,
      posterUrl: null,
    };
  },
  methods: {
    // 页面元素转图片
    toImage() {
      // 第一个参数是需要生成截图的元素,第二个是自己需要配置的参数,宽高等
      return html2canvas(this.$refs.imageTofile, {
        backgroundColor: null, // 背景颜色
        dpi: 192, // 将分辨率提高到特定的dpi,默认值为96
        scale: 2, // 用于渲染的比例尺。默认为浏览器设备像素比率。默认值是1，手机端设置成2  提升画面质量，但是会增加文件大小
        useCORS: true, // 是否尝试使用CORS从服务器加载图像,允许图片跨域
        allowTaint: true, //允许跨域
      }).then((canvas) => {
        this.posterUrl = canvas.toDataURL("image/png");
        console.log(this.posterUrl);
        EventBus.$emit("sendPicImg", this.posterUrl);
        EventBus.$emit("sendCanvas", canvas);
      });
    },
  },
};
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
#Html2canvas {
  width: 100%;
  h5 {
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
  img {
    width: 100%;
  }
}
</style>