import vueRouter from "vue-router"
import Vue from "vue"
import home from "../components/home"
import aboutus from "../components/aboutus"
import companyUser from "../components/companyUser"
import newActive from "../components/newActive"

Vue.use(vueRouter);
const routes = [
    {path: '/companyUser', component: companyUser},
    {path: '/newActive', component: newActive},
    {path: '/aboutus', component: aboutus},
    {path: '/home', component: home}
];
const router = new vueRouter({
    routes
});
export default router