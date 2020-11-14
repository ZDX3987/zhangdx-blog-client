<template>
  <div class="index-content">
    <el-container>
      <NavBar />
      <el-main class="main-content">
        <el-row>
          <el-col :md="16" >
            <ArticleList />
          </el-col>
          <el-col  :md="8">
          </el-col>
        </el-row>
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
  overflow: hidden;
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
  padding: 20px 10%;
}
</style>
