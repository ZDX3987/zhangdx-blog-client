<template>
  <div class="index-content">
    <el-container>
      <bg></bg>
      <div class="fixed-header">
        <nav-bar @show-search="showSearch"/>
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
import NavBar from "../layout/NavBar";
import Footer from "../layout/Footer";
import ArticleList from "../article/ArticleList";
import BackTop from "../layout/BackTop";
import '../../../static/js/back-top.js'
import Search from "../common/Search";
import BreadcrumbRouter from "../layout/BreadcrumbRouter";
import Bg from '../layout/Bg';

export default {
  name: "Index",
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
      searchShow: false
    }
  },
  methods: {
    showSearch(value) {
      this.searchShow = value;
    }
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
