<template>
  <div class="search-result">
    <el-row type="flex" justify="center">
      <el-col :lg="14" :md="16" :xs="22" :sm="22">
        <article-single-list :article-list="searchResult.elements"/>
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
      pageSize: 15
    }
  },
  components: {
    ArticleSingleList
  },
  created() {
    let keyword = this.$route.params.keyword;
    this.$route.meta.title = '”' + keyword + '“ 的搜索结果';
    this.$api.searchApi.search(keyword, this.pageIndex, this.pageSize).then(result => {
      this.searchResult = result.data;
      this.$message.success('查询成功');
    }).catch(() => this.$message.error('查询失败'));
  }
}
</script>

<style scoped>

</style>