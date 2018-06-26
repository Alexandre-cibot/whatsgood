import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/pages/Home'
import List from '@/components/pages/List'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/Home' 
    },
    {
      path: '/Home',
      name: 'Home',
      component: Home
    },
    {
      path: '/list',
      name: 'List',
      component: List
    }
  ]
})
