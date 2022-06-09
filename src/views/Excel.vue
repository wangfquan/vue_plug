<!--
 * @Descripttion: 
 * @version: 
 * @Author: wangfquan
 * @Date: 2022-04-21 13:53:19
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-04-21 14:45:48
-->
<template>
  <div class="Excel">
    <h1>前端xlsx导入读取文件到表格</h1>
    <div class="import-excel-wrapper">
      <UploadExcel @on-success="handleSuccess" />
      <el-table
        :data="tableData2"
        tooltip-effect="dark"
        style="width: 100%"
        size="medium"
      >
        <el-table-column
          v-for="item in tableHeader"
          :key="item"
          :prop="item"
          :label="item"
          align="center"
        />
      </el-table>
    </div>
  </div>
</template>
 
<script>
import UploadExcel from "@/components/UploadExcel";
export default {
  name: "ExcelVue",
  components: { UploadExcel },
  data() {
    return {
      tableHeader: [],
      tableData2: [],
    };
  },
  methods: {
    handleSuccess({ header, results }) {
      this.tableHeader = header;
      this.tableData2 = results;
    },
  },
};
</script>
 
<style lang="scss" scoped>
.Excel {
  .el-upload-dragger {
    width: 100%;
  }
}
</style>