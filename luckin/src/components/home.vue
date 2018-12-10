<template>
    <div class="content_wrapper">
        <div class="play_wrapper">
            <div class="cover_logo" ></div>
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
            <div class="second_top"><div ></div></div>
            <div class="inner_content">
                <div class="second_man"></div>
                <div class="second_woman"></div>

            </div>


        </div>
    </div>
</template>

<script>
    export default {
        name: 'HelloWorld',
        props: {
            msg: String
        },
        data(){
          return{
              playFlag:"none"
          }
        },
        methods: {
            playBegin(){
                this.playFlag = "block"
                this.$refs.video.currentTime  = 0
                this.$refs.video.play()
            },
            closeHandle(){
                this.playFlag = "none"
            }
        }
    }
</script>

<style scoped>
    .video_wrapper {
        position: fixed;
        z-index: 22;
        background: #000;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
    }
    .close_video{
        color: white;
        padding: 10px 30px;
        text-align: right;
        font-size: 50px;


    }
    .video_hidden{

    }
    .cover_play {
        position: absolute;
        width: 64px;
        height: 64px;
        margin-left: -32px;
        left: 50%;
        top: 60%;
        z-index: 10;
        background-size: 100% 100%;
        background-image: url("../assets/images/play.png");
    }
    .cover_logo {
        position: absolute;
        z-index: 10;
        width: 30%;
        left: 35%;
        top: 8%;
        height: 60%;
        background-size: 100% 100%;
        transform: scale(0.5);
        background-image: url("../assets/images/cover_logo@2x.png");
    }
    .play_wrapper {
        position: relative;
        width: 100%;

    }
    .second_parts{
        width: 100%;
        height: 840px;
        margin-top: 60px;
        position: relative;
    }
    .second_top{
        position: relative;
        width: 100%;
        height: 80px;
    }
    .second_top>div{
        width: 200px;
        height: 80px;
        position: absolute;
        left: 60%;
        background-repeat: no-repeat;
        background-size: 120%;
        background-position: -80% 0%;
        background-image: url("../assets/images/sprite@2x (1).png");
    }
    .second_top::after{
        position: absolute;
        left: 54%;
        content: '';
        width: 36px;
        bottom: -20px;
        height: 2px;
        background: #a38d71;
        display: inline-block;
    }
    .inner_content{
        width: 90%;
        min-width: 1040px;
        height: 840px;
        position: absolute;
        top: 0;
        left: 5%;
    }
    .second_man{
        position: absolute;
        left: 10%;
        top:0px;
        width: 460px;
        height: 280px;
        background-image: url("../assets/images/part2_picture1.png");
    }
    .second_woman{
        position: absolute;
        top: 255px;
        right: 0;
        width: 730px;
        height: 460px;
        background-image: url("../assets/images/part2_picture2.png");
        background-size:cover ;
    }
</style>
