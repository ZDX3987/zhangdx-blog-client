<template>
  <div class="topic-content">
    <el-row type="flex" justify="center">
      <el-col :lg="16" :md="20" :xs="22" :sm="22">
        <el-row>
          <el-col :md="{span: 11, offset: 0}" :xs="{span: 22, offset: 1}"
                  :sm="{span: 22, offset: 1}" class="mb-3 mr-md-3"
                  v-for="topic of topicList">
            <topic-card :topic-item="topic"></topic-card>
          </el-col>
        </el-row>
        <div v-if="loading" class="spinner-grow" role="status">
          <span class="sr-only">Loading...</span>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import TopicCard from "./TopicCard";

export default {
  name: "TopicList",
  data() {
    return {
      loading: false,
      topicList: [
        {
          id: 1,
          title: '测试标题1',
          updateDate: '2021年2月5日',
          praise: 60,
          articleCount: 5,
          articleList: [
            {
              id: 1,
              title: '测试文章标题',
              categories: [{id: 1, cateName: '测试分类'}]
            },
            {
              id: 1,
              title: '测试文章标题',
              categories: [{id: 1, cateName: '测试分类'}]
            },
            {
              id: 1,
              title: '测试文章标题',
              categories: [{id: 1, cateName: '测试分类'}]
            }
          ]
        },
        {
          id: 2,
          title: '测试标题2',
          updateDate: '2021年2月5日',
          praise: 60,
          articleCount: 5,
          articleList: []
        }
      ]
    }
  },
  components: {
    TopicCard
  },
  methods: {}
}
</script>

<style scoped>
.topic-content {
  padding-bottom: 20px;
}
</style>