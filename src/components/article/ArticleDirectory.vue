<template>
  <div :class="changeClassName" class="directory-content-base" ref="directoryContent">
    <side-catalog v-if="directoryShow" v-bind="catalogProps">
      <template #default="{level, isActive}">
        <span v-if="isActive" class="iconfont iconchichi"></span>
      </template>
    </side-catalog>
  </div>
</template>

<script>
import SideCatalog from 'vue-side-catalog'
import 'vue-side-catalog/lib/vue-side-catalog.css'

export default {
  name: "ArticleDirectory",
  data() {
    return {
      catalogProps: {container: '#showText', activeColor: '#55bd66', title: '目录：'},
      changeClassName: 'directory-content-fixed',
    }
  },
  props: {
    directoryShow: Boolean
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll, true);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll, true);
  },
  components: {
    SideCatalog
  },
  methods: {
    handleScroll() {
      let scrollTop =
          window.pageYOffset ||
          document.documentElement.scrollTop ||
          document.body.scrollTop;
      let directoryContent = this.$refs.directoryContent;
      let currentHeight = directoryContent.offsetHeight;
      let articleContentOffsetHeight = $('#article-content')[0].offsetHeight;
      if (scrollTop >= articleContentOffsetHeight - currentHeight) {
        this.changeClassName = 'directory-content';
        directoryContent.style.top = (articleContentOffsetHeight - currentHeight) + 'px';
      } else {
        this.changeClassName = 'directory-content-fixed';
        directoryContent.style.top = 'auto';
      }
    }
  }
}
</script>

<style scoped>
@import "../../../static/icon/iconfont/iconfont.css";

.directory-content-base {
  font-size: 14px;
  color: var(--fontColor);
  text-align: left;
}

.directory-content-fixed {
  position: fixed;
}

.directory-content {
  position: relative;
}

</style>