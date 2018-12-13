<template>
    <div>
        <div class="foot_box">
            <div class="sub-logo"></div>
            <div class="inscribe">
                <p class="company">
                    <a href="javascript:;">瑞幸咖啡（北京）有限公司</a>
                    <a target="_blank" href="http://www.miibeian.gov.cn">京ICP备17074868号</a>
                </p>
                <p class="version" style="font-size: 12px;">
                    电话：010-87689999 地址：中关村东路118号
                    <br> 营业执照编码：91110108MA018FG04E 食品经营许可编码：JY21108111531829
                    <br> Copyright©2018 www.luckincoffee.com All Rights Reserved
                </p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "footer"
    }
</script>

<style scoped>
    .foot_box{
        background: #131616;
        height: 300px;
        font-size: 13px;
        text-align: center;
        font-family: 'PingFang SC';
    }
    .sub-logo{
        width: 1040px;
        margin: 0 auto 60px;
        height: 90px;
        background-image: url("../assets/images/sub_logo@2x.png");
        background-repeat: no-repeat;
        background-size: auto 37px;
        background-position: 50%;
        border-bottom: 1px solid #262626;
    }
    .company>a{
        color: rgba(102,102,102,.6);
        text-decoration: none;
    }
</style>