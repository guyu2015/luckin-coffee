<template>
    <div>
        <div class="user_wrapper">
            <div class="user_bgc"></div>
            <div class="user_content">
                <div class="user_inner">
                    <div class="quiteContent">
                        <p class="welcome">你好，</p>
                        <p class="welcome">欢迎来到企业账户系统</p>

                        <div class="account_not">
                            <p>还没有账户，请申请</p>
                            <div ><router-link to="/companyUser/register">点击申请</router-link></div>
                        </div>
                    </div>
                    <div class="dynamicContent">
                        <div class="register_title">已有账户，请登录</div>
                        <div class="inputWrapper">
                            <input type="text" placeholder="请输入账号"/>
                            <input type="text" placeholder="请输入密码"/>
                        </div>
                        <div class="checkWrapper">
                            <input type="checkbox"/><span>记住密码</span><span class="lookFor">找回密码</span>
                        </div>
                        <div class="login">登录</div>
                    </div>

                </div>


            </div>
        </div>

    </div>
</template>

<script>
    import "../assets/css/user.css"
    export default {
        name: "companyUser",
        methods:{

        }
    }
</script>

<style scoped>

</style>