<template>
    <div class="content_wrapper">
        <div class="register_content">
            <form class="register_form">
                <p class="register_title">成为企业用户</p>
                <div class="register_list" v-for="(item,index) in formList"  :key="index">
                    <label>{{item.title}}*</label>
                    <input type="text" :name="item.title"  :placeholder="item.place"/>
                </div>

            </form>
            <div class="registerRight">

        </div>



        </div>
    </div>
</template>

<script>
    import "../assets/css/register.css"
    export default {
        name: "regist",
        data(){
            return{
                formList:[
                    {title:"企业名称",place:"轻与执照保持一致"},
                    {title:"联系人",place:"请输入联系人"},
                    {title:"手机号",place:"请输入手机号"},
                    {title:"图形验证码",place:"请输入图形验证码"},
                    {title:"手机验证码",place:"请输入手机验证码"},
                    {title:"省市",place:"轻与执照保持一致"},

                ]
            }
        }
    }
</script>

<style scoped>

</style>