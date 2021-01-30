<template>
  <div class="index-content">
    <el-container>
      <nav-bar @open-search="openSearch" class="header"/>
      <el-main class="main-content">
        <breadcrumb-router></breadcrumb-router>
        <router-view class="main-router" v-wechat-title="$route.meta.title + ' - ZHANGDX的博客'"
                     :key="$route.fullPath"/>
      </el-main>
      <footer>
        <Footer/>
      </footer>
    </el-container>
    <search :search-show="searchShow" @close-search="closeSearch"></search>
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

export default {
  name: "Index",
  components: {
    NavBar,
    BreadcrumbRouter,
    ArticleList,
    Footer,
    Search,
    BackTop,
  },
  data() {
    return {
      searchShow: false
    }
  },
  methods: {
    openSearch(value) {
      this.searchShow = value;
    },
    closeSearch(value) {
      this.searchShow = value;
    }
  }
};
</script>

<style scoped>
.index-content {
  background-color: var(--bodyBgColor);
  min-height: 100%;
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
