import Vue from 'vue'
import Router from 'vue-router'
import MyWorld from '@/components/MyWorld'
import Login from '@/components/Login'

Vue.use(Router)


const router = new Router({
  mode: 'history',
  routes: [{
      path: '/',
      name: 'MyWorld',
      component: MyWorld,
      meta: {
        requireAuth: true
      }
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login,
      meta: {
        requireAuth: false
      }
    },
  ]
})

// 守卫
router.beforeEach((to, from, next) => {

  const token = localStorage.getItem("token");

  if (to.meta.requireAuth) {
    if (token == null) {
      // 没有token，跳转登录页
      console.log('没有token，跳转登录页')
      next('./Login')
    } else {
      // 有token，校验token

      // 失败，跳转登录页
      // 成功，next()
      next()
    }
  } else {
    next()
  }




})

export default router
