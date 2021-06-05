<template>
  <div :class="changeClassName" class="directory-content-base pl-5" ref="directoryContent">
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
  components: {
    SideCatalog
  },
  methods: {
    handleScroll(scrollTop, articleContentOffsetHeight) {
      let directoryContent = this.$refs.directoryContent;
      let currentHeight = directoryContent.offsetHeight;
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