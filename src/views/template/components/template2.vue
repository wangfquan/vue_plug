<!--
 * @Descripttion: 
 * @version: 
 * @Author: wangfquan
 * @Date: 2022-04-18 13:38:00
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-04-18 17:17:05
-->
<template>
  <div id="template">
    <section>
      <h1>第二个模板框架</h1>
    </section>
    <section>
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
  name: "templateVue2",
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