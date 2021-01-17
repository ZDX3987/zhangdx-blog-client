<template>
  <el-row>
    <el-col :md="17">
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
        <el-image
          class="article-coverImg"
          :src="article.coverImg"
          fit="scale-down"
        ></el-image>
        <div id="showText" ref="showText" class="article-text"></div>
      </div>
    </el-col>
    <el-col :md="7" class="hidden-sm-and-down">
      <div
        id="articleDirectory"
        :class="articleDirectoryClassName"
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
      scrollHeight: 0,
      articleDirectoryClassName: "article-directory-fixed",
    };
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
          console.log(newVal)
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
              VditorPreview.outlineRender(
                that.$refs.showText,
                that.$refs.articleDirectory
              );
              that.outlineRender(that.$refs.articleDirectory)
              that.enableStyle();
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
      this.handleTrackDirectory(scrollTop);
      this.handleFixedDirectory(scrollTop);
    },
    handleTrackDirectory(scrollTop) {
      let that = this;
      $('#showText :header').each(function () {
        let top = $(this).offset().top - scrollTop;
        if (top < 20 && top > -20) {
          that.enableStyle($(this)[0].id);
        } else if (top < 200 && top > 20) {
          that.disableStyle($(this)[0].id)
        }
      })
    },
    handleFixedDirectory(scrollTop) {
      let scroll = scrollTop - this.scrollHeight;
      this.scrollHeight = scrollTop;
      if (scroll < 0 && document.body.offsetHeight - this.scrollHeight > 650) {
        this.articleDirectoryClassName = "article-directory-fixed";
      } else if (scroll >= 0) {
        let element1 = $("#article-content").height();
        let element2 = $("#articleDirectory").offset().top;
        if (element1 <= element2 + 320.3) {
          this.articleDirectoryClassName = "article-directory";
        }
      }
    },
    outlineRender(html) {
      console.log(html)
    },
    enableStyle(headerId) {
      this.$refs['articleDirectory'].childNodes.forEach(node => {
        if (node.dataset.id === headerId) {
          node.style.background = 'rgba(255, 255, 255, 0.5)'
          node.style.color = '#55bd66'
        } else {
          node.style.background = ''
          node.style.color = '#333'
        }
      });
    },
    disableStyle(headerId) {
      this.$refs['articleDirectory'].childNodes.forEach((node, index, list) => {
        if (node.dataset.id === headerId) {
          node.style.background = ''
          node.style.color = '#333'
          if (index !== 0) {
            list[index - 1].style.background = 'rgba(255, 255, 255, 0.5)';
            list[index - 1].style.color = '#55bd66'
          }
        }
      });
    }
  }
};
</script>

<style scoped>
.article-content {
  background-color: var(--bgColor);
  padding: 40px;
  text-align: left;
  margin-right: 3%;
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

.article-coverImg {

}

.article-text {
  color: var(--articleText);
}

#articleDirectory {
  font-size: 14px;
  padding-right: 20px;
  /*background-color: var(--bgColor);*/
  height: 500px;
  text-align: left;
  color: var(--fontColor);
}
.article-directory {
  position: absolute;
  bottom: 0;
}

.article-directory-fixed {
  position: fixed;
}
</style>
