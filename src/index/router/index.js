import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const Category = () => import('../components/content/Category')
const Home = () => import('../components/content/Home')
const About = () => import('../components/content/About')
const Profile = () => import('../components/content/Profile')
const Edit = () => import('index/views/editBlog')
const Showblog = () => import('index/views/Showblog')
const Showcate = () => import('index/views/category/Showcate')
const Show = () => import ('index/views/category/Show')


const routes = [{
        path: '',
        redirect: '/main'

    },
    {
        path: '/category',
        component: Category,
        meta: {
            title: 'category'
        },
        // children:[{
        // path:'showcate1/:cate',
        // component:Showcate
        // }]
    },
    {
        path: '/showcate/:cate',
        component: Showcate
    },
    {
        path:'/show/:id',
        component: Show
    },
    {
        path: '/main',
        component: Home,
        meta: {
            title: 'main'
        }
    },
    {
        path: '/About',
        component: About,
        meta: {
            title: 'About'
        }
    },
    {
        path: '/showblog/:id',
        component: Showblog,
        name: 'showblog',
        meta: {
            title: 'showblog'
        }
    },
    {
        path: '/edit/:id',
        component: Edit
    },
    {
        path: '/profile',
        component: Profile
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

router.beforeEach((to, from, next) => {
    // console.log(to.matched.some);
    // document.title = to.matched[0].meta.title
    next()
})

export default router