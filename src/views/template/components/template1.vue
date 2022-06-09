<!--
 * @Descripttion: 
 * @version: 
 * @Author: wangfquan
 * @Date: 2022-04-18 13:39:33
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-04-18 17:06:42
-->

<template>
  <div id="template">
    <section>
      <h1>第一个模板框架</h1>
    </section>
    <section>
      <BannerModul></BannerModul>
    </section>
    <section>
      <ChannelModul></ChannelModul>
    </section>
  </div>
</template>
<script>
import BannerModul from "@/components/modul/banner.vue";
import ChannelModul from "@/components/modul/channel.vue";
export default {
  name: "templateVue1",
  data() {
    return {};
  },
  components: {
    BannerModul,
    ChannelModul,
  },
  methods: {},
};
</script>

<style>
</style>
