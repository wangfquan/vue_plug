<!--
 * @Descripttion: websocket连接
 * @version: 
 * @Author: wangfquan
 * @Date: 2022-04-15 10:46:13
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-04-20 09:19:17
-->

<template>
  <div id="websocketVue" class="hello">
    <h1>websocket连接</h1>
    <div>
      <div>接受消息</div>
      <div>{{ Message }}</div>
    </div>
    <button @click="sendMessage">连接</button>
    <button @click="handleStart">开始数据</button>
    <button @click="handleClose">关闭数据</button>
    <button @click="handleSend">发送数据</button>
    <button @click="handleCon">打印时间数据</button>
  </div>
</template>

<script>
import WebSocketClass from "@/utils/websocket";
export default {
  name: "websocketVue",
  data() {
    return {
      WS: null,
      timeId: null,
      Message: "返回数据",
    };
  },
  mounted() {},
  methods: {
    sendMessage() {
      this.WS = new WebSocketClass("ws://121.40.165.18:8800");
      // this.Message = this.WS.onmessage()
    },
    handleClose() {
      // clearInterval(timeId);
      this.WS.close();
    },
    handleStart() {
      this.WS.start();
    },
    handleSend() {
      this.WS.send("11111");
    },
    handleDestroy() {
      // clearInterval(timeId);
      this.WS.destroy();
    },
    handleCon() {},
  },
  destroyed() {
    // this.websock.close(); //离开路由之后断开websocket连接
  },
};
</script>

<style scoped>
#websocketVue {
  /* height: 270px;
  width: 400px; */
}
</style>
