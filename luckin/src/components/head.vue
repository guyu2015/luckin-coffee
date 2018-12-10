<template>
    <div id="head_outer">
        <div class="head_wrapper">
            <div class="logo">
                <div></div>
            </div>
            <div class="link_wrapper">
                <ul class="list_wrapper">

                    <li :class="{'active':item.show===true}" v-for="(item ,index) in linkList"  :key="item.title" :title="item.title" @click="clickLink(item)" ><router-link :to="item.path">{{item.title}}</router-link></li>
                    <li class="hover_play" style="position:relative;"><img src="../assets/images/tel.gif"/><div class="commpany_text">进场合作热线 4000-100-100
                        为大型企业、中高端写字楼提供专业咖啡配套。欢迎各类咖啡厅转让。</div></li>
                </ul>
            </div>

        </div>


    </div>
</template>

<script>
    export default {

        data() {
            return {
                linkList: [
                    {title: "首页",show:false,path:"/home"},
                    {title: "关于我们",show:true,path:"/aboutus"},
                    {title: "最新活动",show:false,path:"/newActive"},
                    {title: "企业用户",show:false,path:"/companyUser"},
                ]
            }
        },
        methods:{
            clickLink(item){

                item.show = !item.show

            }
        },
        components: {
            name: "head"
        }
    }
</script>

<style scoped>
    #head_outer {
        position: fixed;
        z-index: 555555;
        top: 0;
        left: 0;
        width: 100%;
        height: 60px;
        background: #fff;
        line-height: 60px;
        font-size: 13px;
    }

    .head_wrapper {
        display: -webkit-flex; /* Safari */
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
    }

    .logo {
        height: 60px;
        flex: 7;
    }

    .logo div {
        height: 50px;
        width: 180px;
        margin-top: 5px;
        margin-left: 20%;
        background: url("../assets/images/logo.png") no-repeat;
        background-size: contain;
        background-position: 10px, 0;
    }

    .link_wrapper {
        list-style: none;
        height: 100%;
        /*background: pink;*/
        flex: 5;
    }
    .link_wrapper li{
        line-height: 40px;
        display: inline-block;
        height: 50px;
        float: left;
        margin-left: 30px;
    }
    .active{
        color:#172991;
        border-bottom: 2px solid #172991;

    }
.hover_play:hover div{
    display: block;
}
    .commpany_text{
        display: none;
        width: 300px;
        padding: 10px;
        font-size: 14px;
        line-height: 30px;
        box-shadow: 0px 0px 7px 0px blue;
        position: absolute;
        right: 0;
    }

</style>