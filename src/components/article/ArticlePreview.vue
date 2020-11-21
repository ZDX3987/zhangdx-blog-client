<template>
  <el-row>
    <el-col :md="16">
      <div class="article-content" v-if="isLoading">
        <skeleton
          type="custom"
          :options="{ width: '100%', height: '100%' }"
          :childrenOption="[
            {
              type: 'card',
              rules: 'a, d, g',
              active: true,
              options: { width: '100%', height: '80%' },
            },
            { type: 'listcom', rules: 'b, c, e, f, h, i', active: true },
          ]"
        />
      </div>
      <div class="article-content" v-if="!isLoading">
        <el-row>
          <el-col :span="24">
            <h2 class="article-title">{{ article.title }}</h2>
            <el-row class="article-info">
              <el-col :md="4" :xs="9" :sm="8" class="article-date">
                <span class="fa fa-calendar-o"></span>
                {{ article.createDate | dateFormat("yyyy-MM-dd") }}
              </el-col>
              <el-col :md="4" :xs="9" :sm="8" class="article-author">
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
        <div id="showText" ref="showText" class="article-text"></div>
      </div>
    </el-col>
    <el-col :md="8" class="hidden-sm-and-down">
      <div
        id="articleDirectory"
        class="article-directory"
        ref="articleDirectory"
      ></div>
    </el-col>
  </el-row>
</template>

<script>
import VditorPreview from "vditor/dist/method.min";
import "vditor/dist/index.css";

export default {
  name: "ArticlePreview",
  data() {
    return {
      articleId: "",
      article: "",
      isLoading: true,
    };
  },
  created() {
    VditorPreview.mermaidRender(document);
    this.articleId = this.$route.params.id;
    this.$api.articleApi
      .getArticleById(this.articleId)
      .then((res) => {
        this.article = res.data;
        this.isLoading = false;
        this.$route.meta.title = this.article.title;
        this.renderArticle(this.article);
      })
      .catch((error) => {
        console.log(error);
      });
  },
  methods: {
    renderArticle(article) {
      this.$nextTick(() => {
        if (article.source === 2) {
          VditorPreview.preview(this.$refs.showText, article.text);
          VditorPreview.outlineRender(
            this.$refs.showText,
            this.$refs.articleDirectory
          );
        } else {
          this.$refs.showText.innerHTML = article.text;
        }
      });
    },
  },
};
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
.article-directory {
  width: 23%;
  height: 500px;
  background-color: #fff;
  margin: 0 2%;
  position: fixed;
}
</style>
