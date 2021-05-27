<template>
  <el-row class="search-content" type="flex" justify="center">
    <el-col :xl="8" :lg="10" :md="12" :xs="22" :sm="22">
      <div class="search-form align-middle">
        <input type="text" v-model="searchForm.searchWord" class="search-input" placeholder="请输入关键字" @keyup.enter="submitSearch()"></input>
        <button type="button" class="search-btn" @click="submitSearch()"><i class="fa fa-search"></i></button>
      </div>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: "Search",
  data() {
    return {
      searchForm: {
        searchWord: '',
      },
      searchShowed: true
    }
  },
  methods: {
    submitSearch() {
      this.closeSearch();
      this.$router.push({name: 'SearchResult', query: {keyword: this.searchForm.searchWord}});
    },
    closeSearch() {
      this.searchShowed = false;
      this.$store.commit('showSearchBar', this.searchShowed);
    }
  }
}
</script>

<style scoped>
.search-content {
  height: 80px;
  background-color: var(--searchBg);
  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.1);
}
.search-form {
  width: 100%;
  height: 60px;
  margin: 15px 0;
}
.search-input {
  width: 70%;
  height: 45px;
  border: 1px solid var(--borderColor);
  padding-left: 2%;
  background-color: var(--bgColor);
}
.search-input:focus {
  border: 1px solid var(--mainThemeColor);
}
.search-btn {
  width: 13%;
  height: 45px;
  border: none;
  background-color: var(--mainThemeColor);
  color: var(--btnText);
  margin-left: -2%;
  transition: all 0.5s;
}
.search-btn:hover {
  background-color: #68cd79;
}
</style>