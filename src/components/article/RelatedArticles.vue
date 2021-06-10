<template>
  <div class="related-articles">
    <div class="related-articles-header">
      <span><i class="fa fa-folder-open"></i>&nbsp;相关文章</span>
    </div>
    <div class="related-articles-body">
      <div v-if="relatedArticles.length === 0">
        <empty-list/>
      </div>
      <el-row v-else class="my-3">
        <el-col :md="12" class="related-articles-item" v-for="article of relatedArticles" :key="article.id">
          <router-link class="text-truncate d-inline-block mx-5"
                       :to="{ name: 'ArticlePreview', params: { id: article.id } }">
            {{ article.title }}
          </router-link>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import EmptyList from '../common/EmptyList';

export default {
  name: "RelatedArticles",
  data() {
    return {
      relatedArticles: []
    }
  },
  components: {
    EmptyList
  },
  props: {
    articleId: ""
  },
  created() {
    this.$api.articleApi.getRelatedArticles(this.articleId).then(res => {
      this.relatedArticles = res.data;
    }).catch(error => this.$message.error('相关文章加载失败'))
  }
}
</script>

<style scoped>
.related-articles {
  background-color: var(--bgColor);
  margin-top: 20px;
}

.related-articles-header {
  height: 50px;
  border-bottom: 1px solid var(--borderColor);
  font-size: 18px;
  line-height: 50px;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  color: var(--fontColor);
}

.related-articles-header a {
  text-decoration: none;
}

.related-articles-item {
  text-align: left;
}

.related-articles-item a {
  width: 80%;
  text-decoration: none;
  color: var(--fontColor);
  transition: all 0.5s;
}

.related-articles-item a:hover {
  color: var(--mainThemeColor);
}
</style>