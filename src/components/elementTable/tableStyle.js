/*
 * @Descripttion: 设置表格表头、单元格相关样式
 * @version: 
 * @Author: wangfquan
 * @Date: 2022-04-22 11:16:09
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-04-22 14:40:46
 */

/* 表头单元格的 style*/
const setColumnDataColor = ({ row, column, rowIndex, columnIndex }) => {
    // console.log("setColumnDataColor")
    // console.log(row)
    // console.log(column)
    // console.log(rowIndex)
    // console.log(columnIndex)
    if (row || columnIndex) {
        console.log(1)
    }

    if (column.property == 'time') {//定义自定义样式
        return {
            color: 'blue'
        }
    }
    if (rowIndex === 0 && column.type != 'selection' && column.type != 'expand') {//默认项
        return 'color: red;cursor: pointer;box-sizing: border-box;padding: 10px 0;font-weight: 400;background-color:#FAFAFA;font-size:14px;font-weight: bold;height:44px'
    }
    if (column.type == 'selection') {//多选行
        return {
            borderRight: '1px solid red',
            backgroundColor: '#FAFAFA',
            textAlign: 'center'
        }
    }
    if (column.type == 'expand') {//下拉展开行
        return 'border-right:0;background-color:#FAFAFA;text-align: center'
    }
}
/* 单元格的 style  */
const setCellStyle = ({ row, column, rowIndex, columnIndex }) => {
    // console.log("setCellStyle")
    // console.log(row)
    // console.log(column)
    // console.log(rowIndex)
    // console.log(columnIndex)
    if (row || columnIndex || rowIndex) {
        console.log(1)
    }

    if (column.property == 'time') {//定义自定义样式
        return {
            color: 'blue'
        }
    }
    if (column.type != 'selection' && column.type != 'expand') {//默认项
        return {
            color: '#666666',
            cursor: 'pointer',
            padding: '0',
            height: '44px',
            boxSizing: 'border-box'
        }
    }
    if (column.type == 'selection') {//多选行
        return 'border-right:1px solid #E4E7ED;text-align: center'
    }
    if (column.type == 'expand') {//下拉展开行
        return 'border-right:0;text-align: center'
    }
}
export { setColumnDataColor, setCellStyle }