<template>
  <div id="app">
    <Head/>

    <Home/>
  </div>
</template>

<script>
import Home from './components/home.vue'
import Head from './components/head.vue'

export default {

    data(){
        return{
            name: 'app',
            video:document.body.clientWidth
        }
    },
    mounted(){
        const that = this;
        window.onresize = () => {
            return (() => {
                window.screenWidth = document.body.clientWidth;
                that.screenWidth = window.screenWidth
            })()
        }
    },

  components: {
    Head : Head,
      Home:Home
  },

}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
