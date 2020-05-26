<template>
  <div ref="page">
    <keep-alive><router-view v-if="$route.meta.keepAlive" /></keep-alive>
    <router-view v-if="!$route.meta.keepAlive" />
  </div>
</template>

<script>
export default {
  name: "app",
  components: {},
  data() {
    return {};
  },

  methods: {},
  created() {},
  mounted() {
    let page = this.$refs["page"];
    let systemHeight = document.documentElement.clientHeight;
    document.body.style = `height:${systemHeight}px;position:fixed;top:0;left:0;width:100%;`;
  }
};
</script>


<style  scoped>
</style>