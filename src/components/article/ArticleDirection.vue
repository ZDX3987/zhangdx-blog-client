<template>
  <el-row class="article-direction">
    <el-col class="article-direction-item" :span="12">
      <router-link v-if="articleList[0]" class="text-truncate d-inline-block"
                   :to="{ name: 'ArticlePreview', params: { id: articleList[0].id } }">
        上一篇：{{ articleList[0].title }}
      </router-link>
      <p v-else>
        上一篇：无
      </p>
    </el-col>
    <div class="dividing-line"></div>
    <el-col class="article-direction-item" :span="12">
      <router-link v-if="articleList[1]" class="text-truncate d-inline-block"
                   :to="{ name: 'ArticlePreview', params: { id: articleList[1].id } }">
        下一篇：{{ articleList[1].title }}
      </router-link>
      <p v-else>
        下一篇：无
      </p>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: "ArticleDirection",
  data() {
    return {
      articleList: [null, null]
    }
  },
  props: {
    mainArticleId: ""
  },
  created() {
    this.queryPrevAndNextArticle();
  },
  methods: {
    queryPrevAndNextArticle() {
      this.$api.articleApi.getPrevAndNextArticle(this.mainArticleId).then(res => {
        this.articleList = res.data;
      }).catch(error => {});
    }
  }
}
</script>

<style scoped>
.article-direction {
  background-color: var(--bgColor);
  height: 80px;
  border-top: 1px solid var(--borderColor);
}

.article-direction-item {
  height: 80px;
  line-height: 80px;
  color: var(--fontColor);
}

.article-direction-item:nth-of-type(1) {
  border-right: 1px solid var(--borderColor);
}

.article-direction-item a {
  width: 80%;
  text-decoration: none;
  color: var(--fontColor);
  transition: all 0.5s;
}

.article-direction-item a:hover {
  color: var(--mainThemeColor);
}
</style>