<template>
  <el-row>
    <el-col :md="16">
      <ArticleList/>
    </el-col>
    <el-col :md="8" class="hidden-sm-and-down">
      <CateCloud/>
    </el-col>
  </el-row>
</template>

<script>
import ArticleList from "../article/ArticleList";
import CateCloud from "../Category/CateCloud";

export default {
  name: "IndexContent",
  data() {
    return {}
  },
  components: {
    ArticleList,
    CateCloud
  }
}
</script>

<style scoped>
</style>
