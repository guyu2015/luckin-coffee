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
</style>
