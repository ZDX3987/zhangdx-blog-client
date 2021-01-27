<template>
  <div class="index-content">
    <el-container>
      <nav-bar @open-search="openSearch" class="header"/>
      <el-main class="main-content">
        <router-view v-wechat-title="$route.meta.title + ' - ZHANGDX的博客'"
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

export default {
  name: "Index",
  components: {
    NavBar,
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
  margin-top: 80px;
  padding: 0;
}
</style>
