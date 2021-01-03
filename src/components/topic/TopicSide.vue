<template>
  <div class="topic-side-content">
    <div class="topic-side-header">
      <span>最新专题</span>
      <el-link type="success" :underline="false">更多>></el-link>
    </div>
    <div class="topic-side-body">
      <ul v-if="topicList.length !== 0">
        <li>
          <p>Java集合全解析</p>
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
      topicList: []
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
