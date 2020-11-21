<template>
  <el-row>
    <el-col :md="16">
      <ArticleList/>
    </el-col>
    <el-col :md="8" class="hidden-sm-and-down">
      <div class="others"></div>
    </el-col>
  </el-row>
</template>

<script>
import ArticleList from "../article/ArticleList";

export default {
  name: "IndexContent",
  data() {
    return {}
  },
  components: {
    ArticleList
  }
}
</script>

<style scoped>
.others {
  width: 96%;
  height: 500px;
  background-color: #fff;
  margin-left: 4%;
}
</style>
