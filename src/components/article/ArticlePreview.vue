<template>
  <div class="article-content">
    <div>{{$route.meta.title}}</div>
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
    <div id="articleDirectory" ref="articleDirectory"></div>
    <div id="showText" ref="showText" class="article-text"></div>
  </div>
</template>

<script>
import VditorPreview from 'vditor/dist/method.min'
import 'vditor/dist/index.css'

export default {
  name: "ArticlePreview",
  data() {
    return {
      articleId: '',
      article: ''
    }
  },
  created() {
    VditorPreview.mermaidRender(document);
    this.articleId = this.$route.params.id;
    this.$api.articleApi
      .getArticleById(this.articleId)
      .then((res) => {
        this.article = res.data;
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
          VditorPreview.outlineRender(this.$refs.showText, this.$refs.articleDirectory);
          console.log(this.$refs.articleDirectory)
          if (this.$refs.articleDirectory.innerText.trim() !== '') {
            this.$refs.articleDirectory.style.display = 'block'
            this.initOutline()
          }
        } else {
          this.$refs.showText.innerHTML = article.text;
        }
      })
    },
    initOutline() {
      const headingElements = []
      Array.from(document.getElementById('preview').children).forEach((item) => {
        if (item.tagName.length === 2 && item.tagName !== 'HR' && item.tagName.indexOf('H') === 0) {
          headingElements.push(item)
        }
      })

      let toc = []
      window.addEventListener('scroll', () => {
        const scrollTop = window.scrollY
        toc = []
        headingElements.forEach((item) => {
          toc.push({
            id: item.id,
            offsetTop: item.offsetTop,
          })
        })

        const currentElement = document.querySelector('.vditor-outline__item--current')
        for (let i = 0, iMax = toc.length; i < iMax; i++) {
          if (scrollTop < toc[i].offsetTop - 30) {
            if (currentElement) {
              currentElement.classList.remove('vditor-outline__item--current')
            }
            let index = i > 0 ? i - 1 : 0
            document.querySelector('div[data-id="' + toc[index].id + '"]').classList.add('vditor-outline__item--current')
            break
          }
        }
      })
    }
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
