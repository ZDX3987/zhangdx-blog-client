<template>
  <div class="classify-content">
    <el-row type="flex" justify="center">
      <el-col :lg="14" :md="20" :xs="22" :sm="22">
        <classify-list @query-category="setQueryCateId"></classify-list>
      </el-col>
    </el-row>
    <el-row class="divider-margin"></el-row>
    <el-row type="flex" justify="center">
      <el-col :lg="14" :md="20" :xs="22" :sm="22">
        <article-list :query-cate-id="queryCateId"></article-list>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import ClassifyList from "./ClassifyList";
import ArticleList from "../article/ArticleList";

export default {
  name: "Classify",
  data() {
    return {
      queryCateId: 0
    }
  },
  components: {
    ClassifyList,
    ArticleList
  },
  methods: {
    setQueryCateId(cateId) {
      this.queryCateId = cateId;
    }
  }
}
</script>

<style scoped>
.classify-content {
  padding-bottom: 20px;
}
.divider-margin {
  margin-bottom: 10px;
}
</style>
