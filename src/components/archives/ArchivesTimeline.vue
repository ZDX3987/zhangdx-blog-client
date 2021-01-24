<template>
  <div class="archives-timeline">
    <el-collapse class="timeline-collapse" :value="0" :accordion="true">
      <el-collapse-item v-for="(value, key, index) of timelineMap" :key="key"
                        :title="key + '（' + getYearCount(key) + '）' " :name="index"
                        class="timeline-title">
        <div class="timeline-item" v-for="timeline of value" :key="timeline.timeline">
          {{ timeline.timeline + '（' + timeline.count + '）' }}
        </div>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script>
export default {
  name: "ArchivesTimeline",
  data() {
    return {
      timelineMap: Map
    }
  },
  created() {
    this.queryTimeline();
  },
  methods: {
    queryTimeline() {
      this.$api.articleApi.getArchivesTimeline().then(result => {
        this.timelineMap = result.data;
      }).catch(error => this.$message.error('时间线查询失败'));
    },
    getYearCount(key) {
      return this.timelineMap[key].reduce((prev, current) => {
        return prev + current.count;
      }, 0);
    }
  }
}
</script>

<style scoped>
.archives-timeline {
  margin-bottom: 30px;
}

.archives-timeline >>> .el-collapse-item__wrap,
.archives-timeline >>> .el-collapse-item__header {
  color: var(--fontColor);
  background-color: var(--bgColor);
  border-color: var(--borderColor);
  font-size: 20px;
}

.timeline-collapse {
  border-color: var(--borderColor);
}

.timeline-item {
  color: var(--fontColor);
  padding-left: 20%;
  margin-top: 10px;
  font-size: 16px;
  cursor: pointer;
}
</style>
