<!--
 * @Descripttion: 
 * @version: 
 * @Author: wangfquan
 * @Date: 2022-04-20 16:33:24
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-04-21 10:31:14
-->
<template>
  <div id="Mockjs">
    <h1>前端mockjs模拟数据</h1>
    <el-table :data="tableData" style="width: 100%">
      <template v-for="(item, index) in headTable">
        <el-table-column :key="index" :prop="item.prop" :label="item.name">
        </el-table-column
      ></template>
    </el-table>
  </div>
</template>
<script>
import MockData from "@/utils/mock";
import EventBus from "@/utils/event-bus";
export default {
  name: "MockjsVue",
  components: {},
  data() {
    return {
      headTable: [
        { prop: "goodsClass", name: "模拟种类" },
        { prop: "goodsId", name: "模拟Id" },
        { prop: "goodsName", name: "模拟名称" },
        { prop: "goodsAddress", name: "模拟地址" },
        { prop: "goodsStar", name: "模拟等级评价★" },
        { prop: "goodsImg", name: "模拟图片" },
        { prop: "goodsSale", name: "模拟售价" },
      ],
    };
  },
  computed: {
    tableData() {
      console.log(MockData);
      return MockData ? (MockData.data ? MockData.data : []) : [];
    },
  },
  watch: {
    tableData: {
      handler(n) {
        if (n) {
          EventBus.$emit("tableData", n);
          EventBus.$emit("tableHeardData", this.headTable);
        }
      },
      immediate: true,
      deep: true,
    },
  },
  mounted() {},
  methods: {},
};
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
#Mockjs {
  width: 100%;
  img {
    width: 100%;
  }
}
</style>