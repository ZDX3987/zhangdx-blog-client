<template>
  <div class="topic-item">
    <el-row type="flex" justify="center">
      <el-col :md="16" :xs="22" :sm="22">
        <div class="topic-info p-4 mb-3">
          <h4>{{ topicItem.title }}</h4>
        </div>
        <article-single-list :article-list="topicItem.articleList"></article-single-list>
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
      topicItem: {
        id: 1,
        title: '测试标题',
        praise: 20,
        articleCount: 5,
        articleList: [
          {
            id: 1,
            title: '测试文章标题',
            categories: [{id: 1, cateName: '测试分类'}]
          },
          {
            id: 1,
            title: '测试文章标题',
            categories: [{id: 1, cateName: '测试分类'}]
          },
          {
            id: 1,
            title: '测试文章标题',
            categories: [{id: 1, cateName: '测试分类'}]
          }
        ]
      }
    }
  },
  components: {
    ArticleSingleList
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