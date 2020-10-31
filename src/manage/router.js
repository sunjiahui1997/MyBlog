import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const addblog = () => import ('./views/Addblog')
const signup = () => import ('./views/Signup')
const backstage =() => import ('./views/Backstage')

export default new Router({
  mode: 'history',
  routes: [
    {
      path:'/manage.html',
      redirect:'/signup'
    },
    {
      path:'/addblog',
      component:addblog
    },
    {
      path:'/signup',
      component:signup
    },
    {
      path:'/',
      component:backstage
    }
  ]
})
