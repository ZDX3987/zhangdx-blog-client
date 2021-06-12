<template>
  <div class="article-preview-title" ref="articlePreviewTitle">
    <el-row class="my-3">
      <el-col class="align-middle ml-4">
        <span class="directory-btn" @click="showArticleDirectory">目录</span>
      </el-col>
      <el-col>
      </el-col>
    </el-row>
    <el-collapse-transition>
      <div class="article-directory" v-show="directoryListShow">
        <side-catalog v-bind="catalogProps" v-if="directoryShow" class="directory-content-base ml-5 mb-3">
          <template #default="{level, isActive}">
            <span v-if="isActive" class="iconfont iconchichi"></span>
          </template>
        </side-catalog>
      </div>
    </el-collapse-transition>
  </div>
</template>

<script>
import SideCatalog from 'vue-side-catalog'
import 'vue-side-catalog/lib/vue-side-catalog.css'
import ArticleDirectory from './ArticleDirectory';

export default {
  name: "ArticlePreviewTitle",
  data() {
    return {
      oldScroll: 0,
      catalogProps: {container: '#showText', activeColor: '#55bd66'},
      directoryListShow: false
    }
  },
  components: {
    ArticleDirectory,
    SideCatalog
  },
  props: {
    directoryShow: Boolean
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll, true);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll, true);
  },
  methods: {
    showArticleDirectory() {
      this.directoryListShow = !this.directoryListShow;
    },
    handleScroll() {
      let scrollTop =
          window.pageYOffset ||
          document.documentElement.scrollTop ||
          document.body.scrollTop;
      if (scrollTop > 200) {
        let currentScrollHeight = scrollTop - this.oldScroll;
        this.oldScroll = scrollTop;
        if (currentScrollHeight < 0) {
          this.$refs.articlePreviewTitle.style.transform = 'translateY(-95px)';
        } else {
          this.$refs.articlePreviewTitle.style.transform = 'translateY(-159px)';
        }
        this.oldScroll = scrollTop;
      } else {
        this.directoryListShow = false;
        this.$refs.articlePreviewTitle.style.transform = 'translateY(-220px)';
      }
    }
  }
}
</script>

<style scoped>
@import "../../../static/icon/iconfont/iconfont.css";

.article-preview-title {
  background-color: var(--bgColor);
  width: 100%;
  position: fixed;
  z-index: 10;
  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.1);
  transform: translateY(-300px);
  transition: all 0.5s;
  text-align: left;
}

.article-directory {
  background-color: var(--bgColor);
}
.directory-btn {
  color: var(--mainThemeColor);
  cursor: pointer;
}
.directory-content-base {
  font-size: 16px;
  color: var(--fontColor);
  text-align: left;
}
</style>