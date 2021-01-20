<template>
  <div class="index-content">
    <el-container>
      <NavBar class="header"/>
      <el-main class="main-content">
        <router-view v-wechat-title="$route.meta.title + ' - ZHANGDX的博客'"
                     :key="$route.fullPath"/>
      </el-main>
      <el-footer>
        <Footer/>
      </el-footer>
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

export default {
  name: "Index",
  components: {
    NavBar,
    ArticleList,
    Footer,
    BackTop
  },
};
</script>

<style scoped>
.index-content {
  background-color: var(--bodyBgColor);
  min-height: 100%;
}

.el-container {
  display: flex;
  min-height: 69.1vh;
  flex-direction: column;
}

.el-main {
  margin-top: 80px;
  padding: 0;
  height: 100%;
  flex: 1;
}

.el-footer {
  padding: 0;
  height: 100%;
}

.header {
}

.main-content {
}
</style>
