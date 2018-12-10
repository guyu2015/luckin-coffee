<template>
  <div id="app">
    <head-text />
    <home-text/>

  </div>
</template>

<script>

    import Head from './components/head.vue'
    import Home from './components/home.vue'

    export default {
  name: 'app',
  components: {
      "head-text":Head,
      "home-text":Home
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
