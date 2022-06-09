<!--
 * @Descripttion: 
 * @version: 
 * @Author: wangfquan
 * @Date: 2022-04-22 10:41:36
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-04-22 16:18:24
-->
<template>
  <div id="elementTable">
    <ItemTable :itemObj="itemObj" :coSelection="true">
      <el-table-column label="操作" align="left" width="350">
        <template slot-scope="scope">
          <el-button
            v-for="(tmp, i) in operations"
            :key="i"
            :type="tmp.type || 'text'"
            :style="{ color: getTableItemColor(tmp, scope.row) }"
            :disabled="
              getTableOperationBtnDisabled(tmp, scope.row, scope.$index)
            "
            @click.native="tableOperationClick(tmp, scope.row, scope.$index)"
            >{{
              getTableOperationBtnText(tmp, scope.row, scope.$index)
            }}</el-button
          >
        </template>
      </el-table-column>
    </ItemTable>
    
  </div>
</template>
<script>
import { isFunction } from "lodash"
import { MockData, OptionsData } from "@/components/elementTable/testData";
export default {
  name: "ElementTable",
  components: {
    ItemTable: () => import("@/components/elementTable/itemTable.vue"),
  },
  data() {
    return {
      MockData,
      OptionsData,
      itemObj: {
        goodsHeader: [
          { value: "goodsClass", name: "模拟种类" },
          { value: "goodsId", name: "模拟Id" },
          { value: "goodsName", name: "模拟名称" },
          { value: "goodsAddress", name: "模拟地址" },
          { value: "goodsStar", name: "模拟等级评价★" },
          { value: "goodsImg", name: "模拟图片" },
          { value: "goodsSale", name: "模拟售价" },
          { value: "time", name: "模拟时间" },
        ],
        goodsList: [],
      },
      operations: [],
    };
  },
  watch: {
    MockData: {
      handler(n) {
        console.log(n);
        if (n) {
          this.itemObj.goodsList = n.data;
          console.log(this.itemObj);
        }
      },
      immediate: true,
      deep: true,
    },
    OptionsData: {
      handler(n) {
        console.log(n);
        if (n) {
          this.operations = n.data;
          console.log(this.operations);
        }
      },
      immediate: true,
      deep: true,
    },
  },
  mounted() {},
  methods: {
    // 获取表格操作按钮对应状态
    getTableOperationBtnDisabled(item, data, index) {
      console.log(index)
      let { disabled = false } = item;
      return isFunction(disabled) ? disabled(data) : disabled || false;
    },
    // 样式
    getTableItemColor(item, data) {
      let { color } = item;
      return isFunction(color) ? color(data) : color;
    },
    // 操作按钮点击事件
    tableOperationClick(item, row, index) {
      let { state = "" } = item;
      console.log(row)
      console.log(index)
      // this.$emit("operation", { state, row, index });
      this.$message.success(`点击成功，状态${state}`)
    },
    //操作文案
    getTableOperationBtnText(item, data, index) {
      console.log(item);
      console.log(data);
      console.log(index);
      let { text = "", handle = null } = item;
      return handle ? handle(data) : text || "-";
    },
  },
};
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
#elementTable {
}
</style>