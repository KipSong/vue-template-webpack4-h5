import '@/assets/style/index.css';
import '@/system/rem'
// import 'lib-flexible/flexible'
import "@/components/vant";
import Vue from "vue";
import App from "./App.vue";
import router from "@/router/index"
import '@/router/permission'


Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
