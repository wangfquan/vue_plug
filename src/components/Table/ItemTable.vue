<!--
 * @Descripttion: 
 * @version: 
 * @Author: wangfquan
 * @Date: 2022-04-22 15:46:49
 * @LastEditors: 
 * @LastEditTime: 2022-04-22 15:54:28
-->
<template>
  <div class="sub-table">
    <div class="sub-table__container" v-if="!showDefault" v-loading='pageLoading'>
      <div class="table__container" >
        <el-table
          ref="table"
          class='table-box'
          row-key="id"
          border
          show-overflow-tooltip
          :data="dataList"
          :show-header ="hasTableHeader"
          :highlight-current-row='hasHighLight'
          :header-row-style="{background:'#FAFAFA'}"
          :header-cell-style="{background:'none', color: '#333', fontWeight: 'bold'}"
        >
          <!-- 选择框 -->
          <el-table-column
            v-if='hasSelection'
            type="selection"
            width="60"
            align="center"
          />
          <!-- 表格字段 -->
          <el-table-column
            v-for="(item, i) in columns"
            :key='i'
            show-overflow-tooltip
            :prop="item.key"
            :label="item.label"
            :width="item.width"
            :align="item.align"
          >
            <template slot-scope="scope">
              <div class="table-scope__item" :style="{'--itemColor': getTableItemColor(item, scope.row)}">
                <span class="table-scope__text" >
                  {{getTableItemText(item, scope.row)}}
                </span>
              </div>
            </template>
          </el-table-column>
          <el-table-column 
            label="操作" 
            align='left'
            v-if='hasOperation'
            :width="operationWidth"
          >
            <template slot-scope="scope">
              <el-button
                v-for="(tmp, i) in operations"
                :key="i"
                :type="tmp.type || 'text'"
                :style="{'color': getTableItemColor(tmp, scope.row)}"
                :disabled="getTableOperationBtnDisabled(tmp, scope.row, scope.$index)"
                @click.native="tableOperationClick(tmp, scope.row, scope.$index)"
              >{{getTableOperationBtnText(tmp, scope.row, scope.$index)}}</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <div class="sub-table__pagination" v-if="hasPage">
        <el-pagination
          @current-change="currentTablePageIndexChange"
          :current-page="tablePageIndex"
          :page-size="tablePageSize"
          layout="prev, pager, next, jumper"
          :total="tablePageTotal"
        />
      </div>
    </div>
    <div class="table__default" v-else>
        <!-- <img
          class="table__default--icon"
          src="@/assets/table-default-icon.png"
        /> -->
        <span class="table__default--text">暂无数据</span>
    </div>
  </div>
</template>
<script src="./index.js" />
<style lang="scss" scoped>
@import "./index.scss";
</style>