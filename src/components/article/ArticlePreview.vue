<template>
  <div class="article-preview">
    <el-row type="flex" justify="center">
      <el-col :md="15" :xs="22" :sm="22">
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
        <div id="article-content" class="article-content" v-if="!isLoading">
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
          <el-image v-if="article.coverImg"
                    class="article-coverImg"
                    :src="article.coverImg"
                    fit="scale-down">
            <div slot="error">
              <el-image :src="errorImgUrl" fit="scale-down"></el-image>
            </div>
          </el-image>
          <div id="showText" ref="showText" class="article-text" v-viewer.rebuild></div>
        </div>
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
      errorImgUrl: '/static/images/notfound.gif'
    };
  },
  components: {
    ArticleDirectory
  },
  created() {
    VditorPreview.mermaidRender(document);
    this.articleId = this.$route.params.id;
    this.$api.articleApi
        .getArticleById(this.articleId)
        .then((res) => {
          this.article = res.data;
          this.$route.meta.title = this.article.title;
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
            speech: {enable: true},
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

.article-text {
  color: var(--articleText);
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
