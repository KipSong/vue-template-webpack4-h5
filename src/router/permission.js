import router from './index'
import { getToken } from '@/utils/auth'


const whiteList = ['/login'] // 登录页

router.beforeEach((to, from, next) => {
  const hasToken = getToken()
  let { title } = to.meta;
  document.title = title;
  if (!hasToken) {
    if (to.path === '/login') {
      next({ path: '/' })
    } else {
      next()
    }
  }
  else {
    if (whiteList.indexOf(to.path) !== -1) {
      next()
    } else {
      next(`/login`)
    }
  }
});
