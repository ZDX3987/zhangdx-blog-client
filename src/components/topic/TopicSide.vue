<template>
  <div class="topic-side-content">
    <div class="topic-side-header">
      <span><i class="fa fa-coffee"></i>&nbsp;最新专题</span>
      <el-link :underline="false">更多>></el-link>
    </div>
    <div class="topic-side-body">
      <ul v-if="topicList.length !== 0">
        <li v-for="topic of topicList" :key="topic.id">
          <p>{{ topic.title }}</p>
        </li>
      </ul>
      <div v-if="topicList.length == 0" class="no-topic">
        <p>暂无专题</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TopicSide",
  data() {
    return {
      topicList: [],
      pageSize: 5
    }
  },
  created() {
    // this.query(0);
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
.topic-side-content {
  width: 96%;
  background-color: var(--bgColor);
  margin-left: 4%;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, .1);
}

.topic-side-header {
  height: 50px;
  border-bottom: 1px solid var(--borderColor);
  font-size: 18px;
  line-height: 50px;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  color: var(--fontColor);
}

.topic-side-body {
  padding: 0 20px;
  min-height: 300px;
}

.no-topic {
  height: 300px;
  padding: 125px 0;
  color: var(--fontColor);
  font-size: 14px;
}
</style>
