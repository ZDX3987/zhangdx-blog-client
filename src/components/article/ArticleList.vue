<template>
  <div class="list-content">
    <ul v-if="!isLoading" class="article-ul">
      <li>
        <div>
          <el-image>
            <div slot="error" class="image-slot">
              <i class="el-icon-picture-outline"></i>
            </div>
          </el-image>
        </div>
        <el-divider></el-divider>
      </li>

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
      src: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg'
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
  padding: 20px 0;

}
.article-ul li {
  height: 200px;
}
</style>
