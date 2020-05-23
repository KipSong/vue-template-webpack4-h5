import './assets/style/index.css';
import './assets/style/scss/index.scss'
import Vue from "vue";
import App from "./App.vue";
import router from "./router/index";
import '@/system/rem'
import "@/components/vant";


Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
