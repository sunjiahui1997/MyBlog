import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const addblog = () => import('./views/Addblog')
const signup = () => import('./views/Signup')
const backstage = () => import('./views/Backstage')
const editblog = () => import('./views/Editblog')
const edititem = () => import('./views/Edititem')
const userProfile = () => import('./views/Userprofile')
const addlink = () => import('./views/Addlink')
const showlink = () => import('./views/Showlink')
const editlink = () => import('./views/Editlink')
const  addcate = () =>  import('./views/Addcate')
const showcate = () => import('./views/Showcate')
const editcate = () => import('./views/Editcate')

export default new Router({
  mode: 'history',
  routes: [{
      path: '/manage.html',
      redirect: '/signup'
    },
    {
      path: '/addblog',
      component: addblog
    },
    {
      path: '/signup',
      component: signup
    },
    {
      path: '/backstage',
      component: backstage,
      children: [
        {
          path:'',
          redirect:'addblog'
        },
        {
          path: 'addblog',
          component: addblog
        },
        {
          path: 'editblog',
          component: editblog
        },
        {
          path: 'edititem/:id',
          component: edititem
        },
        {
          path:'userprofile',
          component:userProfile
        },
        {
          path:'addlink',
          component:addlink,
        },
        {
          path:'showlink',
          component:showlink
        },
        {
          path:'editlink/:id',
          component:editlink
        },
         {
           path: 'addcate',
           component: addcate,
         }, {
           path: 'showcate',
           component: showcate
         }, {
           path: 'editcate/:id',
           component: editcate
         }
      ]
    }
  ]
})