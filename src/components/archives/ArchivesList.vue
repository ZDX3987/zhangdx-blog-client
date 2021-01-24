<template>
  <div class="archives-list">
    <el-timeline>
      <el-timeline-item v-for="article of articleList" :key="article.id"
                        :timestamp="dateFormat(article.createDate)"
                        placement="top">
        <el-card class="article-card">
          <router-link :to="{ name: 'ArticlePreview', params: { id: article.id } }">
            <h4 class="article-title">{{ article.title }}</h4>
          </router-link>
          <p>
            <span v-for="(tag, index) of article.categories" :key="tag.id">
                  {{ index != 0 ? '&nbsp/&nbsp' : '' }}
                  {{ tag.cateName }}
                </span>
            {{ article.createDate | dateFormat("yyyy-MM-dd") }}</p>
        </el-card>
      </el-timeline-item>
    </el-timeline>
  </div>
</template>

<script>
export default {
  name: "ArchivesList",
  data() {
    return {
      articleList: [],
      pageSize: 15,
      sort: 'DESC',
      queryStatus: 2,
    }
  },
  props: {
    queryDateStr: String,
  },
  watch: {
    queryDateStr(newValue) {
      this.queryArchivesArticle(0);
    }
  },
  created() {
    this.queryArchivesArticle(0);
  },
  methods: {
    queryArchivesArticle(pageIndex) {
      let formData = {
        queryDateStr: this.queryDateStr,
        pageSize: this.pageSize,
        pageIndex: pageIndex,
        articleStatus: this.queryStatus,
        sort: this.sort,
      }
      this.$api.articleApi.getArticleForArchives(formData).then(result => {
        this.articleList = result.data.elements;
      }).catch(error => this.$message.error('文章查询失败'))
    },
    dateFormat(date) {
      return this.$options.filters['dateFormat'](date, 'yyyy-MM-dd')
    }
  }
}
</script>

<style scoped>
.article-card {
  background-color: var(--bgColor);
  border-color: var(--borderColor);
  color: var(--fontColor);
}

.article-card a {
  color: var(--fontColor);
  text-decoration: none;
}

.article-card a:hover {
  color: var(--mainThemeColor);
}
</style>
