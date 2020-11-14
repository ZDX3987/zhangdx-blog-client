<template>
  <div class="index-content">
    <el-container>
      <el-header>
        <NavBar />
      </el-header>
      <el-main class="main-content">
        <ArticleList />
      </el-main>
      <el-footer>
        <Footer />
      </el-footer>
    </el-container>
  </div>
</template>

<script>
import NavBar from "../layout/NavBar";
import Footer from "../layout/Footer";
import ArticleList from "../article/ArticleList";

export default {
  name: "Index",
  components: {
    NavBar,
    ArticleList,
    Footer,
  },
};
</script>

<style scoped>
.index-content {
  background-color: rgb(239, 239, 239);
  height: 100%;
}

.el-container {
  height: 100%;
}

.el-header,
.el-main,
.el-footer {
  padding: 0;
  height: 100%;
}

.main-content {
  padding: 0 10%;
}
</style>
