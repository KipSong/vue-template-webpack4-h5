<template>
  <div>
    <van-nav-bar v-if="navBar" :title="menuList[active].title" fixed />
    <keep-alive><router-view class="tabbar-page-view" :style="navBar?`margin-top:44px;height:${systemHeight-94}px;`:`height:${systemHeight-50}px;`"  v-if="$route.meta.keepAlive"/></keep-alive>
    <router-view  v-if="!$route.meta.keepAlive" />
    <van-tabbar v-model="active" active-color="#07c160" inactive-color="#000">
      <van-tabbar-item v-for="(item,index) in menuList" @click="handleItem(item,index)" :key="index" :icon="item.iconPath" :to="item.pathUrl">{{item.title}}</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import { Toast } from "vant";
export default {
  watch: {},
  props: {},
  data() {
    return {
      systemHeight:0,
      navBar: true,
      active: 0,
      menuList: [
        {
          title: "首页",
          path: "dashboard",
          pathUrl: "/dashboard",
          iconPath: "home-o"
        },
        {
          title: "我的",
          path: "my",
          pathUrl: "/my",
          iconPath: "friends-o"
        }
      ]
    };
  },
  created() {},
  mounted() {
    let page = this.$refs["tabarPage"];
    this.systemHeight = document.documentElement.clientHeight;
  
  },
  methods: {
    handleItem(item, index) {
      this.active = index;
    },
    onClickLeft() {
      Toast("返回");
    },
    onClickRight() {
      Toast("按钮");
    }
  }
};
</script>

<style scoped lang="less">
.tabbar-page-view {
  overflow: auto;
}
</style>
