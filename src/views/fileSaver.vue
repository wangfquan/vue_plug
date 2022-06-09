<!--
 * @Descripttion: 
 * @version: 
 * @Author: wangfquan
 * @Date: 2022-04-20 16:26:02
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-04-21 14:34:05
-->
<template>
  <div id="FileSaver">
    <h1>前端FileSaver保存文件</h1>
    <h3>{{ txtDemo }}</h3>
    <el-button @click="getTxt">导出保存txt文本</el-button>
    <el-button @click="getFile">导出保存doc文件</el-button>
    <el-button @click="getExcel">导出mock模拟数据原生Excel文件</el-button>
    <el-button @click="getImg">导出原生图片</el-button>
    <img :src="picImg" alt="" />
  </div>
</template>
<script>
import picImg from "@/assets/img/test.png";
import FileSaver from "file-saver";
import EventBus from "@/utils/event-bus";
import fileSaveFn from "@/utils/FileSaver";
export default {
  name: "FileSaverVue",
  components: {},
  data() {
    return {
      picImg,
      tableData: null,
      tableHeardData: null,
      txtDemo:
        "FileSaver.js 是在客户端保存文件的解决方案，非常适合需要生成文件",
    };
  },
  mounted() {
    EventBus.$on("tableData", (msg) => {
      // A发送来的消息
      this.tableData = msg;
    });
    EventBus.$on("tableHeardData", (msg) => {
      // A发送来的消息
      this.tableHeardData = msg;
    });
  },
  methods: {
    getTxt() {
      const blob = new Blob([this.txtDemo], {
        type: "text/plain;charset=utf-8",
      });
      FileSaver.saveAs(blob, "导出保存txt文本.txt");
    },
    getFile() {
      const file = new File([this.txtDemo], "导出保存txt文件.doc", {
        type: "text/plain;charset=utf-8",
      });
      FileSaver.saveAs(file);
    },
    getExcel() {
      console.log(this.tableData);
      console.log(this.tableHeardData);
      //tableHeardData
      //tableData是请求的数据循环拼接
      let str = [];
      this.tableHeardData.forEach((item) => {
        str.push(item.name);
      });
      this.tableData.forEach((item) => {
        let resData = [];
        for (let key in item) {
          console.log(key);
          resData += item[key] + ",";
        }
        str += "\n" + resData;
      });
      let exportContent = "\uFEFF";
      console.log(str);
      let blob = new Blob([exportContent + str], {
        type: "text/plain;charset=utf-8",
      });
      console.log(blob);
      FileSaver.saveAs(blob, "导出原生Excel文件.xlsx");
    },
    getImg(){
        fileSaveFn.getImgURLs(this.picImg,'图片')
    },
  },
};
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
#FileSaver {
  width: 100%;
  img {
    width: 100%;
  }
}
</style>