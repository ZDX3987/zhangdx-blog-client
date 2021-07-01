<template>
  <div class="cate-content">
    <el-row type="flex" justify="center">
      <el-col :lg="10" :md="20" :xs="22" :sm="22">
        <el-row class="cate-title">
          <el-col :span="20">
            <h4>{{ currentCate.cateName }}</h4>
          </el-col>
          <el-col :span="4">
            <div class="article-total">{{ '共' + articleTotal + '篇' }}</div>
          </el-col>
        </el-row>
        <el-row class="child-cate" v-if="childCate.length !== 0">
          <el-col>
            <ul>
              <li v-for="cate of childCate" :key="cate.id" :class="currentCate.id === cate.id
           ? 'active-cate-li' : ''">
                <router-link :to="{name: 'CateList', params: {id: cate.id}}">
                  {{ cate.cateName + '(' + cate.articleCount + ')' }}
                </router-link>
              </li>
            </ul>
          </el-col>
        </el-row>
        <el-row class="divider-margin"></el-row>
        <article-list :query-cate-id="$route.params.id"/>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import ArticleList from "../components/article/ArticleList";

export default {
  name: "CateList",
  data() {
    return {
      currentCate: {},
      articleTotal: 0,
      childCate: []
    }
  },
  components: {
    ArticleList,
  },
  created() {
    this.queryInit();
  },
  methods: {
    queryInit() {
      let cateId = this.$route.params.id;
      let categoryHttp = this.$api.categoryApi.getCategoryById(cateId);
      let childCateHttp = this.$api.categoryApi.getChildCateById(cateId);
      Promise.all([categoryHttp, childCateHttp]).then(res => {
        this.currentCate = res[0].data;
        this.childCate = res[1].data;
        this.$route.meta.title = this.currentCate.cateName;
        this.articleTotal = this.currentCate.articleCount;
      }).catch(error => this.$message.error(error.msg))
    }
  }
}
</script>

<style scoped>
.cate-content {
  padding-bottom: 20px;
}

.cate-title {
  background-color: var(--bgColor);
  height: 50px;
  line-height: 50px;
  padding: 0 20px;
  color: var(--subFontColor);
}

.cate-title h4 {
  text-align: left;
  line-height: 50px;
}

.article-total {
  font-weight: 400;
  color: var(--subFontColor);
  font-size: 14px;
  text-align: right;
}

.child-cate {
  height: 50px;
  background-color: var(--bgColor);
  padding: 10px 0;
  border-top: 1px solid var(--borderColor);
}

.child-cate ul {
  list-style: none;
}

.child-cate li {
  float: left;
  padding: 3px 5px;
  margin: 0 20px;
}

.child-cate a {
  color: var(--aBg);
  font-size: 13px;
  text-decoration: none;
  transition: all 0.5s;
}

.child-cate li:not(.active-cate-li):hover a {
  color: var(--mainThemeColor);
}

.active-cate-li {
  background-color: var(--mainThemeColor);
}

.active-cate-li a {
  color: var(--aBg);
}

.divider-margin {
  margin-bottom: 10px;
}
</style>
