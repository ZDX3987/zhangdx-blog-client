<template>
  <div class="topic-card p-3">
    <div class="topic-title clearfix">
      <router-link class="d-block mb-3 text-truncate" :to="{name: 'TopicItem', params: {id: topicItem.id}}">
        {{ topicItem.title }}
      </router-link>
      <span class="float-left">更新于：{{ topicItem.updateDate | dateFormat("yyyy-MM-DD") }}</span>
      <span class="float-right"><i class="fa fa-heart-o"></i>&nbsp;{{ topicItem.praise }}</span>
      <span class="float-right mr-1"><i class="el-icon-tickets"></i>&nbsp;{{ topicItem.articleCount }}</span>
    </div>
    <ul class="topic-article mt-3 pt-3 pl-4">
      <li class="mb-1" v-for="article of topicItem.articleList">
        <router-link class="d-block text-truncate float-left"
                     :to="{ name: 'ArticlePreview', params: { id: article.id } }">
          {{ article.title }}
        </router-link>
        <div class="article-cate float-right text-truncate">
          <span v-for="(tag, index) of article.categories" :key="tag.id">
          {{ (index != 0 ? ' / ' : '') + tag.cateName }}
        </span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "TopicCard",
  props: {
    topicItem: null
  }
}
</script>

<style scoped>
.topic-card {
  background-color: var(--bgColor);
  transition: all 0.5s;
  text-align: left;
}

.topic-card:hover {
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, .1);
  transform: translateY(-5px);
}

.topic-title a {
  font-size: 20px;
  text-decoration: none;
  color: var(--articleTitle);
  transition: all 0.5s;
  max-width: 100%;
}

.topic-card a:hover {
  color: var(--mainThemeColor);
}

.topic-title span {
  color: var(--subFontColor);
  font-size: 14px;
}

.topic-article {
  border-top: 1px solid var(--borderColor);
}

.topic-article li a {
  text-decoration: none;
  color: var(--aBg);
  transition: all 0.5s;
  font-size: 15px;
  max-width: 65%;
}

.topic-article .article-cate {
  max-width: 30%;
  font-size: 14px;
  color: var(--aBg);
}
</style>
