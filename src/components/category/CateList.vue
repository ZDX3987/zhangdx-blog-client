<template>
  <div class="cate-content">
    <el-row class="cate-title">
      <el-col :span="20">
        <div>
          <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item
              v-for="route in $route.matched"
              :key="route.name"
              :to="{ name: route.name }">{{ route.meta.title }}
            </el-breadcrumb-item>
          </el-breadcrumb>
        </div>
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
    <el-row>
      <el-col>
        <ArticleList :query-cate-id="$route.params.id"/>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import ArticleList from "../article/ArticleList";

export default {
  name: "CateList",
  data() {
    return {
      currentCate: null,
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
  padding: 20px 10%;
}
.cate-title {
  width: 100%;
  height: 50px;
  background-color: #FFF;
  padding: 0 20px;
}

.cate-title .el-col {
  position: relative;
  top: 50%;
  transform: translateY(-50%);
}

.cate-title .el-col {
  text-align: right;
}

.article-total {
  font-weight: 400;
  color: #606266;
  font-size: 14px;
}

.child-cate {
  width: 100%;
  height: 50px;
  background-color: #FFF;
  padding: 10px 0;
  border-top: 1px solid rgb(220, 223, 230);
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
  color: #666;
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
  color: #FFF;
}

.divider-margin {
  margin-bottom: 30px;
}
</style>
