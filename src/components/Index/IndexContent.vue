<template>
  <div>
    <el-row class="index-content" type="flex" justify="center">
      <el-col :md="14" :xs="22" :sm="22">
        <ArticleList :query-cate-id="0"/>
      </el-col>
      <el-col :md="6" class="hidden-sm-and-down ml-3">
        <CateCloud/>
        <TopicSide/>
      </el-col>
    </el-row>
<!--    <el-row class="index-content hidden-md-and-up" type="flex" justify="center">-->
<!--      <el-col :xs="22" :sm="22">-->
<!--        <CateCloud/>-->
<!--        <TopicSide/>-->
<!--      </el-col>-->
<!--    </el-row>-->
  </div>
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
  padding-top: 20px;
  padding-bottom: 20px;
}
</style>
