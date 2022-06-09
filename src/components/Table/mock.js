/*
 * @Descripttion: 
 * @version: 
 * @Author: wangfquan
 * @Date: 2022-04-22 16:01:00
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-04-22 16:26:43
 */
import Mock from 'mockjs'
// import moment from 'moment'

const tableColumns = [
  {
    label: "合同名称",
    key: 'title',
    align: 'left',
  },
  {
    label: "甲方名称",
    key: 'firstPartyName',
    align: 'left'
  },
  {
    label: "乙方名称",
    key: 'secondPartyName',
    align: 'left',
  },
  {
    label: "合同编号",
    key: 'no',
    align: 'left',
    width: '200'
  },
  {
    label: "订单编号",
    key: 'orderNo',
    align: 'left',
    width: '200'
  },
  {
    label: "合同状态",
    key: 'status',
    align: 'left',
    width: '100',
    format: v => {
      switch (v) {
        case 1:
          return '拟定中'
        case 2:
          return '签署中'
        case 3:
          return '已完成'
        case 4:
          return '已过期'
        case 5:
          return '已作废'
      }
    },
    color: v => {
      let { status = 1 } = v
      switch (Number(status)) {
        case 1:
          return '#0286DF'
        case 2:
          return '#0286DF'
        case 3:
          return '#78C06E'
        case 4:
          return '#C0C4CC'
        case 5:
          return '#969696'
      }
    }
  },
  {
    label: "审批状态",
    key: 'auditStatus',
    align: 'left',
    width: '100',
    format: v => {
      switch (v) {
        case 1:
          return '审核中'
        case 2:
          return '通过'
        case 3:
          return '不通过'
      }
    },
    color: v => {
      let { auditStatus = 1 } = v
      switch (Number(auditStatus)) {
        case 1:
          return '#0286DF'
        case 2:
          return '#F7AB01'
        case 3:
          return '#FF6600'
      }
    }
  },
  {
    label: "签署截止时间",
    key: 'signingTime',
    align: 'left',
    width: '150',
    // format: v=> moment(v).format('YYYY-MM-DD HH:mm')
  },
]

const tableOperations = [
  {
    text: '编辑合同',
    state: '40',
    color: '#0286DF'
  }
]
const tableData = Mock.mock({
  // 15条数据
  "data|15": [{
    "title": "@ctitle(10)",
    "firstPartyName": "@ctitle(10)公司",
    "secondPartyName": "@ctitle(10)公司",
    "no": "@natural",
    "orderNo": "@natural",
    "status": "@natural(1,6)",
    "auditStatus": "@natural(1,4)",
    "signingTime": "@datetime"
  }]
})

export default {
  tableData,
  tableColumns,
  tableOperations,
  tableOptions: {
    hasPage: true,
    hasSelection: false,
    operationWidth: '100'
  }
}