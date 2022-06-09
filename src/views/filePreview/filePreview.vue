<!--
 * @Descripttion: 文件预览
 * @version: 
 * @Author: wangfquan
 * @Date: 2022-04-15 17:05:45
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-05-19 16:28:47
-->
<template>
  <div class="filePreview">
    <h1>前端实现文件预览</h1>
    https://juejin.cn/post/6844903561017425927
    <section>
      <span v-for="(file, index) in fileList" :key="index">
        <a href="#" style="color: #409eff" @click="hrefUrl(file.fileAccessory)"
          >《{{ file.fileName }}》</a
        >
      </span>
    </section>
  </div>
</template>

<script>
export default {
  name: "filePreview",
  data() {
    return {
      fileList: [
        {
          fileAccessory: "https://www.jvtd.cn/",
          fileName: "url外链预览",
        },
        {
          fileAccessory: "",
          fileName: "text文件预览",
        },
        
            {
          fileAccessory: "http%3A%2F%2Flearn.bankofamerica.com%2Fcontent%2Fexcel%2FWedding_Budget_Planner_Spreadsheet.xlsx",
          fileName: "xls文件预览",
        },
        {
          fileAccessory: "http://api.idocv.com/data/doc/manual.docx",
          fileName: "docx文件预览",
        },
        {
          fileAccessory:
            "http://storage.xuetangx.com/public_assets/xuetangx/PDF/PlayerAPI_v1.0.6.pdf",
          fileName: "pdf文件预览",
        },
        {
          fileAccessory:
            "https://cn.bing.com/images/search?q=%E5%9B%BE%E7%89%87&FORM=IQFRBA&id=49E031AAC7715C25D8E03215367A7B4A50E14354",
          fileName: "图片预览",
        },
        {
          fileAccessory: "https://up.ly93.cc/sm/f5rit0BrFfNODJi9.mp4",
          fileName: "视频文件预览",
        },
      ],
    };
  },
  methods: {
    hrefUrl(data) {
      console.log("hrefUrl:", data);
      if (data) {
        const addTypeArray = data.split(".");
        console.log(addTypeArray[addTypeArray.length - 1]);
        const addType = addTypeArray[addTypeArray.length - 1];
        if (addType == "pdf") {
          //下载
          // window.open(`${data}`);
          //预览
          window.open(`/pdfPreview?pdfUrl=${data}`, "_blank");
        } else if (addType == "docx" || addType == "doc") {
          window.open(
            `https://view.officeapps.live.com/op/view.aspx?src=${data}`
          );
        } else if (addType == "txt") {
          window.open(`${data}`);
        } else {
          window.open(`${data}`);
        }
      }
    },
  },
};
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
.filePreview {
  // height: 270px;
  // width: 400px;
}
</style>
