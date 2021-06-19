<template>
  <div class="article-preview">
    <el-row type="flex" justify="center" class="hidden-md-and-up">
      <el-col>
        <article-preview-title :directoryShow="directoryShow"/>
      </el-col>
    </el-row>
    <el-row type="flex" justify="center">
      <el-col :xl="1" :md="2" class="hidden-sm-and-down">
        <shared-side v-if="!isLoading" ref="sharedSide" :article="article"/>
      </el-col>
      <el-col :lg="12" :md="15" :xs="22" :sm="22">
        <div class="article-content" v-if="isLoading">
          <article-skeleton></article-skeleton>
        </div>
        <div id="article-content" ref="articleContent" class="article-content" v-if="!isLoading">
          <el-row>
            <el-col :span="24">
              <h2 class="article-title">{{ article.title }}</h2>
              <el-row class="article-info">
                <el-col :xs="9" :sm="5" :xl="3" class="article-date">
                  <span class="fa fa-calendar-o"></span>
                  {{ article.createDate | dateFormat("yyyy-MM-DD") }}
                </el-col>
                <el-col :xs="9" :sm="5" :xl="3" class="article-author">
                  <el-avatar
                      :src="article.author.avatar"
                      size="small"
                      class="align-middle"
                  ></el-avatar>
                  {{ article.author.username }}
                </el-col>
                <el-col v-if="article.categories.length !==0" :xs="20" :sm="10">
                  <i class="fa fa-tags"></i>
                  <span v-for="(tag, index) of article.categories" :key="tag.id">
                    {{ index != 0 ? '&nbsp/&nbsp' : '' }}
                    <router-link :to="{name: 'CateList', params: {id: tag.id}}">
                      {{ tag.cateName }}
                    </router-link>
                  </span>
                </el-col>
              </el-row>
            </el-col>
          </el-row>
          <el-divider></el-divider>
          <el-image v-if="article.coverImg"
                    :src="article.coverImg"
                    fit="scale-down">
            <div slot="error">
              <el-image :src="errorImgUrl" fit="scale-down"></el-image>
            </div>
          </el-image>
          <div id="showText" ref="showText" class="article-text vditor-reset" v-viewer.rebuild></div>
          <el-divider></el-divider>
          <div class="article-footer">
            <el-button type="primary" round plain @click="praiseArticle" :disabled="praising">
              <i class="fa fa-thumbs-o-up"></i>
              {{ article.praise }}
            </el-button>
          </div>
        </div>
        <article-direction :main-article-id="articleId"/>
      </el-col>
      <el-col :md="5" class="hidden-sm-and-down">
        <article-directory v-if="!isLoading" ref="articleDirectory" :directoryShow="directoryShow"/>
      </el-col>
    </el-row>
    <el-row type="flex" justify="center">
      <el-col :xl="1" :md="2" class="hidden-sm-and-down"></el-col>
      <el-col :lg="12" :md="15" :xs="22" :sm="22">
        <related-articles :article-id="articleId"/>
      </el-col>
      <el-col :md="5" class="hidden-sm-and-down"></el-col>
    </el-row>
  </div>
</template>

<script>
import VditorPreview from "vditor/dist/method.min";
import "vditor/dist/index.css";
import ArticleDirectory from "../components/article/ArticleDirectory";
import ArticleSkeleton from "../components/skeleton/ArticleSkeleton";
import RelatedArticles from '../components/article/RelatedArticles';
import ArticleDirection from '../components/article/ArticleDirection';
import SharedSide from '../components/side/SharedSide';
import ArticlePreviewTitle from '../components/article/ArticlePreviewTitle';

export default {
  name: "ArticlePreview",
  data() {
    return {
      articleId: "",
      article: "",
      isLoading: true,
      scrollHeight: 0,
      articleDirectoryClassName: "article-directory-fixed",
      directoryShow: false,
      drawer: false,
      errorImgUrl: '/static/images/notfound.gif',
      praising: false,
      vditorThemeCDN: 'https://cdn.jsdelivr.net/npm/vditor@3.8.5/dist/css/content-theme'
    };
  },
  components: {
    ArticleSkeleton,
    ArticleDirectory,
    RelatedArticles,
    ArticleDirection,
    SharedSide,
    ArticlePreviewTitle
  },
  created() {
    VditorPreview.mermaidRender(document);
    this.articleId = this.$route.params.id;
    this.$api.articleApi
        .getArticleById(this.articleId)
        .then((res) => {
          this.article = res.data;
          // document.title = this.article.title + ' - ZHANGDX的博客';
          this.isLoading = false;
          this.renderArticle(this.article);
        })
        .catch(error => this.$message.error("文章内容加载失败"));
  },
  metaInfo() {
    return {
      title: (this.article.title ? this.article.title : this.$route.meta.title) + ' - ZHANGDX的博客',
      meta: [
        {
          vmid: 'keywords',
          name: 'keywords',
          content: this.article.categories ? this.article.categories.map(tag => tag.cateName).join('，') : ''
        },
        {
          vmid: 'description',
          name: 'description',
          content: this.article.digest
        }
      ]
    }
  },
  computed: {
    codeTheme() {
      return this.$store.state.themeToggle;
    }
  },
  watch: {
    codeTheme: {
      handler(newVal, oldVal) {
        if (newVal === 'light') {
          VditorPreview.setCodeTheme('github');
          VditorPreview.setContentTheme('light', this.vditorThemeCDN);
        } else {
          VditorPreview.setCodeTheme('native');
          VditorPreview.setContentTheme('dark', this.vditorThemeCDN);
        }
      },
      immediate: true
    }
  },
  methods: {
    renderArticle(article) {
      this.$nextTick(() => {
        if (article.source === 2) {
          let that = this;
          VditorPreview.preview(this.$refs.showText, article.text, {
            after() {
              // 动态加载侧边栏目录
              that.directoryShow = true;
            },
            lazyLoadImage: 'Loading',
            hljs: {
              style: that.codeTheme === 'light' ? 'github' : 'native',
              lineNumber: true
            }
          });
        } else {
          this.$refs.showText.innerHTML = article.text;
          this.directoryShow = true;
        }
      });
    },
    praiseArticle() {
      this.praising = true;
      this.$api.articleApi.praiseArticle(1, this.article.id).then(() => {
        this.article.praise++;
      }).catch(error => this.$message.error('点赞失败'));
    }
  }
};
</script>

<style scoped>
.article-preview {
  padding-top: 20px;
  padding-bottom: 20px;
}

.article-content {
  background-color: var(--bgColor);
  padding: 40px;
  text-align: left;
}

.article-title {
  margin: 0;
  color: var(--articleTitle);
}

.article-info {
  margin-top: 20px;
  height: 40px;
  line-height: 40px;
  color: #999;
}

.article-date {
  font-size: 14px;
}

.article-author {
  font-size: 14px;
  line-height: 40px;
  height: 40px;
}

.article-tags {
  margin-top: 10px;
  text-align: left;
}

.article-tags span, a {
  color: #B2BAC2;
  font-size: 14px;
  text-decoration: none;
}

.article-tags a:hover {
  color: var(--mainThemeColor);
}

.article-text {
  color: var(--articleText);
}

.article-footer {
  text-align: center;
}

.article-footer >>> button {
  outline: none;
  font-size: 16px;
  width: 200px;
  height: 50px;
}
</style>
