
import Vue from 'vue'
import VueRouter from 'vue-router'


import Home from '../components/home.vue'
import Aboutus from '../components/aboutus.vue'
import NewActive from '../components/newActive.vue'
import CompanyUser from '../components/companyUser.vue'
import Register from '../components/regist.vue'


Vue.use(VueRouter);

export default new VueRouter({
    // 配置应用中所有的路由
    routes: [
        // 路由
        // 自动跳转的路由
        {
            path: '/',
            redirect: '/Home'
        },
        {
            path: '/aboutus',
            component: Aboutus
        },
        {
            path: '/companyUser/register',
            component: Register
        },
        {
            path: '/companyUser',
            component: CompanyUser
            // children: [
            //     {
            //         path: '/register',  // 路径左侧的/代表根路径
            //         component: Register
            //     }
                // {
                //     path: 'message',
                //     component: Message,
                //     children: [
                //         {
                //             path: '/home/message/detail/:id',
                //             component: MessageDetail
                //         },
                //     ]
                // },
                // {
                //     path: '',
                //     redirect: '/home/news'
                // }
            // ]
        },
        {
            path: '/newActive',
            component: NewActive
        },
        {
            path: '/home',
            component: Home

        }
    ]
})

