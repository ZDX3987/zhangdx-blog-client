<template>
  <el-row class="search-content" type="flex" justify="center">
    <el-col :xl="8" :lg="10" :md="12" :xs="22" :sm="22">
      <div class="search-form align-middle">
        <input type="text" v-model="searchForm.searchWord" class="search-input" placeholder="请输入关键字"
               @keyup.enter="submitSearch(searchForm.searchWord)"></input>
        <button type="button" class="search-btn" @click="submitSearch(searchForm.searchWord)"><i
            class="fa fa-search"></i></button>
      </div>
      <div class="hot-word-list text-justify">
        <span class="hot-word-label align-middle">热搜：</span>
        <a @click="submitSearch(word)" class="hot-word-item text-truncate d-inline-block align-middle"
           v-for="word of hotWordList" :key="word">{{ word }}</a>
        <i class="fa fa-refresh align-middle" @click="refreshHowWord()"></i>
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
      searchShowed: true,
      hotWordList: [],
      pageIndex: 0,
      pageSize: 3
    }
  },
  created() {
    this.queryHotWord(this.pageIndex);
  },
  methods: {
    submitSearch(keyword) {
      this.closeSearch();
      this.$router.push({name: 'SearchResult', query: {keyword: keyword}});
    },
    closeSearch() {
      this.searchShowed = false;
      this.$store.commit('showSearchBar', this.searchShowed);
    },
    queryHotWord(pageIndex) {
      this.$api.searchApi.getHotWord(pageIndex, this.pageSize).then(res => {
        let data = res.data;
        if (data.length === 0) {
          return;
        }
        this.hotWordList = data;
      }).catch(error => {
      })
    },
    refreshHowWord() {
      let randomPageIndex = Math.floor(Math.random() * 5);
      console.log(randomPageIndex)
      this.queryHotWord(randomPageIndex);
    }

  }
}
</script>

<style scoped>
.search-content {
  height: 100px;
  background-color: var(--searchBg);
  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.1);
}

.search-form {
  width: 100%;
  height: 55px;
  margin: 15px 0 0 0;
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

.hot-word-list {
  width: 80%;
  margin: 0 auto;
  font-size: 14px;
  color: var(--fontColor);
}

.hot-word-label {
}

.hot-word-item {
  margin: 0 3% 0 0;
  color: var(--mainThemeColor);
  cursor: pointer;
  max-width: 15%;
}

</style>