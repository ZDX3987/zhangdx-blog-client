<template>
  <div class="search-result">
    <el-row type="flex" justify="center">
      <el-col :lg="10" :md="20" :xs="22" :sm="22">
        <article-single-list :article-list="searchResult.elements" :loading="loading"/>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import ArticleSingleList from '../article/ArticleSingleList';

export default {
  name: "SearchResult",
  data() {
    return {
      searchResult: {
        elements: []
      },
      keyword: '',
      pageIndex: 0,
      pageSize: 15,
      loading: false
    }
  },
  components: {
    ArticleSingleList
  },
  mounted() {
    this.loading = true;
    let keyword = this.$route.params.keyword;
    this.$route.meta.title = '”' + keyword + '“ 的搜索结果';
    this.$api.searchApi.search(keyword, this.pageIndex, this.pageSize).then(result => {
      this.searchResult = result.data;
      document.title = '”' + keyword + '“ 的搜索结果 - ZHANGDX的博客';
      this.loading = false;
      this.$message.success('查询成功');
    }).catch(() => this.$message.error('查询失败'));
  }
}
</script>

<style scoped>
.search-result {

}
</style>