<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import {bannerPrint} from './util/console-print';

export default {
  name: 'App',
  created() {
    let theme = sessionStorage.getItem('theme');
    if (theme) {
      this.$store.commit('toggleTheme', theme);
    }
    this.printLog();
  },
  methods: {
    printLog() {
      bannerPrint();
    }
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
  height: 100%;
}
</style>
