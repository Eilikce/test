import Vue from 'vue'
import Router from 'vue-router'
import MyWorld from '@/components/MyWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'MyWorld',
      component: MyWorld
    }
  ]
})
