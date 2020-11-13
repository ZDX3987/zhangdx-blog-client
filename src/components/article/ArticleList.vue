<template>
  <div class="list-content">
    <ul v-if="!isLoading" class="article-ul">
      <li></li>
      <el-divider></el-divider>
    </ul>
    <ul v-if="isLoading" class="article-ul">
      <li v-for="i of 3" :key="i">
        <skeleton
          type="custom"
          :options="{ width: '100%', height: '100%' }"
          :childrenOption="[
            {
              type: 'card',
              rules: 'a, d, g',
              active: true,
              options: { width: '100%', height: '80%' },
            },
            { type: 'listcom', rules: 'b, c, e, f, h, i', active: true },
          ]"
        />
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "ArticleList",
  data() {
    return {
      articleList: [],
      pageSize: 15,
      isLoading: false,
    };
  },
};
</script>

<style scoped>
.list-content {
  width: 60%;
  background-color: #FFF;
}
.article-ul {
  list-style: none;
  width: 100%;
  padding: 20px 2%;
}
.article-ul li {
  height: 200px;
}
</style>