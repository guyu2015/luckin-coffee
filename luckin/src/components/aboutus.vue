<template>
    <div>
        <div class="banner_wrapper">
            <div class="banner"></div>
        </div>
        <div class="banner_content">
            <div class="menu_wrapper">
                <ul class="menu_list">
                    <li v-for="(item,index) in menuList" :key="index" :class="item.class" @click="clickMenuHandle(item.id)">
                        <div class="menuPic"><img :src="item.class == 'active'? item.src2:item.src1 "/></div>
                        <div class="menu_list_item">{{item.menu}}</div></li>
                </ul>
                <div class="joinus-window">
                    <div class="joinus-title">招聘邮箱（总部）：</div>
                    <div class="joinus-email">
                        <a href="mailto:zhaopin@luckincoffee.com" target="_blank">zhaopin@luckincoffee.com</a>
                    </div>
                    <div class="joinus-image">
                        <div class="qrcode"></div>
                    </div>
                    <div class="joinus-foot">[ 扫一扫，查看更多职位 ]</div>
                </div>
            </div>
            <div id="content" class="about_content">
                <div id="about-list" class="about-list">
                    <div v-show="boxFlag == 1 ? true : false" class="about-item model show">
                        <h2 class="main-title">商业模式</h2>
                        <h3 class="sub-title">专业咖啡新鲜式</h3>
                        <div class="teletext">
                            <p class="text about_text">luckin coffee(瑞幸咖啡)中国新零售咖啡典型代表，致力于成为中国领先的高品质咖啡品牌和专业化的咖啡服务提供商。</p>
                            <p class="text about_text">luckin
                                coffee以优选的产品原料、精湛的咖啡工艺，创新的商业模式，领先的移动互联网技术，努力为广大消费者带来更高品质的咖啡消费新体验，推动咖啡文化在中国的普及和发展。</p>
                            <div class="image">
                                <img src="../assets/images/modelPic.png" alt="">
                            </div>
                        </div>
                    </div>
                    <div v-show="boxFlag == 2 ? true : false" class="about-item brand">
                        <h2 class="main-title">品牌主张</h2>
                        <div class="teletext">
                            <p class="text about_text">luckin coffee相信一个崭新时代的源头永远始于改变，我们以高性价比改变咖啡消费观念，以规格原料与制程改变咖啡消费品质，以新零售模式改变咖啡消费体验。</p>
                            <p class="text about_text">luckin coffee面向职场和年轻一代消费者，鼓励他们充满自信，突破以往，勇于改变。</p>
                            <h3 class="sub-title">改变，才能改变</h3>
                            <div class="videobox">
                                <video ref="videoplay" style="width: 600px;">
                                    <source class="mp4" type="video/mp4" src="../assets/images/luckincoffee_TVC30.mp4">
                                </video>
                                <a href="javascript:;" v-show="playMask" id="play" @click="clickPlay"></a>
                            </div>

                            <p class="text descript">△ 点击视频，观看汤唯和张震的广告大片</p>
                        </div>
                    </div>
                    <div v-show="boxFlag == 3 ? true : false" class="about-item contact">
                        <h2 class="main-title">联系我们</h2>
                        <div class="teletext">
                            <p class="text tel">进场合作：4000-100-100（热线）</p>
                            <p class="text icon mail"><a href="mailto:hz@luckincoffee.com" target="_blank">hz@luckincoffee.com（邮箱）</a></p>
                            <p class=" about_text_small">为大型企业、中高端写字楼提供专业咖啡配套。欢迎各类咖啡厅转让。</p>
                            <p class="text other">品牌联合：<a href="mailto:co-branding@luckincoffee.com" target="_blank">co-branding@luckincoffee.com</a></p>
                            <p class="text other">媒体合作：<a href="mailto:pr@luckincoffee.com" target="_blank">pr@luckincoffee.com</a></p>
                            <p class="text other">媒介资源：<a href="mailto:bmd-ad@luckincoffee.com" target="_blank">bmd-ad@luckincoffee.com</a></p>
                            <p class="text other">采购招商：<a href="mailto:cg-zs@luckincoffee.com" target="_blank">cg-zs@luckincoffee.com</a></p>
                            <div class="image">
                                <img src="../assets/images/contactPic.png" alt="">
                            </div>
                        </div>
                    </div>
                    <div v-show="boxFlag == 4 ? true : false" class="about-item statement">
                        <h2 class="main-title">重要声明</h2>
                        <div class="teletext">
                            <h2 class="title">关于假冒我司商标及公司名称的声明</h2>
                            <div class="content-wrapper">
                                <p class="content">瑞幸咖啡从今年1月份开始试运营至今，已在北京、上海、广州、西安、青岛等全国21座城市布局门店1400多家，发展成国内第二大连锁咖啡品牌。</p>
                                <p class="content">我司近期发现，在微博、微信等社交平台出现有用户注册“luckin coffee瑞幸咖啡加盟”等类似账户，冒充luckin
                                    coffee加盟代理人身份进行加盟招商等不法活动。</p>
                                <p class="content">我司在此严正声明，“luckin coffee”、“瑞幸咖啡 ”均为我司合法注册商标，获国家商标法保护。同时，luckin
                                    coffee（瑞幸咖啡）运营模式为100%
                                    直营，不接受任何形式的加盟。请广大商户慎重，避免上当受骗。对于上述不法人员的侵权行为，我公司已启动法律程序, 对类似事件坚决制止并严厉打击，也欢迎大家对此类事件进行举报。</p>
                                <p class="content">我司官方微博账户名称为“luckin coffee瑞幸咖啡”，微信公众号平台为“luckin coffee瑞幸咖啡”，有需求可与luckin
                                    coffee后台留言联系。</p>
                                <div class="mark">
                                    <p>luckin coffee瑞幸咖啡</p>
                                    <p>2018年10月24日</p>
                                </div>
                            </div>
                            <div class="foot-banner">
                                <img src="https://s2.luckincoffeecdn.com/luckywebrm/images/about/foot_banner.png" alt="">
                            </div>
                        </div>
                    </div>
                    <div v-show="boxFlag == 5 ? true : false" class="about-item joinus">
                        <h2 class="main-title">加入我们</h2>
                        <div class="teletext">
                            <p class="text">luckin coffee不止于提供一杯高品质的新鲜咖啡，我们同时将互联网体验融入咖啡的消费流程，开创出全新的商业模式。加入我们，一起探索更多新鲜事。</p>
                            <div class="image">
                                <img src="https://s2.luckincoffeecdn.com/luckywebrm/images/pimg/about/joinus.png" alt="">
                                <div class="qrcode"></div>
                            </div>
                            <p class="text descript">[ 扫一扫，查看更多职位 ]</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>



    </div>
