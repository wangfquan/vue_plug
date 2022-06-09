<!--
 * @Descripttion: 
 * @version: 
 * @Author: wangfquan
 * @Date: 2022-04-20 11:15:45
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-04-20 15:15:35
-->
<template>
  <div id="Jspdf">
    <div id="DomPdf">
      <h1>前端Jspdf将图片生成pdf，将网页生成pdf</h1>
      <h1 v-bg>添加全局指令v-bg</h1>
      <el-button type="primary" size="small" @click="getPdf('#DomPdf')"
        >导出</el-button
      >
      <el-button type="primary" size="small" @click="getplugin"
        >使用自定义插件</el-button
      >
      <img :src="posterUrl" alt="" />
    </div>
  </div>
</template>
<script>
import EventBus from "@/utils/event-bus";
import JsPDF from "jspdf";
export default {
  name: "JspdfVue",
  components: {},
  data() {
    return {
      posterUrl: "",
      canvas: null,
      htmlTitle: "jspdf插件",
    };
  },
  mounted() {
    EventBus.$on("sendPicImg", (msg) => {
      // A发送来的消息
      this.posterUrl = msg;
    });
    EventBus.$on("sendCanvas", (msg) => {
      // A发送来的消息
      this.savePdf(msg);
    });
  },
  methods: {
    getplugin() {
      console.log(this.$content);
      console.log(this.$ShowMessage("ok"));
    },
    savePdf(canvas) {
      var contentWidth = canvas.width;
      var contentHeight = canvas.height;
      //一页pdf显示html页面生成的canvas高度;
      var pageHeight = (contentWidth / 592.28) * 841.89;
      //未生成pdf的html页面高度
      var leftHeight = contentHeight;
      //页面偏移
      var position = 0;
      //a4纸的尺寸[595.28,841.89]，html页面生成的canvas在pdf中图片的宽高
      var imgWidth = 595.28;
      var imgHeight = (592.28 / contentWidth) * contentHeight;
      var pageData = canvas.toDataURL("image/jpeg", 1.0);
      var pdf = new JsPDF("", "pt", "a4");
      //   有两个高度需要区分，一个是html页面的实际高度，和生成pdf的页面高度(841.89)
      //   当内容未超过pdf一页显示的范围，无需分页
      if (leftHeight < pageHeight) {
        pdf.addImage(pageData, "JPEG", 0, 0, imgWidth, imgHeight);
      } else {
        // 分页
        while (leftHeight > 0) {
          pdf.addImage(pageData, "JPEG", 0, position, imgWidth, imgHeight);
          leftHeight -= pageHeight;
          position -= 841.89;
          //避免添加空白页
          if (leftHeight > 0) {
            pdf.addPage();
          }
        }
      }
      console.log("pdf截图");
      pdf.save("pdf截图" + ".pdf");
    },
  },
};
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
#Jspdf {
  width: 100%;
  img {
    width: 100%;
  }
}
</style>