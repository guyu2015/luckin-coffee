<template>
    <div id="app">
        <head-text/>
        <router-view class="content"></router-view>
        <foot-text/>
    </div>
</template>

<script>
    import Head from './components/head.vue'
    import Footer from "./components/footer.vue"

    export default {
        name: 'app',
        components: {
            "head-text": Head,
            "foot-text":Footer
        }
    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #2c3e50;
    }
    .content{
        margin-top: 60px;
    }
</style>
