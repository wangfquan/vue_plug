<!--
 * @Descripttion: 
 * @version: 
 * @Author: wangfquan
 * @Date: 2022-04-18 15:03:29
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-04-18 17:11:43
-->
<template>
  <div class="channel">
    <div class="itemList">
      <div class="item" v-for="(item, index) in itemList" :key="index">
        <i :class="item.icon"></i>
        <span>{{item.name}}</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "ChannelModul",
  data() {
    return {
      itemList: [
        {
          icon: "el-icon-edit",
          name: "党员考评",
        },
        {
          icon: "el-icon-edit",
          name: "党建要闻",
        },
        {
          icon: "el-icon-edit",
          name: "任务介绍",
        },
        {
          icon: "el-icon-edit",
          name: "微党课",
        },
        {
          icon: "el-icon-edit",
          name: "主题活动",
        },
      ],
    };
  },
  components: {},
  methods: {},
};
</script>
<style lang="scss" rel="stylesheet/scss" scoped>
.itemList{
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-wrap: wrap;
    .item{
        padding: 20px 30px ;
        border: 1px solid #f1f1f1;
        margin: 0 0 10px 10px;
        cursor: pointer;
    }
}
</style>>