</template>

<script>
    import "../assets/css/aboutus.css"
    import model from "../assets/images/model.png"
    import brand from "../assets/images/brand.png"
    import contact from "../assets/images/contact.png"
    import statement from "../assets/images/statement.png"
    import joinus from "../assets/images/joinus.png"
    import model_active from "../assets/images/model_active.png"
    import brand_active from "../assets/images/brand_active.png"
    import contact_active from "../assets/images/contact_active.png"
    import statement_active from "../assets/images/statement_active.png"
    export default {
        name: "aboutus",
        data(){
            return{
                boxFlag:1,
                playMask:true,
                menuList:[
                    {menu:"商业模式",src1:model,src2:model_active,id:"1",class:"active"},
                    {menu:"品牌主张",src1:brand,src2:brand_active,id:"2",class:""},
                    {menu:"联系我们",src1:contact,src2:contact_active,id:"3",class:""},
                    {menu:"重要声明",src1:statement,src2:statement_active,id:"4",class:""},
                    {menu:"加入我们",src1:joinus,src2:joinus,id:"5",class:""},

                ]
            }
        },
        methods:{
            clickMenuHandle(itemId){
                console.log(itemId)
                let array = this.menuList;
                for(let i=0; i<array.length;i++){
                    if(itemId == array[i].id){
                        array[i].class="active"
                    }else{
                        array[i].class=""

                    }
                }
                this.boxFlag = itemId

            },
            clickPlay(){
                this.playMask = false;
                this.$refs.videoplay.play()
            }
        }





    }
</script>

<style scoped>

</style>