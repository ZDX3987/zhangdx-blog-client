<template>
  <div class="directory-content-fixed" ref="directoryContent">
    <side-catalog v-if="directoryShow" v-bind="catalogProps" class="directory-content-base ml-5">
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
        directoryContent.className = 'directory-content';
        directoryContent.style.top = (articleContentOffsetHeight - currentHeight) + 'px';
      } else {
        directoryContent.className = 'directory-content-fixed';
        directoryContent.style.top = 'auto';
      }
    }
  }
}
</script>

<style scoped>
.directory-content-fixed {
  position: fixed;
}

.directory-content {
  position: relative;
}

.directory-content-base {
  font-size: 14px;
  color: var(--fontColor);
  text-align: left;
}

</style>