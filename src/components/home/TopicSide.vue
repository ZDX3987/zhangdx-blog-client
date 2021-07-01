<template>
  <div class="topic-side-content">
    <div class="topic-side-header">
      <span><i class="fa fa-coffee"></i>&nbsp;最新专题</span>
      <router-link :to="{name: 'TopicList'}">
        <el-link :underline="false">更多&gt;</el-link>
      </router-link>
    </div>
    <div class="topic-side-body mt-3">
      <ul v-if="topicList.length !== 0" class="pl-3">
        <li class="mb-3" v-for="topic of topicList" :key="topic.id">
          <router-link class="text-truncate d-inline-block" :title="topic.title"
                       :to="{ name: 'TopicItem', params: { id: topic.id } }">
            {{ topic.title }}
          </router-link>
          <span class="float-right text-truncate d-inline-block" :title="topic.updateDate | dateFormat('yyyy-MM-DD')">更新于：{{
              topic.updateDate | dateFormat("yyyy-MM-DD")
            }}</span>
        </li>
      </ul>
      <empty-list v-if="topicList.length === 0" :empty-size="10"/>
    </div>
  </div>
</template>

<script>
import EmptyList from '../common/EmptyList';

export default {
  name: "TopicSide",
  data() {
    return {
      topicList: [],
      pageSize: 5
    }
  },
  components: {
    EmptyList
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
.topic-side-content {
  background-color: var(--bgColor);
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, .1);
  margin-bottom: 20px;
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

.topic-side-header a {
  text-decoration: none;
}

.topic-side-body {
  padding: 0 20px;
  min-height: 300px;
  text-align: left;
}

.topic-side-body li {
  list-style: none;
}

.topic-side-body a {
  color: var(--aBg);
  text-decoration: none;
  transition: all 0.5s;
  font-size: 15px;
  width: 60%;
}

.topic-side-body a:hover {
  color: var(--mainThemeColor);
}

.topic-side-body span {
  color: var(--subFontColor);
  font-size: 14px;
  width: 40%;
}
</style>
