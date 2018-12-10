
import Vue from 'vue'
import VueRouter from 'vue-router'


import Home from '../components/home.vue'
import Aboutus from '../components/aboutus.vue'
import NewActive from '../components/newActive.vue'
import CompanyUser from '../components/companyUser.vue'


Vue.use(VueRouter)

export default new VueRouter({
    // 配置应用中所有的路由
    routes: [
        // 路由
        {
            path: '/aboutus',
            component: Aboutus
        },
        {
            path: '/companyUser',
            component: CompanyUser
        },
        {
            path: '/newActive',
            component: NewActive
        },
        {
            path: '/home',
            component: Home
            // children: [
            //     {
            //         path: '/home/news',  // 路径左侧的/代表根路径
            //         component: News
            //     },
            //     {
            //         path: 'message',
            //         component: Message,
            //         children: [
            //             {
            //                 path: '/home/message/detail/:id',
            //                 component: MessageDetail
            //             },
            //         ]
            //     },
            //     {
            //         path: '',
            //         redirect: '/home/news'
            //     }
            // ]
        },

        // 自动跳转的路由
        {
            path: '/',
            redirect: '/Home'
        }
    ]
})

