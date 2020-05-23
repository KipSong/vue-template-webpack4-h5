<template>
  <div>
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      message: "2222"
    };
  },
  created() {
    console.log(Symbol);
    console.log(this.imgUrl);
    console.log(process.env.NODE_ENV);
    [1, 2, 3].map(n => n + 1);
  }
};
</script>

<style scoped>
.img {
  width: 375px;
  height: 200px;
}
</style>


