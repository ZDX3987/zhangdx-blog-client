<template>
  <div>
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
      articleTotal: 0
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
      this.$api.categoryApi.getCategoryById(cateId).then(res => {
        this.currentCate = res.data;
        this.$route.meta.title = this.currentCate.cateName;
        this.articleTotal = this.currentCate.articleCount;
      }).catch(error => this.$message.error(error.msg))
    }
  }
}
</script>

<style scoped>
.cate-title {
  width: 100%;
  height: 50px;
  background-color: #FFF;
  margin-bottom: 30px;
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
</style>
