<template>
    <div>
        <div id="content_wrapper">
            <div class="cover_bgc"  @click="dispair" :style="{'display':displayFlag}"></div>
            <video src="../assets/images/8sautoplay.mp4" controls="controls"></video>
        </div>
    </div>

</template>

<script>
    export default {
        name: "home",
        data(){
            return{
                displayFlag:"block"
            }
        },
        methods:{
            dispair(){
                console.log("00000000000000")
                this.displayFlag="none"
            }
        }
    }
</script>

<style scoped>
#content_wrapper{
    position: relative;
    width: 100%;
    margin-top: 60px;
}
    video{
        width: 100%;
    }
    .cover_bgc{
        position: absolute;
        z-index: 55;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background-size: contain;
        background-image: url("../assets/images/bg.jpg");
    }
</style>