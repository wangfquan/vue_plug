<!--
 * @Descripttion: 表格数据表头，内容数据进行参数传入
 * @version: 
 * @Author: wangfquan
 * @Date: 2022-04-22 10:49:09
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-04-22 14:04:37
-->
<template>
  <div>
    <el-table
      :data="itemData"
      :header-cell-style="setColumnDataColor"
      :cell-style="setCellStyle"
    >
      <el-table-column v-if="coSelection" type="selection" width="55" />
      <el-table-column
        v-for="(itt, index) in goodsHeaderArr"
        :key="`${index}${new Date().getTime()}`"
        :label="itt.name"
        :prop="itt.value"
        show-overflow-tooltip
      ></el-table-column>
      <slot></slot>
    </el-table>
  </div>
</template>

<script>
/* 引入table相关样式 */
import { setColumnDataColor, setCellStyle } from "./tableStyle";
export default {
  name: "itemTableVue",
  components: {},
  props: {
    /* table值 */
    itemObj: {
      type: Object,
    },
    /* 是否多选项 */
    coSelection: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      setColumnDataColor,
      setCellStyle,
      goodsHeaderArr: [],
      itemData: [],
    };
  },
  watch: {
    //对传入参数进行解析
    itemObj: {
      deep: true,
      immediate: true,
      handler(val) {
        if (val.goodsHeader) {
          this.goodsHeaderArr = val.goodsHeader;
        }
        console.log(val.goodsList);
        if (val.goodsList) {
          let arr = [];
          val.goodsList.map((list) => {
            list.time = list.value;
            arr.push(list);
            this.itemData = arr;
          });
        }
      },
    },
  },
};
</script>
<style lang="scss" scoped>
</style>
