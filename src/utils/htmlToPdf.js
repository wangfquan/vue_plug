/*
 * @Descripttion: 自定义html转pdf插件
 * @version: 
 * @Author: wangfquan
 * @Date: 2022-04-20 14:39:29
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-04-20 15:17:27
 */
import html2Canvas from 'html2canvas'
import JsPDF from 'jspdf'
export default {
    install(Vue) {
        //设置属性和方法
        const ShowMessage = (res) => {
            console.log("设置啦自定义插件方法:" + res)
            return 2342
        }
        const content = {
            count: 1,
            str: "自定义插件的属性",
            type: "string",
        }
        //添加全局混入
        Vue.mixin({
            mounted() {
                console.log("这里设置全局混入,这会在每个组件的mounted生命周期里面")
            }
        })
        //添加全局指令
        Vue.directive('bg', {
            inserted: function (e) {
                e.style.background = "red"
            }
        })
        //添加全局属性方法
        Vue.prototype.$ShowMessage=ShowMessage
        Vue.prototype.$content=content

        //定义getPdf方法转换pdf
        Vue.prototype.getPdf = function () {
            var title = this.htmlTitle;
            var element = document.getElementById("DomPdf");    // 这个dom元素是要导出pdf的div容器
            var w = element.offsetWidth;    // 获得该容器的宽
            var h = element.offsetWidth;    // 获得该容器的高
            var offsetTop = element.offsetTop;    // 获得该容器到文档顶部的距离
            var offsetLeft = element.offsetLeft;    // 获得该容器到文档最左的距离
            var canvas = document.createElement("canvas");
            var abs = 0;
            var win_i = document.body.clientWidth;    // 获得当前可视窗口的宽度（不包含滚动条）
            var win_o = window.innerWidth;    // 获得当前窗口的宽度（包含滚动条）
            if (win_o > win_i) {
                abs = (win_o - win_i) / 2;    // 获得滚动条长度的一半
            }
            canvas.width = w * 2;    // 将画布宽&&高放大两倍
            canvas.height = h * 2;
            var context = canvas.getContext("2d");
            context.scale(2, 2);
            context.translate(-offsetLeft - abs, -offsetTop);
            // 这里默认横向没有滚动条的情况，因为offset.left(),有无滚动条的时候存在差值，因此
            // translate的时候，要把这个差值去掉
            html2Canvas(element, {
                allowTaint: true,  //允许跨域
                useCORS: true,  //允许图片跨域
                scale: 2 // 提升画面质量，但是会增加文件大小
            }).then(function (canvas) {
                var contentWidth = canvas.width;
                var contentHeight = canvas.height;
                //一页pdf显示html页面生成的canvas高度;
                var pageHeight = contentWidth / 592.28 * 841.89;
                //未生成pdf的html页面高度
                var leftHeight = contentHeight;
                //页面偏移
                var position = 0;
                //a4纸的尺寸[595.28,841.89]，html页面生成的canvas在pdf中图片的宽高
                var imgWidth = 595.28;
                var imgHeight = 592.28 / contentWidth * contentHeight;
                var pageData = canvas.toDataURL('image/jpeg', 1.0);
                var pdf = new JsPDF('', 'pt', 'a4');
                //有两个高度需要区分，一个是html页面的实际高度，和生成pdf的页面高度(841.89)
                //当内容未超过pdf一页显示的范围，无需分页
                if (leftHeight < pageHeight) {
                    pdf.addImage(pageData, 'JPEG', 0, 0, imgWidth, imgHeight);
                } else {    // 分页
                    while (leftHeight > 0) {
                        pdf.addImage(pageData, 'JPEG', 0, position, imgWidth, imgHeight)
                        leftHeight -= pageHeight;
                        position -= 841.89;
                        //避免添加空白页
                        if (leftHeight > 0) {
                            pdf.addPage();
                        }
                    }
                }
                pdf.save(title + '.pdf');
            });

        }

    }
}