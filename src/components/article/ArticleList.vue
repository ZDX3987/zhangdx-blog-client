<template>
  <div class="list-content">
    <ul v-if="!isEmpty" class="article-ul">
      <li v-for="(article, index) of articleList" :key="index">
        <article-list-item :article="article"/>
      </li>
      <ul class="article-ul" v-if="isLoading">
        <li v-for="i of emptyListLength" :key="i">
          <article-list-skeleton/>
        </li>
      </ul>
      <li>
        <div class="load-more">
          <a v-if="!listEnd" @click="loadMoreArticle">点击加载更多</a>
          <p v-if="listEnd">已经到底了...</p>
        </div>
      </li>
    </ul>
    <empty-list v-else/>
  </div>
</template>

<script>
import ArticleListSkeleton from '../skeleton/ArticleListSkeleton';
import ArticleListItem from './ArticleListItem';
import EmptyList from '../common/EmptyList';

export default {
  name: "ArticleList",
  data() {
    return {
      articleList: [],
      queryStatus: 2,
      sort: "DESC",
      pageSize: 15,
      pageIndex: 0,
      isLoading: true,
      listEnd: false,
      emptyListLength: 1,
      isEmpty: false
    };
  },
  components: {
    ArticleListSkeleton,
    ArticleListItem,
    EmptyList
  },
  props: {
    queryCateId: 0
  },
  watch: {
    queryCateId(value) {
      this.queryArticle(0);
    }
  },
  created() {
    this.queryArticle(0);
  },
  methods: {
    loadMoreArticle() {
      this.queryArticle(++this.pageIndex);
    },
    queryArticle(pageIndex) {
      this.isLoading = true;
      if (!pageIndex) {
        this.articleList = [];
      }
      this.$api.articleApi
          .getArticleByPage(this.pageSize, pageIndex, this.queryStatus, this.sort, this.queryCateId)
          .then((res) => {
            if (res.data.totalCount === 0) {
              this.isEmpty = true;
              return;
            }
            this.articleList = this.articleList.concat(res.data.elements);
            if (res.data.totalCount === this.articleList.length) {
              this.listEnd = true;
            }
            this.isLoading = false;
          })
          .catch((error) => this.$message.error("文章获取失败，请稍后重试"));
    },
  },
};
</script>

<style scoped>
.list-content {
  width: 100%;
  background-color: var(--bgColor);
}

.article-ul {
  list-style: none;
  width: 100%;
  padding: 0;
}

.article-ul li {
  padding: 20px 20px;
  border-bottom: 1px solid var(--borderColor);
}

.load-more a {
  text-decoration: none;
  cursor: pointer;
}

.load-more a, p {
  color: var(--aBg);
}
</style>
