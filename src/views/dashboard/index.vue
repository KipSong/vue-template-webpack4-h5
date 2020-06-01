<template>
  <div ref="page">

     <div class="mode"></div>

  </div>

</template>

<script>
import { scrollListner } from "../../utils/scrollListener.js";
export default {
  components: {},
  data() {
    return {};
  },
  created() {},
  mounted() {
    let page = this.$refs["page"];
    scrollListner(page,function(e) {
        console.log(e);
      }, 300);
  },
  methods: {}
};
</script>

<style>
.mode{
  width: 37.5rem;
  height: 5.0rem;
  background-color: blue;
}
</style>
