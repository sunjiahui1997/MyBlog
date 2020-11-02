import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const addblog = () => import ('./views/Addblog')
const signup = () => import ('./views/Signup')
const backstage =() => import ('./views/Backstage')
const editblog =() => import ('./views/Editblog')
const edititem = () =>import ('./views/Edititem')

export default new Router({
  mode: 'history',
  routes: [
    {
      path:'/manage.html',
      redirect:'/backstage'
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
      path:'/backstage',
      component:backstage,
      children:[
        {
          path:'addblog',
          component:addblog
        },
        {
          path:'editblog',
          component:editblog
        },
        {
          path:'edititem/:id',
          component:edititem
        }
      ]
    }
  ]
})
