import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const Category = () => import('../components/content/Category')
const Home = () => import('../components/content/Home')
const About = () => import('../components/content/About')
const Commit = () => import('../components/content/Commit')
const Profile = () => import('../components/content/Profile')
const Edit = () => import('views/editBlog')


const CateVue = () => import ('views/category/CateVue')
const ShowVue = () => import ('views/category/ShowVue')

const CateJs = () => import ('views/category/CateJs')
const ShowJs = () => import ('views/category/ShowJs')


const routes = [
    {
    path:'/category',
    component:Category,
    meta:{
        title : 'category'
    },
},
{
    path:'/main',
    component:Home,
    meta:{
        title : 'main'
    }
},
{
    path:'/About',
    component:About,
    meta:{
        title: 'About'
    }
},
{
    path:'/profile/:id',
    component:Profile,
    meta:{
        title: 'profile'
    }
},
{
    path:'/commit',
    component:Commit,
    meta : {
        title : 'commit'
    }
},
{
    path:'/edit/:id',
    component:Edit
},
  {
      path:'/ShowVue/:id',
      component:ShowVue
  },
  {
      path:'/CateVue',
      component:CateVue
  },
  {
      path:'/CateJs',
      component:CateJs
  },
  {
      path:'/ShowJs/:id',
      component:ShowJs
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to,from,next) =>{
    // console.log(to.matched.some);
    // document.title = to.matched[0].meta.title
    next()
})

export default router
