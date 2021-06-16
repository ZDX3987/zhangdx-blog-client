<template>
  <div class="list-content">
    <ul class="article-ul">
      <lazy-component v-for="(article, index) of articleList" :key="index">
        <li>
          <article-list-item :article="article" />
        </li>
      </lazy-component>
      <ul class="article-ul" v-if="isLoading">
        <li v-for="i of emptyListLength" :key="i">
          <article-list-skeleton />
        </li>
      </ul>
      <li>
        <div class="load-more">
          <a v-if="!listEnd" @click="loadMoreArticle">点击加载更多</a>
          <p v-if="listEnd">已经到底了...</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import ArticleListSkeleton from '../skeleton/ArticleListSkeleton';
import ArticleListItem from './ArticleListItem';

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
      emptyListLength: 3,
    };
  },
  components: {
    ArticleListSkeleton,
    ArticleListItem,
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
      let formData = {
        pageSize: this.pageSize,
        pageIndex: pageIndex,
        articleStatus: this.queryStatus,
        sort: this.sort,
        cateId: this.queryCateId
      };
      this.$api.articleApi
          .getArticleByPage(formData)
          .then((res) => {
            this.articleList = pageIndex ? this.articleList.concat(res.data.elements)
                : res.data.elements;
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
