<!--
 * @Descripttion: 
 * @version: 
 * @Author: wangfquan
 * @Date: 2022-04-18 13:46:15
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-04-18 17:18:07
-->
<template>
  <div id="template">
    <section>
      <h1>第三个模板框架</h1>
    </section>
    <section>
      <BannerModul></BannerModul>
      <BannerModul></BannerModul>
      <ChannelModul></ChannelModul>
      <ChannelModul></ChannelModul>
    </section>
    <section>
      <BannerModul></BannerModul>
    </section>
  </div>
</template>
<script>
import BannerModul from "@/components/modul/banner.vue";
import ChannelModul from "@/components/modul/channel.vue";
export default {
  name: "templateVue3",
  components: {
    BannerModul,
    ChannelModul,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style>
</style>