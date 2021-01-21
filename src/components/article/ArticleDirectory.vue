<template>
  <div>
    <side-catalog v-if="directoryShow" v-bind="catalogProps"></side-catalog>
  </div>
</template>

<script>
import SideCatalog from 'vue-side-catalog'
import 'vue-side-catalog/lib/vue-side-catalog.css'

export default {
  name: "ArticleDirectory",
  data() {
    return {
      catalogProps: {container: '#showText', activeColor: '#55bd66'}
    }
  },
  props: {
    directoryShow: Boolean
  },
  components: {
    SideCatalog
  },
}
</script>

<style scoped>

</style>