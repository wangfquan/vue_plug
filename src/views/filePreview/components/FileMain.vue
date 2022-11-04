

<!--
 * @Descripttion: 
 * @version: 智能门户-移动端1.0.0
 * @Author: wangfquan
 * @Date: 2022-05-11 16:13:01
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-11-04 15:39:35
-->
<template>
  <div>
    <el-dialog title="提示" :visible="dialogVisible" @close="setFalse">
      <!-- 预览PDF文件 -->
      <div v-if="FileType == 'pdf'" class="myVantOverlay" @click.stop>
        <PdfItem :urlObj="txtsrc"></PdfItem>
      </div>
      <!-- 预览docx文件格式 -->
      <!-- <div v-else-if="FileType == 'docx'" class="myVantOverlay" @click.stop>
        <div class="file" ref="file_doc"></div>
      </div> -->
      <!-- 预览txt类型文件 -->
      <div
        v-else-if="FileType == 'txt'"
        class="myVantOverlay txtContent"
        @click.stop
      >
        <!-- 第一种 -->
        <!-- <iframe @load="loadFrame"  ref="iframeTxt" frameborder="0" width="100%" height="533">
        </iframe> -->
        <!-- 第二种 -->
        <!-- <van-field
          type="textarea"
          disabled
          :rows="22"
          placeholder=""
          v-model="txtsrc"
        >
        </van-field> -->
        <!-- 第三种 -->
        <div class="txt" v-html="txtsrc"></div>
      </div>
      <!-- 预览其他类型文件 -->
      <div v-else class="myVantOverlay" @click.stop>
        <iframe ref="iframe" frameborder="0" width="100%" height="533">
        </iframe>
      </div>
    </el-dialog>
  </div>
</template>
<script >
// import axios from "axios";
// const docx = require("docx-preview");
// window.JSZip = require("jszip");
export default {
  name: "comDetails",
  props: {
    dialogVisible: {
      type: Boolean,
      default: true,
    },
    FileType: {
      type: String,
      default: "",
    },
    txtsrc: {
      type: String,
      default: "",
    },
  },
  components: {
    PdfItem: () => import("@/views/filePreview/components/index"),
  },
  data() {
    return {};
  },
  computed: {},
  created() {},
  watch: {
    FileType: {
      handler(n, o) {
        console.log(n);
        console.log(o);

        if (n != "pdf" && n != "txt") {
          this.$nextTick(() => {
            this.$refs.iframe.contentWindow.location.replace(this.txtsrc);
          });
        } else if (n == "txt") {
          this.$nextTick(() => {
            /* 获取设置iframe内容 已废弃 */
            // this.$refs.iframeTxt.contentWindow.location.replace(this.txtsrc);
            // const doc = this.$refs.iframeTxt.contentWindow.document;
            // const head = doc.getElementsByTagName("head");
            // const metaTag = document.createElement("meta");
            // metaTag.setAttribute("content", "text/html; charset=gbk");
            // head[0].append(metaTag);
            // console.log(metaTag);
            // console.log(this.$refs.iframeTxt);
            // console.log(this.$refs.iframeTxt.contentWindow);
            // console.log(this.$refs.iframeTxt.contentWindow.document);
            // console.log(head);
          });
        } else if (n == "docx") {
        //   
        
        }
      },
    },
  },
  methods: {
    // iframe加载完成回调处理
    loadFrame() {
      // const doc = this.$refs.iframeTxt.contentWindow.document;
      // const head = doc.getElementsByTagName("head");
      // const metaTag = document.createElement("meta");
      // metaTag.content = "text/html; charset=gbk";
      // metaTag.id = "222";
      // metaTag.setAttribute("content", "text/html; charset=gbk");
      // metaTag.setAttribute(" http-equiv", "Content-Type");
      // head[0].append(metaTag);
      // console.log(head);
      // console.log(metaTag);
    },
    setFalse() {
      this.$emit("setFalse");
    },
  },
};
</script>
<style lang="scss" scoped>
// .myVantOverlay {
//   background: white;
//   /deep/.van-field__control {
//     &:disabled {
//       color: #000 !important;
//       -webkit-text-fill-color: #000 !important;
//     }
//   }
// }
.txtContent {
  padding: 2px;
  height: 500px;
  overflow: scroll;
  border: 15px solid white;
}
.file {
  background: white;
}
</style>



