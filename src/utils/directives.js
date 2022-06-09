/*
 * @Descripttion: 单个自定义指令
 * @version: 
 * @Author: wangfquan
 * @Date: 2022-04-19 10:43:32
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-04-20 14:47:44
 */
import Vue from 'vue'
Vue.directive('canvasmark', (el, binding) => {
    function addWaterMarker(str, parentNode, font, textColor) {// 水印文字，父元素，字体，文字颜色
        var can = document.createElement('canvas');//创建canvas容器
        parentNode.appendChild(can);//添加挂载
        can.width = 200;//设置canvas容器宽度
        can.height = 200;//设置canvas容器高度
        can.style.display = 'none';
        var cans = can.getContext('2d');//获取2d画笔
        //在canvas画布上绘制图片 ctx.drawImage(图片, x位置, y位置,  图像宽度, 图像高度);
        // ctx.drawImage(imageCon, 0, 0, imageCon.width, imageCon.height);
        cans.rotate(-20 * Math.PI / 180);//旋转
        cans.font = font || "16px Microsoft JhengHei";//设置canvas容器字体
        cans.fillStyle = textColor || "rgba(180, 180, 180, 0.3)";//设置canvas容器字体颜色
        cans.textAlign = 'left';//设置文本对齐方式
        cans.textBaseline = 'Middle';//设置文本基线
        //在canvas画布上绘制文字 ctx.fillText(文字内容, x位置, y位置, 文本最大宽度)
        cans.fillText(str, can.width / 3, can.height / 2);
        //设置父元素背景图片把canvas转base64输出
        parentNode.style.backgroundImage = "url(" + can.toDataURL("image/png") + ")";
    }
    addWaterMarker(binding.value.text, el, binding.value.font, binding.value.textColor)
})