import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const category = () => import('../components/content/category')
const Home = () => import('../components/content/Home')
const About = () => import('../components/content/About')
const commit = () => import('../components/content/commit')
const profile = () => import('../components/content/profile')



const routes = [
    {
    path:'/category',
    component:category,
    meta:{
        title : 'category'
    }
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
    component:profile,
    meta:{
        title: 'profile'
    }
},
{
    path:'/commit',
    component:commit,
    meta : {
        title : 'commit'
    }
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
