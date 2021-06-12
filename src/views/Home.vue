<template>
  <div class="layout">
    <el-row class="index-content">
      <el-col :xl="{span: 10, offset: 5}" :lg="{span: 13, offset: 3}" :md="{span: 14, offset: 2}"
              :xs="{span: 22, offset: 1}" :sm="{span: 22, offset: 1}">
        <ArticleList :query-cate-id="0"/>
      </el-col>
      <el-col :xl="4" :lg="5" :md="6" :xs="{span: 22, offset: 1}" :sm="{span: 22, offset: 1}" class="ml-lg-3">
        <cate-cloud/>
        <topic-side/>
        <web-site-info/>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import ArticleList from "../components/article/ArticleList";
import CateCloud from "../components/home/CateCloud";
import TopicSide from "../components/home/TopicSide";
import WebSiteInfo from '../components/home/WebSiteInfo';

export default {
  name: "Home",
  data() {
    return {}
  },
  components: {
    ArticleList,
    CateCloud,
    TopicSide,
    WebSiteInfo
  }
}
</script>

<style scoped>
.index-content {
  padding-top: 20px;
  padding-bottom: 20px;
}
</style>
