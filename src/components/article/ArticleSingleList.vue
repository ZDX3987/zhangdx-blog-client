<template>
  <div class="list-content">
    <ul class="article-ul" v-if="loading">
      <li v-for="index of emptyListLength" :key="index">
        <article-list-skeleton/>
      </li>
    </ul>
    <empty-list v-else-if="articleList.length === 0"/>
    <ul class="article-ul" v-else>
      <li v-for="(article, index) of articleList" :key="index">
        <article-list-item :article="article"/>
      </li>
    </ul>
  </div>
</template>

<script>
import ArticleListSkeleton from '../skeleton/ArticleListSkeleton';
import ArticleListItem from './ArticleListItem';
import EmptyList from '../common/EmptyList';

export default {
  name: "ArticleSingleList",
  data() {
    return {
      emptyListLength: 3,
      errorImgUrl: '/static/images/notfound.gif'
    }
  },
  props: {
    articleList: Array,
    loading: false
  },
  components: {
    ArticleListSkeleton,
    ArticleListItem,
    EmptyList
  }
}
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
</style>
