/*
 * @Descripttion: 
 * @version: 
 * @Author: wangfquan
 * @Date: 2022-04-20 16:39:45
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-04-20 17:10:33
 */
import Mock from 'mockjs'
// 定义数据类型
const MockData = Mock.mock({
    // 20条数据
    "data|5": [{
        // 模拟种类
        "goodsClass|1": ["女装","男装"],
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
        "goodsSale|30-500": 30
    }]
})
// 输出结果随机生成的数据（node index.js）
console.log(MockData);
export default MockData