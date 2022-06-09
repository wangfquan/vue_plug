/*
 * @Descripttion: 
 * @version: 
 * @Author: wangfquan
 * @Date: 2022-04-22 10:53:00
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-04-22 15:43:24
 */
import Mock from 'mockjs'
// 定义数据类型
export const MockData = Mock.mock({
    // 20条数据
    "data|5": [{
        // 模拟种类
        "goodsClass|1": ["女装", "男装"],
        // 模拟Id
        "goodsId|+1": 1,
        //模拟名称
        "goodsName": "@ctitle(10)",
        //模拟地址
        "goodsAddress": "@county(true)",
        //模拟等级评价★
        "goodsStar|1-5": "★",
        //模拟图片
        "goodsImg": "@Image('100x100','@color','小甜甜')",
        //模拟售价
        "goodsSale|30-500": 30,
        "value": "@datetime"
    }]
})
export const OptionsData = Mock.mock({
    // 20条数据
    "data|4": [{
        "type|1": ["primary", "success", "warning", "danger"],
        "text": "@ctitle(2)",
        "disabled|1":'@boolean',
        "color|1": ["black", "red", "green", "orange"],
        "state":"@natural"
    }]
})

// export default {
//     MockData,
//     OptionsData
// }