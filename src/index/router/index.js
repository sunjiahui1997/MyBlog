import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const Category = () => import('../components/content/Category')
const Home = () => import('../components/content/Home')
const About = () => import('../components/content/About')
const Profile = () => import('../components/content/Profile')
const Edit = () => import('index/views/editBlog')
const Showblog = () => import('index/views/Showblog')

const CateVue = () => import('index/views/category/CateVue')
const ShowVue = () => import('index/views/category/ShowVue')

const CateJs = () => import('index/views/category/CateJs')
const ShowJs = () => import('index/views/category/ShowJs')


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
        path: '/ShowVue/:id',
        component: ShowVue
    },
    {
        path: '/CateVue',
        component: CateVue
    },
    {
        path: '/CateJs',
        component: CateJs
    },
    {
        path: '/ShowJs/:id',
        component: ShowJs
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