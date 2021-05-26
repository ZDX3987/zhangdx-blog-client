<template>
  <div class="index-content">
    <el-container>
      <bg></bg>
      <div class="fixed-header">
        <nav-bar></nav-bar>
        <el-collapse-transition>
          <search v-if="searchShow"></search>
        </el-collapse-transition>
      </div>
      <el-main class="main-content">
        <breadcrumb-router></breadcrumb-router>
        <router-view class="main-router" v-wechat-title="$route.meta.title + ' - ZHANGDX的博客'"
                     :key="$route.fullPath"/>
      </el-main>
      <footer>
        <Footer/>
      </footer>
    </el-container>
    <BackTop/>
  </div>
</template>

<script>
import NavBar from "./NavBar";
import Footer from "./Footer";
import ArticleList from "../article/ArticleList";
import BackTop from "../common/BackTop";
import '../../../static/js/back-top.js'
import Search from "../common/Search";
import BreadcrumbRouter from "../common/BreadcrumbRouter";
import Bg from './Bg';

export default {
  name: "Layout",
  components: {
    Bg,
    NavBar,
    Search,
    BreadcrumbRouter,
    ArticleList,
    Footer,
    BackTop,
  },
  data() {
    return {
    }
  },
  computed: {
    searchShow() {
      return this.$store.state.showSearch;
    }
  },
  methods: {
  }
};
</script>

<style scoped>
.index-content {
  min-height: 100%;
}
.fixed-header {
  width: 100%;
  position: fixed;
  z-index: 20;
  top: 0;
  transition: all 0.5s;

}
.el-container {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
}

.el-main {
  margin-top: 65px;
  padding: 0;
}
</style>
