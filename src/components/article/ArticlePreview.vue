<template>
  <div class="article-content">
    <el-row>
      <el-col :span="12">
        <h2 class="article-title">{{ article.title }}</h2>
        <el-row class="article-info">
          <el-col :span="8" class="article-date">
            <span class="fa fa-calendar-o"></span>
            {{ article.createDate | dateFormat("yyyy-MM-dd") }}
          </el-col>
          <el-col :span="12" class="article-author">
            <el-avatar
              :src="article.author.avatar"
              size="small"
            ></el-avatar>
            {{ article.author.username }}
          </el-col>
        </el-row>
      </el-col>
    </el-row>
    <el-divider></el-divider>
    <el-image
      class="article-coverImg"
      :src="article.coverImg"
      fit="scale-down"
    ></el-image>
    <div class="article-text" v-html="article.text"></div>
  </div>
</template>

<script>
export default {
  name: "ArticlePreview",
  data() {
    return {
      articleId: '',
      article: ''
    }
  },
  created() {
    this.articleId = this.$route.params.id;
    this.$api.articleApi
      .getArticleById(this.articleId)
      .then((res) => {
        this.article = res.data;
        this.$route.meta.title = this.article.title;
      })
      .catch((error) => {
        console.log(error);
      });
  }
}
</script>

<style scoped>
.article-content {
  background-color: #fff;
  padding: 40px;
  text-align: left;
}

.article-title {
  margin: 0;
}

.article-info {
  margin-top: 20px;
  height: 40px;
  line-height: 40px;
  color: #999;
}

.article-author {
  line-height: 40px;
  height: 40px;
}

.article-coverImg {
  width: 30%;
}
</style>
