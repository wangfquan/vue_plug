<!--
 * @Descripttion: 
 * @version: 
 * @Author: wangfquan
 * @Date: 2022-04-22 15:50:38
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-05-26 17:45:24
-->
<template>
  <div id="Table">
    <h1>elementUI使用与封装</h1>
    <ElementTable></ElementTable>
    <SubTable
      :pageLoading="pageLoading"
      :list="tableList"
      :columns="tableColumns"
      :operations="tableOperations"
      :options="tableOptions"
      :tablePageIndex.sync="tablePageIndex"
      :tablePageTotal="tablePageTotal"
      @operation="operationHandle"
    ></SubTable>
  </div>
</template>
<script>
import contactOption from "@/components/Table/mock.js";
let { tableColumns, tableOperations, tableOptions, tableData } = contactOption;
export default {
  name: "TableMain",
  components: {
    ElementTable: () => import("@/components/elementTable/elementTable.vue"),
    SubTable: () => import("@/components/Table/ItemTable.vue"),
  },
  data() {
    return {
      dialogVisible: false,
      tableColumns,
      tableOperations,
      tableOptions,
      tablePageIndex: 0,
      tablePageSize: 10,
      tablePageTotal: 0,
      tableList: [],
      pageLoading: false,
    };
  },

  mounted() {
    this.initData();
  },
  methods: {
    async initData() {
      this.pageLoading = true;
      let params = {
        companyNo: this.$route.query.no,
        page: this.tablePageIndex,
        limit: this.tablePageSize,
      };
      try {
        console.log(params);
        // let { data } = await queryUserCenterPaddingContract(params);
        // if (data.code === 200) {
        this.tableList = tableData.data || [];
        this.tablePageTotal = 15;
        // }
      } catch (error) {
        console.log("报错");
      } finally {
        this.pageLoading = false;
      }
    },
    operationHandle(data) {
      let { row } = data;
      let { no, id } = row;
      if (no) {
        console.log(no);
        console.log(id);
        // let url = `/contractTemplate?id=${id}&no=${no}&status=detail`;
        // window.open(process.env.VUE_APP_PERSONURL + url, "_blank");
      }
    },
  },
  watch: {
    tablePageIndex(v) {
      console.log(v);
      this.initData();
    },
  },
};
</script>

