import Vue from 'vue'
import Router from 'vue-router'
import MyWorld from '@/components/MyWorld'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)


const router = new Router({
  routes: [{
      path: '/',
      name: 'MyWorld',
      component: MyWorld
    },
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})

// 守卫
router.beforeEach((to, from, next) => {

  const token = localStorage.getItem("token");

  if (token == null) {
    // 没有token，跳转登录页
  } else {
    // 有token，校验token

    // 失败，跳转登录页
    // 成功，next()
    next()
  }



})

export default router
