<template>
  <div ref="page">
  <van-button type="default">默认按钮</van-button>
  <van-button type="primary">主要按钮</van-button>
  <van-button type="default">默认按钮</van-button>
  <van-button type="primary">主要按钮</van-button><van-button type="default">默认按钮</van-button>
  <van-button type="primary">主要按钮</van-button><van-button type="default">默认按钮</van-button>
  <van-button type="primary">主要按钮</van-button><van-button type="default">默认按钮</van-button>
  <van-button type="primary">主要按钮</van-button>
    <van-button type="default">默认按钮</van-button>
  <van-button type="primary">主要按钮</van-button>
  <van-button type="default">默认按钮</van-button>
  <van-button type="primary">主要按钮</van-button><van-button type="default">默认按钮</van-button>
  <van-button type="primary">主要按钮</van-button><van-button type="default">默认按钮</van-button>
  <van-button type="primary">主要按钮</van-button><van-button type="default">默认按钮</van-button>
  <van-button type="primary">主要按钮</van-button>
    <van-button type="default">默认按钮</van-button>
  <van-button type="primary">主要按钮</van-button>
  <van-button type="default">默认按钮</van-button>
  <van-button type="primary">主要按钮</van-button><van-button type="default">默认按钮</van-button>
  <van-button type="primary">主要按钮</van-button><van-button type="default">默认按钮</van-button>
  <van-button type="primary">主要按钮</van-button><van-button type="default">默认按钮</van-button>
  <van-button type="primary">主要按钮</van-button>
    <van-button type="default">默认按钮</van-button>
      <van-button type="primary">主要按钮</van-button>
  <van-button type="default">默认按钮</van-button>
  <van-button type="primary">主要按钮</van-button><van-button type="default">默认按钮</van-button>
  <van-button type="primary">主要按钮</van-button><van-button type="default">默认按钮</van-button>
  <van-button type="primary">主要按钮</van-button><van-button type="default">默认按钮</van-button>
  <van-button type="primary">主要按钮</van-button>
    <van-button type="default">默认按钮</van-button>
      <van-button type="primary">主要按钮</van-button>
  <van-button type="default">默认按钮</van-button>
  <van-button type="primary">主要按钮</van-button><van-button type="default">默认按钮</van-button>
  <van-button type="primary">主要按钮</van-button><van-button type="default">默认按钮</van-button>
  <van-button type="primary">主要按钮</van-button><van-button type="default">默认按钮</van-button>
  <van-button type="primary">主要按钮</van-button>
    <van-button type="default">默认按钮</van-button>
  <van-button type="primary">主要按钮</van-button>
  <van-button type="default">默认按钮</van-button>
  <van-button type="primary">主要按钮</van-button><van-button type="default">默认按钮</van-button>
  <van-button type="primary">主要按钮</van-button><van-button type="default">默认按钮</van-button>
  <van-button type="primary">主要按钮</van-button><van-button type="default">默认按钮</van-button>
  <van-button type="primary">主要按钮</van-button>
    <van-button type="default">默认按钮</van-button>
  <van-button type="primary">主要按钮</van-button>
  <van-button type="default">默认按钮</van-button>
  <van-button type="primary">主要按钮</van-button><van-button type="default">默认按钮</van-button>
  <van-button type="primary">主要按钮</van-button><van-button type="default">默认按钮</van-button>
  <van-button type="primary">主要按钮</van-button><van-button type="default">默认按钮</van-button>
  <van-button type="primary">主要按钮</van-button>
    <van-button type="default">默认按钮</van-button>
  <van-button type="primary">主要按钮</van-button>
  <van-button type="default">默认按钮</van-button>
  <van-button type="primary">主要按钮</van-button><van-button type="default">默认按钮</van-button>
  <van-button type="primary">主要按钮</van-button><van-button type="default">默认按钮</van-button>
  <van-button type="primary">主要按钮</van-button><van-button type="default">默认按钮</van-button>
  <van-button type="primary">主要按钮</van-button>
  
  </div>

</template>

<script>
import { throttle } from "../../utils/throttl.js";
export default {
  components: {},
  data() {
    return {};
  },
  created() {},
  mounted() {
    let page = this.$refs["page"];
    page.addEventListener("scroll", throttle(function(e) {
      let clientHeight = e.target.clientHeight
      let scrollHeight = e.target.scrollHeight
      let scrollTop = e.target.scrollTop
      if(scrollHeight - clientHeight == scrollTop){
        console.log('到底部了')
      } 
      
    }, 300));

  },
  methods: {}
};
</script>

<style>
</style>
