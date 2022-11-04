<!--
 * @Descripttion: 主页面
 * @version: 
 * @Author: wangfquan
 * @Date: 2022-04-15 10:46:13
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-11-04 15:56:54
-->

<template>
  <div id="homeVue">
    <HelloWorld msg="脚手架技术demo" />
    <main class="content">
      <section
        v-for="(item, index) in componentList"
        :key="index"
        :class="['MockjsVue', 'PageExcelVue'].includes(item) ? 'MockjsVue' : ''"
      >
        <template>
          <component
            :index="index"
            :key="index"
            :is="item"
            :accept="fileAccept"
            :size="fileMaxSize"
            :limit="fileLimit"
            :fileList="fileList"
            :isList="false"
            :isDesign="'上传'"
            @close="cancelSubmit('dialogForm')"
            @handleFile="handleFile"
          ></component>
          <span v-if="item == 'BaseCropperUpload'"
            >请上传5MB以内的 png、bmp、jpeg、jpg格式图片</span
          >
        </template>
      </section>
    </main>
  </div>
</template>

<script>
export default {
  name: "homeVue",
  components: {
    HelloWorld: () => import("@/components/HelloWorld.vue"),
    WebSocketPlug: () => import("@/views/WebSocketPlug.vue"),
    BaseCropperUpload: () => import("@/views/BaseCropperUpload.vue"),
    FilePreview: () => import("@/views/filePreview/filePreview.vue"),
    TemplateVue: () => import("@/views/template/template.vue"),
    WatermarkVue: () => import("@/views/watermark.vue"),
    CanvasMarkVue: () => import("@/views/canvasMark.vue"),
    TreeDraggableVue: () => import("@/views/treeDraggable.vue"),
    VueDraggableVue: () => import("@/views/VueDraggable.vue"),
    VideoPlayerVue: () => import("@/views/videoPlayer.vue"),
    Clipboard2Vue: () => import("@/views/clipboard2.vue"),
    Html2canvasVue: () => import("@/views/html2canvas.vue"),
    JspdfVue: () => import("@/views/jspdf.vue"),
    DriverjsVue: () => import("@/views/driverjs.vue"),
    MockjsVue: () => import("@/views/mockjs.vue"),
    FileSaverVue: () => import("@/views/fileSaver.vue"),
    ExcelVue: () => import("@/views/Excel.vue"),
    PageExcelVue: () => import("@/views/PageExcel.vue"),
    VueLazyloadVue: () => import("@/views/VueLazyload.vue"),
    TailwindCSS: () => import("@/views/TailwindCSS.vue"),
  },
  data() {
    return {
      // 文件上传
      fileAccept: ".png,.jpg,.jpeg",
      fileLimit: 1,
      fileMaxSize: 500,
      fileList: [],
      componentList: [
        "WebSocketPlug",
        "BaseCropperUpload",
        "FilePreview",
        "TemplateVue",
        "WatermarkVue",
        "CanvasMarkVue",
        "TreeDraggableVue",
        "VueDraggableVue",
        "VideoPlayerVue",
        "Clipboard2Vue",
        "Html2canvasVue",
        "JspdfVue",
        "MockjsVue",
        "FileSaverVue",
        "ExcelVue",
        "PageExcelVue",
        "DriverjsVue",
        "VueLazyloadVue",
        "TailwindCSS",
      ],
    };
  },
  methods: {
    handleFile(data) {
      this.fileList = data;
      console.log(data);
    },
    cancelSubmit() {},
  },
};
</script>

<style lang="scss" rel="stylesheet/scss">
#homeVue {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  border: 1px solid red;
}
.content {
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;
  > section {
    border: 2px solid green;
    width: 24%;
    height: 600px;
  }
  .MockjsVue {
    width: 72.5%;
  }
}
</style>
