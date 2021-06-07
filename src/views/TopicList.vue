<template>
  <div class="topic-content">
    <el-row type="flex" justify="center">
      <el-col :lg="16" :md="20" :xs="22" :sm="22">
        <el-row>
          <el-col :md="{span: 11, offset: 0}" :xs="{span: 22, offset: 1}"
                  :sm="{span: 22, offset: 1}" class="mb-3 mr-md-3"
                  v-for="topic of topicList" :key="topic.id">
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
import TopicCard from "../components/topic/TopicCard";

export default {
  name: "TopicList",
  data() {
    return {
      loading: false,
      topicList: [],
      pageSize: 15
    }
  },
  components: {
    TopicCard
  },
  created() {
    this.query(0);
  },
  methods: {
    query(pageIndex) {
      let params = {
        pageIndex: pageIndex,
        pageSize: this.pageSize,
        sort: 'create_date'
      }
      this.$api.topicApi.getTopicByPage(params).then(result => {
        this.topicList = result.data.elements;
      }).catch(error => this.$message.error('查询失败'));
    }
  }
}
</script>

<style scoped>
.topic-content {
  padding-bottom: 20px;
}
</style>
