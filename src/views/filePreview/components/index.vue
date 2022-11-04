<template>
  <div class="pdfConten">
    <div class="buttonContent">
      <div class="buttonList pageNum" v-if="pageTotalNum">
        <span class="text"> {{ pageNum }} / {{ pageTotalNum }}</span>
      </div>
      <section class="buttonList" v-if="pageTotalNum">
        <el-button type="info" @click="prePage">上一页</el-button>
        <el-button type="info" @click="nextPage">下一页</el-button>
      </section>
    </div>
    <div class="content">
      <pdf
        :page="pageNum"
        :src="urlObj"
        @progress="loadedRatio = $event"
        @num-pages="pageTotalNum = $event"
      ></pdf>
    </div>
  </div>
</template>
<script>
import pdf from "vue-pdf";
// import { Button } from "vant";
export default {
  name: "PdfMain",
  components: {
    pdf,
    // Button,
  },
  props: {
    urlObj: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      pageNum: 1,
      pageTotalNum: 0, // 总页数
      loadedRatio: 0, // 当前页面的加载进度，范围是0-1 ，等于1的时候代表当前页已经完全加载完成了
    };
  },
  watch: {
    urlObj: {
      handler(n) {
        if (n) {
          this.pageTotalNum = 0;
          this.pageNum = 1;
          this.loadedRatio = 0;
        }
      },
    },
  },
  methods: {
    // 上一页
    prePage() {
      let page = this.pageNum;
      page = page > 1 ? page - 1 : this.pageTotalNum;
      this.pageNum = page;
    },
    // 下一页
    nextPage() {
      let page = this.pageNum;
      page = page < this.pageTotalNum ? page + 1 : 1;
      this.pageNum = page;
    },
  },
};
</script>
<style lang="scss" scoped>
.pdfConten {
  height: 533px;
  background: white;
  position: relative;
  .buttonContent{
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .buttonList {
    top: 0;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    padding: 10px 0;
    button {
      margin: 0 5px;
    }
    .text {
      color: #409eff;
    }
  }
  .pageNum{
    margin-right: 10px;
  }
  .content {
    background: white;
  }
}
</style>
