import { isFunction } from "lodash"

export default {
  name: "SubTable",
  props: {
    /**
     * @description 表格数据, Array类型
     * 默认空数组
     */
    list: {
      type: Array,
      default: () => []
    },
    /**
     * 表格表头字段
     */
    columns: {
      type: Array,
      default: () => []
    },
    /**
    * 表格操作按钮
    */
    operations: {
      type: Array,
      default: () => []
    },
    /**
     * @description 表格分页数量, Number 类型
     */
    tablePageTotal: {
      type: Number,
      default: 0
    },
    /**
     * @description 表格当前分页
     */
    tablePageIndex: {
      type: Number,
      default: 1
    },
    /**
     * @description 表格配置属性 Obj类型
     * 默认空对象
     */
    options: {
      type: Object,
      default: () => {
        return {}
      }
    },
    pageLoading: {
      type: Boolean,
      default: false
    }

  },
  data() {
    return {
    }
  },
  methods: {
    // 表格分页变化事件
    currentTablePageIndexChange(index) {
      this.$emit('update:tablePageIndex', index)
    },

    //
    getTableItemColor(item, data) {
      let { color } = item
      console.log("isFunction(color)")
      console.log(isFunction(color))
      console.log(color)
      console.log(data)
      return isFunction(color) ? color(data) : color
    },

    // 获取表格列对应的字段值
    getTableItemText(item, data) {
      let { key, format = null, handle = null } = item
      let text = data[key]
      console.log("text")
      console.log(text)
      if (handle) {
        text = handle(data)
      } else if (format) {
        text = format(data[key])
      }
      return text || '-'
    },
    // 获取表格操作按钮显示文本
    getTableOperationBtnText(item, data, index) {
      console.log(index)
      let { text = '', handle = null } = item
      return handle ? handle(data) : (text || '-')
    },
    // 获取表格操作按钮对应状态
    getTableOperationBtnDisabled(item, data, index) {
      console.log(index)
      let { disabled = false } = item
      return isFunction(disabled) ? disabled(data) : (disabled || false)
    },

    // 操作按钮点击事件
    tableOperationClick(item, row, index) {
      let { state = '' } = item
      this.$emit('operation', { state, row, index })
    }
  },
  computed: {
    dataList() {
      return this.list
    },
    // 是否需要分页, 默认需要true,否则false
    hasPage() {
      let { hasPage = true } = this.options || {}
      return hasPage && (this.tablePageTotal > this.tablePageSize)
    },
    // 是否显示表头, 默认需要true,否则false
    hasTableHeader() {
      let { hasTableHeader = true } = this.options || {}
      return hasTableHeader
    },
    // 是否显示高亮, 默认需要true,否则false
    hasHighLight() {
      let { hasHighLight = true } = this.options || {}
      return hasHighLight
    },
    // 是否显示选择框
    hasSelection() {
      let { hasSelection = true } = this.options || {}
      return hasSelection
    },
    // 是否显示操作框
    hasOperation() {
      let { hasOperation = true } = this.options || {}
      return hasOperation
    },
    // 操作框宽度
    operationWidth() {
      let { operationWidth = '180' } = this.options || {}
      return operationWidth
    },
    // 表格分页size
    tablePageSize() {
      let { tablePageSize = 14 } = this.options || {}
      return tablePageSize
    },
    // 显示默认图
    showDefault() {
      return this.tablePageTotal === 0 && this.tablePageIndex === 1
    }
  }
}