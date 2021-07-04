<template>
  <div class="archives-timeline">
    <timeline-skeleton v-if="loading"></timeline-skeleton>
    <el-collapse v-else class="timeline-collapse" :value="0" :accordion="true">
      <el-collapse-item v-for="(value, key, index) of timelineMap" :key="key"
                        :title="key + '（' + getYearCount(key) + '）' " :name="index"
                        class="timeline-title">
        <div class="timeline-item" :class="queryDateStr === timeline.timeline ? 'timeline-item-active' : ''"
             v-for="timeline of value" :key="timeline.timeline"
             @click="selectTimeline(timeline.timeline)">
          {{ timeline.timeline + '（' + timeline.count + '）' }}
        </div>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script>
import TimelineSkeleton from "./TimelineSkeleton";

export default {
  name: "ArchivesTimeline",
  data() {
    return {
      timelineMap: Map,
      queryDateStr: '',
      loading: false
    }
  },
  components: {
    TimelineSkeleton
  },
  created() {
    this.queryTimeline();
  },
  methods: {
    queryTimeline() {
      this.loading = true;
      this.$api.articleApi.getArchivesTimeline().then(result => {
        this.timelineMap = result.data;
        this.selectDefaultQueryDateStr();
      }).catch(error => this.$message.error('时间线查询失败')).finally(() => this.loading = false);
    },
    getYearCount(key) {
      return this.timelineMap[key].reduce((prev, current) => {
        return prev + current.count;
      }, 0);
    },
    selectTimeline(dateStr) {
      this.queryDateStr = dateStr;
      this.$emit('query-date', dateStr);
    },
    selectDefaultQueryDateStr() {
      if (!Object.keys(this.timelineMap).length) {
        return;
      }
      let queryDateStr = Object.values(this.timelineMap).flatMap(timeline => timeline).sort()[0];
      this.selectTimeline(queryDateStr.timeline);
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

.timeline-item-active {
  color: var(--mainThemeColor);
}
</style>
