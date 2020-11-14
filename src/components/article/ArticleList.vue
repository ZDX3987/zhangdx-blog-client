<template>
  <div class="list-content">
    <ul v-if="!isLoading" class="article-ul">
      <li v-for="i of 3" :key="i">
        <div class="article-item">
          <el-row>
            <el-col :span="8" class="item-left">
              <el-image :src="src"></el-image>
            </el-col>
            <el-col :span="16" class="item-right">
              <p>{{ "这是标题" }}</p>
              <p>{{ "这是正文部分截取" }}</p>
              <span>{{ "2020 - 11 - 14" }}</span>
            </el-col>
          </el-row>
        </div>
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
  padding: 0;

}

.article-ul li {
  padding: 20px 20px;
  border-bottom: 1px solid rgb(220,223,230);
}

.article-item {

}

.item-left {
  width: 200px;
}

</style>
