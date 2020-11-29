<template>
  <div>
    <el-row>
      <el-col>
        <div class="cate-title">
          <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item
              v-for="route in $route.matched"
              :key="route.name"
              :to="{ name: route.name }">{{ route.meta.title }}
            </el-breadcrumb-item>
          </el-breadcrumb>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "CateList",
  data() {
    return {
      currentCate: null,
    }
  },
  created() {
    this.currentCate = this.$route.params.tag;
    this.$route.meta.title = this.currentCate.cateName +
      ' （共' + this.currentCate.articleCount + '篇）';
  }
}
</script>

<style scoped>
.cate-title {
  width: 100%;
  height: 50px;
  background-color: #FFF;
}
</style>
