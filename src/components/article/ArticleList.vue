<template>
  <div class="list-content">
    <ul v-if="!isLoading" class="article-ul">
      <li v-for="article of articleList" :key="article.id">
        <div class="article-item">
          <el-row>
            <el-col :span="8" class="item-left">
              <a href="#">
                <el-image :src="article.imgUrl"></el-image>
              </a>
            </el-col>
            <el-col :span="16" class="item-right">
              <a href="#" class="item-title">{{ article.title }}</a>
              <p class="item-text">{{ article.text }}</p>
              <div class="item-date">
                <i class="fa fa-calendar-o" aria-hidden="true"></i>&nbsp;
                {{ article.createDate }}
              </div>
            </el-col>
          </el-row>
        </div>
      </li>
      <li>
        <div class="load-more">
          <a @click="loadMoreArticle">点击加载更多</a>
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
      articleList: [
        {
          id: 1,
          title: '这是标题',
          text: '这是正文部分截取',
          imgUrl: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg',
          createDate: '2020年11月14日'
        }
      ],
      pageSize: 15,
      isLoading: false,
      src: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg'
    };
  },
  methods: {
    loadMoreArticle() {
      this.articleList.push(this.articleList[0]);
    },
  }
};
</script>

<style scoped>
.list-content {
  width: 100%;
  background-color: #FFF;
}

.article-ul {
  list-style: none;
  width: 100%;
  padding: 0;

}

.article-ul li {
  padding: 20px 20px;
  border-bottom: 1px solid rgb(220, 223, 230);
}

.article-item {
}

.item-left {
  transition: all 0.5s;
  opacity: 1;
}

.item-left:hover {
  opacity: 0.8;
}

.item-right {
  padding-left: 2%;
}

.item-title {
  display: block;
  text-align: left;
  font-size: 18px;
  text-decoration: none;
  color: #333;
  transition: all 0.5s;
  overflow: hidden;
}

.item-title:hover {
  color: rgb(85, 189, 102);
}

.item-text {
  text-align: justify;
  font-size: 13px;
  margin: 10px 0;
  height: 50px;
  overflow: hidden;
  font-weight: 300;
}

.item-date {
  font-weight: 300;
  font-size: 12px;
  text-align: left;
  margin-top: 20px;
}

.load-more a {
  text-decoration: none;
  cursor: pointer;
}
</style>
