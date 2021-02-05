<template>
  <div class="topic-item">
    <el-row type="flex" justify="center">
      <el-col :md="16" :xs="22" :sm="22">
        <div class="topic-info p-4 mb-3">
          <h4>{{ topicItem ? topicItem.title : '' }}</h4>
        </div>
        <article-single-list v-if="topicItem" :article-list="topicItem.articleList">
        </article-single-list>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import ArticleSingleList from "../article/ArticleSingleList";

export default {
  name: "TopicItem",
  data() {
    return {
      topicItem: null
    }
  },
  components: {
    ArticleSingleList
  },
  created() {
    let topicId = this.$route.params.id;
    this.$api.topicApi.getTopicById(topicId).then(result => {
      this.topicItem = result.data;
    }).catch(() => this.$message.error('查询失败'))
  }
}
</script>

<style scoped>
.topic-info {
  background-color: var(--bgColor);
  height: 200px;
  text-align: left;
}
</style>
