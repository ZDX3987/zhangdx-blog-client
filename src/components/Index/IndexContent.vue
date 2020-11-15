<template>
  <el-row>
    <el-col :md="16">
      <ArticleList/>
    </el-col>
    <el-col :md="8">
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

</style>
