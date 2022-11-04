<!--
 * @Descripttion: 文件预览
 * @version: 
 * @Author: wangfquan
 * @Date: 2022-04-15 17:05:45
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-11-04 15:29:27
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
    <h2>H5端相关文件类型预览</h2>
    <section>
      <span v-for="(file, index) in h5List" :key="index">
        <a
          href="#"
          style="color: #409eff"
          @click="H5hrefUrl(file.fileAccessory)"
          >《{{ file.fileName }}》</a
        >
      </span>
    </section>

    <FileMain
      :dialogVisible="viewVisible"
      :txtsrc="txtsrc"
      :FileType="FileType"
      @setFalse="setFalse"
    ></FileMain>
  </div>
</template>

<script>
export default {
  name: "filePreview",
  components: {
    FileMain: () => import("@/views/filePreview/components/FileMain"),
  },
  data() {
    return {
      viewVisible: false,
      fileType: "pdf", // 文件类型
      pdfsrc: "", // 文件地址
      txtsrc: "",
      fileList: [
        {
          fileAccessory: "https://www.jvtd.cn/",
          fileName: "url外链预览",
        },
        {
          fileAccessory: "http://192.168.0.62/files/导出保存txt文本.txt",
          fileName: "text文件预览",
        },

        {
          fileAccessory:
            "http://learn.bankofamerica.com/content/excel/Wedding_Budget_Planner_Spreadsheet.xlsx",
          // "http://learn.bankofamerica.com/content/excel/Wedding_Budget_Planner_Spreadsheet.xlsx",
          // "http://192.168.0.62/files/导出原生Excel文件.xlsx",

          fileName: "xls文件预览",
        },
        {
          fileAccessory: "http://api.idocv.com/data/doc/manual.docx",
          // fileAccessory: "http://192.168.0.62/files/导出保存txt文件.doc",
          fileName: "docx文件预览",
        },
        {
          // fileAccessory: "http://api.idocv.com/data/doc/manual.docx",
          fileAccessory: "http://192.168.0.62/files/导出保存txt文件.ppt",
          fileName: "ppt文件预览",
        },
        {
          fileAccessory:
            // "http://storage.xuetangx.com/public_assets/xuetangx/PDF/PlayerAPI_v1.0.6.pdf",
            "http://192.168.0.62/files/jspdf插件.pdf",
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
      h5List: [
        {
          fileAccessory: "https://www.jvtd.cn/",
          fileName: "url外链预览",
        },
        {
          fileAccessory: "",
          fileName: "text文件预览",
        },

        {
          fileAccessory:
            "http%3A%2F%2Flearn.bankofamerica.com%2Fcontent%2Fexcel%2FWedding_Budget_Planner_Spreadsheet.xlsx",
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
    //回调隐藏
    setFalse() {
      this.viewVisible = false;
    },
    //PC端
    hrefUrl(data) {
      console.log("hrefUrl:", data);
      if (data) {
        const addTypeArray = data.split(".");
        console.log(addTypeArray[addTypeArray.length - 1]);
        const addType = addTypeArray[addTypeArray.length - 1];
        console.log(addType);
        if (addType == "pdf") {
          //预览
          window.open(`/pdfPreview?pdfUrl=${data}`, "_blank");
        } else if (
          addType == "docx" ||
          addType == "doc" ||
          addType == "xlsx" ||
          addType == "ppt"
        ) {
          let url =
            "https://view.officeapps.live.com/op/view.aspx?src=" +
            encodeURIComponent(data);
          // let url = "https://view.officeapps.live.com/op/embed.aspx?src=" + data;
          console.log(url);
          window.open(url);
          // window.open(
          //   `https://view.officeapps.live.com/op/view.aspx?src=${data}`
          // );
        } else if (addType == "txt") {
          window.open(`${data}`);
        } else {
          window.open(`${data}`);
        }
      }
    },
    // H5
    H5hrefUrl(data) {
      if (data) {
        const addTypeArray = data.split(".");
        console.log(addTypeArray[addTypeArray.length - 1]);
        const addType = addTypeArray[addTypeArray.length - 1];
        console.log(addType);
        if (addType == "pdf") {
          //预览
          this.FileType = "pdf";
          this.txtsrc = data;
          this.viewVisible = true;
        } else if (
          addType == "docx" ||
          addType == "doc" ||
          addType == "xlsx" ||
          addType == "ppt"
        ) {
          this.FileType = "doc";
          this.txtsrc =
            "https://view.officeapps.live.com/op/embed.aspx?src=" +
            encodeURIComponent(data);
          this.viewVisible = true;
        } else if (addType == "txt") {
          this.FileType = "txt";
          this.urlToBlob(data);
          this.viewVisible = true;
        } else {
          this.FileType = `${new Date()}`;
          this.txtsrc =
            "https://view.officeapps.live.com/op/embed.aspx?src=" +
            encodeURIComponent(data);
          this.viewVisible = true;
        }
      }
    },
    urlToBlob(src) {
      let file_url = src;
      //可以是具体.txt也可以是接口返回的blob，或者web转换
      let xhr = new XMLHttpRequest();
      xhr.open("get", file_url, true);
      xhr.responseType = "blob";
      let self = this; //onload this指向为window中转一下
      this.loading = true;
      xhr.onload = function () {
        if (this.status == 200) {
          const reader = new FileReader();
          reader.onload = function () {
            self.txtsrc = reader.result; //获取的数据data
          };
          reader.readAsText(xhr.response, "GB2312");
        } else {
          console.log("//");
        }
      };
      xhr.send();
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
