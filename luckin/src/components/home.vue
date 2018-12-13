<template>
    <div class="content_wrapper">
        <div class="play_wrapper">
            <div class="cover_logo"></div>
            <div class="cover_play" @click="playBegin"></div>
            <video autoplay="autoplay" width="100%" loop="loop" muted="muted">
                <source src="../assets/source/autoplay.mp4"/>
            </video>

            <div class="video_wrapper" :style="{'display':(playFlag)}">
                <div class="close_video" @click="closeHandle">×</div>
                <video class="video_hidden" ref="video" width="100%"
                       src="../assets/source/luckincoffee_TVC30.mp4">
                </video>
            </div>


        </div>
        <div class="second_parts">
            <div class="inner_content" :style="{'left':contentLeft}">
                <div class="second_top">
                    <div></div>
                </div>
                <div class="second_man"></div>
                <div class="second_woman"></div>
            </div>
        </div>
        <div class="third_parts">
            <div class="three_image"></div>
            <div class="third_textWrap">
                <div class="third_text">
                    <div class="item-wrap slogan-wrap show-animate">
                        <div class="product-slogan">
                            <div class="hd common-bg top_pic"></div>
                            <ul class="bd slogan-item-list">
                                <li class="slogan-item item-2 ">
                                    <div class="common-bg one-bg"></div>
                                    <div class="title">
                                        <p class="chinese">优选上等阿拉比卡豆</p>
                                        <p class="english">High Quality Arabica Beans</p>
                                    </div>
                                    <div class="desc">
                                        <p class="chinese">我们从四大咖啡产区，为您精心挑选阿拉比卡豆。</p>
                                        <p class="english">Our coffee beans come directly from top coffee producing
                                            regions, and we make sure
                                            each and every bean
                                            is Arabica.</p>
                                    </div>
                                </li>
                                <li class="slogan-item item-3">
                                    <div class="common-bg two-bg"></div>
                                    <div class="title">
                                        <p class="chinese">WBC冠军团队精心拼配</p>
                                        <p class="english">Blended by the WBC Champions</p>
                                    </div>
                                    <div class="desc">
                                        <p class="chinese">来自意大利、日本、中国的咖啡大师们，为您拼配。</p>
                                        <p class="english">Every batch of our coffee is carefully blended by our team of
                                            the WBC champions,
                                            hailing from Italy, Japan,
                                            and China.</p>
                                    </div>
                                </li>
                                <li class="slogan-item item-1">
                                    <div class="common-bg three-bg"></div>
                                    <div class="title">
                                        <p class="chinese">新鲜烘焙 新鲜现磨</p>
                                        <p class="english">Freshly roasted, freshly ground.</p>
                                    </div>
                                    <div class="desc">
                                        <p class="chinese">您品尝的每一杯luckin，均为烘焙熟豆的最佳赏味期。</p>
                                        <p class="english">Every cup of our coffee is made fresh just for you,
                                            guaranteed.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>


        </div>
        <div class="four_part">
            <div class="four_part_inner">
                <div class="about_us"></div>
                <div class="about_intro">
                    <p class="chinese about_chinese">
                        luckin coffee（瑞幸咖啡），全球领先的咖啡新鲜式：优选上等阿拉比卡豆，由WBC（世界咖啡师大赛）冠军团队精心拼配，新鲜烘焙，新鲜现磨。luckin
                        coffee倡导更灵活的购买体验，遍布各商圈写字楼，可自提可配送，已成为咖啡新零售代表连锁品牌。
                    </p>
                    <p class="english about_english">
                        luckin coffee is the world's leading brand for serving fresh coffees. Our coffee is freshly
                        roasted,
                        and ground with high
                        quality Arabica beans, which are carefully blended by our team of the WBC champions. We advocate
                        a more
                        flexible
                        experience for our customers by providing pickup and delivery options, while also locating our
                        coffee
                        shops
                        in main shopping centers and office districts. luckin coffee is becoming the new trend of coffee
                        retail
                        brand.
                    </p>
                </div>
                <div class="about_image">
                    <div class="img_wrapper"><img src="../assets/images/part4_picture1.png"/></div>
                    <div class="img_wrapper"><img src="../assets/images/part4_picture2.png"/></div>
                    <div class="img_wrapper"><img src="../assets/images/part4_picture3.png"/></div>
                </div>
            </div>


        </div>
        <div class="five_part">
            <div class="five_content">
                <div class="common-bg five_bg"></div>
                <div class="bd">
                    <p class="chinese" style="font-size: 14px;color:#333;">
                        为大型企业、中高端写字楼提供专业咖啡配套。欢迎各类咖啡厅转让。
                    </p>
                    <p class="english">
                        For providing professional coffee services for large enterprises and mid-high end office
                        buildings,
                        please call us. Store
                        ownership transfer is also welcomed.
                    </p>
                </div>
                <div class="pic_five">
                    <div><img src="../assets/images/part5_picture1.png"></div>
                    <div><img src="../assets/images/part5_picture2.png"></div>
                </div>
            </div>
            <div class="five_bottom"></div>

        </div>
        <div class="six_part">
            <div class="six_pic"></div>
            <div class="other_content">
                <div class="common-bg other_box"></div>
                <div class="six_bottom_box">
                    <div class="six_bottom_box1">
                        <div class="six_image1"></div>
                        <div class="text-wrap">
                            <div class="chinese_six">下载APP，新客户全场首件免费</div>
                            <div class="english_six">Download APP to get any one free of your first deal</div>
                        </div>
                    </div>
                    <div  class="six_bottom_box1">
                        <div class="six_image1"></div>
                        <div class="text-wrap">
                            <div class="chinese_six">关注微信和幸运打个招呼</div>
                            <div class="english_six">Follow our WeChat and good luck!</div>
                        </div>


                    </div>


                </div>

            </div>
        </div>

        <div class="gotoTop" @click="gotoTop"></div>
    </div>
</template>

<script>
    import "../assets/css/home.css"

    export default {
        props: {
            msg: String
        },


        data() {
            return {
                playFlag: "none",
                contentLeft: "440px"
            }
        },
        mounted() {
            let that = this;
            window.onresize = function () {
                that.contentLeft = (document.body.clientWidth - 1040) / 2 + "px";
            }

        },
        methods: {

            playBegin() {
                this.playFlag = "block";
                this.$refs.video.currentTime = 0;
                this.$refs.video.play()
            },
            closeHandle() {
                this.playFlag = "none"
            },
            // 去顶部
            gotoTop(){
                scrollTo(0,0);
                console.log(document.body.scrollTop)
                // window.scrollBy(0,-100);//Only for y vertical-axis
                // if(document.body.scrollTop>0) {
                //     sdelay= setTimeout('returnTop()',50);
                // }
            }
        }
    }
</script>

<style scoped>

</style>
