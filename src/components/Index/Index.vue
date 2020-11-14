<template>
  <div class="index-content">
    <el-container>
      <NavBar/>
      <el-main class="main-content">
        <el-row>
          <el-col :md="16">
            <ArticleList/>
          </el-col>
          <el-col :md="8">
          </el-col>
        </el-row>
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
  background-color: rgb(239, 239, 239);
  height: 100%;
  overflow: hidden;
}

.el-container {
  height: 100%;
}

.el-main,
.el-footer {
  padding: 0;
  height: 100%;
}

.el-main {
  margin-top: 80px;
}

.main-content {
  padding: 20px 10%;
}
</style>
