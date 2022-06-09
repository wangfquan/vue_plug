<!--
 * @Descripttion: 
 * @version: 
 * @Author: wangfquan
 * @Date: 2022-04-21 13:53:19
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-04-21 14:38:15
-->
<template>
  <div class="UploadExcel">
    <el-upload
      ref="uploadExcel"
      drag
      action=""
      accept=".xlsx, .xls, .csv"
      :multiple="false"
      :show-file-list="false"
      :auto-upload="false"
      :limit="1"
      :on-exceed="handleLimit"
      :on-change="handleChange"
    >
      <i class="el-icon-upload" />
      <div class="el-upload__text">
        将Excel文件拖到此处，或<em>点击上传</em>
      </div>
    </el-upload>
  </div>
</template>
 
<script>
import excel from "@/utils/excel";

export default {
  name: "UploadExcel",
  methods: {
    handleLimit() {
      this.$message.warning("Excel文件只支持单个上传!");
      return false;
    },
    handleChange(file) {
      const rawFile = file.raw;
      if (!rawFile) return false;
      if (!this.isExcel(rawFile)) {
        this.$message.warning("Excel文件只支持.xlsx, .xls, .csv格式!");
        return false;
      }
      if (this.isLimit1M(rawFile)) {
        this.readFile(rawFile);
      }
    },
    isLimit1M(file) {
      const isLimit1M = file.size / 1024 / 1024 < 1;
      if (isLimit1M) {
        return true;
      } else {
        this.$message.warning("上传的Excel文件大小不能超过1M!");
        return false;
      }
    },
    isExcel(file) {
      return /\.(xlsx|xls|csv)$/.test(file.name);
    },
    readFile(file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const data = e.target.result;
        const { header, results } = excel.readDataFromExcel(data, "array");
        this.$emit("on-success", { header, results });
      };
      reader.readAsArrayBuffer(file);
      reader.onerror = (e) => {
        this.$message.error("Excel文件读取出错!" || e);
      };
      this.$refs.uploadExcel.clearFiles();
    },
  },
};
</script>
 
<style lang="scss" scoped>
.UploadExcel {
  display: flex;
  align-content: center;
  justify-content: center;
  margin-bottom: 30px;
  .el-upload-dragger {
    width: 100%;
  }
}
</style>