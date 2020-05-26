import Vue from "vue";
import Router from "vue-router";
// import store from "../store/index";

Vue.use(Router);
const router = new Router({
  routes: [
    {
      path: "/",
      redirect: "/dashboard"
    },
    {
      path: "/dashboard",
      component: () => import("@/components/footer.vue"),
      redirect: "/dashboard/index",
      children: [
        {
          path: "index",
          meta: {
            title: "首页",
            keepAlive: true
          },
          component: () => import("@/views/dashboard/index.vue")
        },
      ]
    },
    {
      path: "/my",
      meta: {
        title: "我的"
      },
      component: () => import("@/components/footer.vue"),
      redirect: "/my/index",
      children: [
        {
          path: "index",
          meta: {
            title: "我的",
            keepAlive: true
          },
          component: () => import("@/views/my/index.vue")
        }
      ]
    },

  ]
});

router.beforeEach((to, from, next) => {
  let { title, needLogin } = to.meta;
  // let { isLogin } = store.state;
  document.title = title;

  // if (needLogin && !isLogin) {
  //   next({
  //     path: "/login"
  //   });
  // } else {
  next();
  // }
});

export default router;
