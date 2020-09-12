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

  console.log("toPath:" + to.path)
  console.log("fromPath:" + from.path)




  next()
})

export default router
