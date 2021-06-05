<template>
  <div class="article-preview">
    <el-row type="flex" justify="center">
      <el-col :xl="1" :md="2" class="hidden-sm-and-down">
        <shared-side ref="sharedSide" :article="article"/>
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
                <el-col :xs="9" :sm="5" class="article-date">
                  <span class="fa fa-calendar-o"></span>
                  {{ article.createDate | dateFormat("yyyy-MM-DD") }}
                </el-col>
                <el-col :xs="9" :sm="5" class="article-author">
                  <el-avatar
                      :src="article.author.avatar"
                      size="small"
                      class="align-middle"
                  ></el-avatar>
                  {{ article.author.username }}
                </el-col>
                <el-col v-if="article.categories.length !==0" :xs="9" :sm="10">
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
                    class="article-coverImg"
                    :src="article.coverImg"
                    fit="scale-down">
            <div slot="error">
              <el-image :src="errorImgUrl" fit="scale-down"></el-image>
            </div>
          </el-image>
          <div id="showText" ref="showText" class="article-text" v-viewer.rebuild></div>
          <el-divider>End</el-divider>
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
        <div
            id="articleDirectory"
            :class="articleDirectoryClassName"
            ref="articleDirectory">
          <article-directory :directoryShow="directoryShow"></article-directory>
        </div>
      </el-col>
    </el-row>
    <el-row type="flex" justify="center">
      <el-col :xl="1" :md="2" class="hidden-sm-and-down"></el-col>
      <el-col :lg="12" :md="15" :xs="22" :sm="22">
        <related-articles/>
      </el-col>
      <el-col :md="5" class="hidden-sm-and-down"></el-col>
    </el-row>
    <div class="hidden-md-and-up">
      <a @click="drawer = true" class="side-drawer-btn fa fa-caret-left"
         :class="drawer ? 'side-drawer-show-btn' : ''">
      </a>
      <el-drawer
          :visible.sync="drawer"
          direction="rtl"
          :class="'drawer-content'"
          size="40%">
        <article-directory :directoryShow="directoryShow"></article-directory>
      </el-drawer>
    </div>
  </div>
</template>

<script>
import VditorPreview from "vditor/dist/method.min";
import "vditor/dist/index.css";
import ArticleDirectory from "./ArticleDirectory";
import ArticleSkeleton from "../skeleton/ArticleSkeleton";
import RelatedArticles from './RelatedArticles';
import ArticleDirection from './ArticleDirection';
import SharedSide from '../side/SharedSide';

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
      praising: false
    };
  },
  components: {
    ArticleSkeleton,
    ArticleDirectory,
    RelatedArticles,
    ArticleDirection,
    SharedSide
  },
  created() {
    VditorPreview.mermaidRender(document);
    this.articleId = this.$route.params.id;
    this.$api.articleApi
        .getArticleById(this.articleId)
        .then((res) => {
          this.article = res.data;
          document.title = this.article.title + ' - ZHANGDX的博客';
          this.isLoading = false;
          this.renderArticle(this.article);
        })
        .catch(error => this.$message.error("文章内容加载失败"));
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll, true);
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
        } else {
          VditorPreview.setCodeTheme('native');
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
        }
      });
    },
    handleScroll() {
      // 页面滚动距顶部距离
      let scrollTop =
          window.pageYOffset ||
          document.documentElement.scrollTop ||
          document.body.scrollTop;
      this.handleFixedDirectory(scrollTop);
      this.$refs.sharedSide.handleScroll(scrollTop, this.$refs.articleContent.offsetHeight);
    },
    praiseArticle() {
      this.praising = true;
      this.$api.articleApi.praiseArticle(1, this.article.id).then(() => {
        this.article.praise++;
      }).catch(error => this.$message.error('点赞失败'));
    },
    handleFixedDirectory(scrollTop) {
      // let scroll = scrollTop - this.scrollHeight;
      // this.scrollHeight = scrollTop;
      // if (scroll < 0 && document.body.offsetHeight - this.scrollHeight > 650) {
      //   this.articleDirectoryClassName = "article-directory-fixed";
      // } else if (scroll >= 0) {
      //   let element1 = $("#article-content").height();
      //   let element2 = $("#articleDirectory").offset().top;
      //   if (element1 <= element2 + 320.3) {
      //     this.articleDirectoryClassName = "article-directory";
      //   }
      // }
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

#articleDirectory {
  font-size: 14px;
  padding-right: 20px;
  /*background-color: var(--bgColor);*/
  text-align: left;
  color: var(--fontColor);
  margin-left: 3%;
}

.article-directory {
  position: absolute;
  bottom: 0;
}

.article-directory-fixed {
  position: fixed;
}

.side-drawer-btn {
  position: fixed;
  right: 0;
  top: 200px;
  width: 30px;
  height: 40px;
  line-height: 40px;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.5s;
  background: var(--bgColor);
  color: var(--fontColor);
  font-size: 28px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, .1);
}

.side-drawer-show-btn {
  transform: translateX(-150px);
}

.drawer-content {
  text-align: left;
  font-size: 14px;
  color: var(--fontColor);
}

.drawer-content >>> .el-drawer {
  background-color: var(--bgColor) !important;
}
</style>
