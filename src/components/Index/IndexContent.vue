<template>
  <el-row class="index-content">
    <el-col :md="16">
      <ArticleList :query-cate-id="0"/>
    </el-col>
    <el-col :md="8" class="hidden-sm-and-down">
      <CateCloud/>
      <TopicSide/>
    </el-col>
  </el-row>
</template>

<script>
import ArticleList from "../article/ArticleList";
import CateCloud from "../category/CateCloud";
import TopicSide from "../topic/TopicSide";

export default {
  name: "IndexContent",
  data() {
    return {}
  },
  components: {
    ArticleList,
    CateCloud,
    TopicSide
  }
}
</script>

<style scoped>
.index-content {

}
</style>
