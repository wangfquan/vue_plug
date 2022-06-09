<template>
  <div>
    <section class="files-container" :class="{ 'full-screen': isFullScreen }">
      <div class="file-container">
        <pdf
          :src="pdfUrl"
          :page="currentPage"
          @num-pages="pageCount = $event"
          @page-loaded="currentPage = $event"
          @loaded="onLoaded"
          ref="pdf"
          class="file"
          :style="{ width: 100 * fileScale + '%' }"
        />
      </div>
      <div class="control-contiainer">
        <el-button icon="el-icon-arrow-left" type="primary" @click="goBack"
          >返回详情</el-button
        >
        <el-button
          icon="el-icon-arrow-left"
          type="primary"
          @click="changePage(0)"
          >上一页</el-button
        >
        <div class="pages">{{ currentPage }} / {{ pageCount }}</div>
        <el-button type="primary" @click="changePage(1)"
          >下一页<i class="el-icon-arrow-right el-icon--right"></i
        ></el-button>
      </div>
    </section>
  </div>
</template>

<script>
// import localStorage from "@/storage/localStorage";
import pdf from "vue-pdf";

export default {
  components: {
    pdf,
  },
  data() {
    return {
      pdfUrl: "",
      currentPage: 0,
      pageCount: 0,
      fileScale: 1, // 文件预览大小比例
      isFullScreen: true, // 是否全屏
    };
  },
  watch: {},
  mounted() {
      // alert(this.$route.query)
    let url = this.$route.query.pdfUrl;
    if (url) {
      this.pdfUrl = url;
      console.log(this.pdfUrl)
    }
  },
  created(){
      console.log("this.$route.query")
      console.log(this.$route.query)
  },
  methods: {
    goBack() {
      window.history.go(-1);
      //   let no = JSON.parse(localStorage.read("DeatilEnterPrise"));
      //   console.log(no);
      //   //   window.history.go(-1);
      //   this.$router.push({
      //     path: "/insuranceServiceDetails",
      //     query: { no: no },
      //   });
    },
    // 修复class为annotationLayer导致的大小不对，暂时不知这是不是BUG
    scaleFix() {
      setTimeout(() => {
        this.$refs.pdf.$refs.annotationLayer.style.width =
          this.$refs.pdf.$refs.canvas.offsetWidth + "px";
        this.$refs.pdf.$refs.annotationLayer.style.height =
          this.$refs.pdf.$refs.canvas.offsetHeight + "px";
        this.$refs.pdf.$refs.annotationLayer.style.transform = "initial";
      }, 800);
    },
    // 全屏窗口
    onFullScreen() {
      this.isFullScreen = !this.isFullScreen;
      this.scaleFix();
    },
    // 放大
    scalePlus() {
      if (this.fileScale >= 3) {
        return;
      }
      this.fileScale += 0.5;
      this.scaleFix();
    },
    // 缩小
    scaleMinus() {
      if (this.fileScale <= 1) {
        return;
      }
      this.fileScale -= 0.5;
      this.scaleFix();
    },
    // pdf加载完毕后
    onLoaded() {
      // 加载的时候先加载第一页
      this.currentPage = 1;
      this.scaleFix();
    },
    // 改变PDF页码
    changePage(val) {
      // val传过来区分上一页下一页的值，0上一页，1下一页
      if (val === 0 && this.currentPage > 1) {
        this.currentPage--;
      }
      if (val === 1 && this.currentPage < this.pageCount) {
        this.currentPage++;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
section.files-container {
  height: 500px;
  &.full-screen {
    position: fixed;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 9999;
    background: #fff;
    width: auto;
    height: auto;
  }
  .file-container {
    height: 100%;
    overflow: scroll;
    -webkit-overflow-scrolling: touch;
    .file {
      height: 100%;
    }
  }
  .control-contiainer {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(255, 255, 255, 0.7);
    text-align: center;
    padding: 5px 0;
    font-size: 12px;
    > span {
      margin: 0 8px;
    }
    .scale-num {
      min-width: 26px;
    }
    .btn {
      &.hightlight {
        color: rgba(255, 255, 255, 0.3);
      }
    }

    .pages {
      margin: 0 10px;
    }
  }
}
</style>
