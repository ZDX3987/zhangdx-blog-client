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
      this.$store.commit('switchTheme', theme);
    }
    this.printLog();
  },
  metaInfo() {
    return {
      title: this.$route.meta.title + ' - ZHANGDX的博客',
      meta: [
        {
          vmid: 'keywords',
          name: 'keywords',
          content: 'Java，技术博客，程序员，编程，学习，分享，ZHANGDX'
        },
        {
          vmid: 'description',
          name: 'description',
          content: '一个软件开发工程师的技术学习分享博客'
        }
      ]
    }
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
