<template>
  <div class="update-list">
    <el-timeline>
      <el-timeline-item v-for="log of updateLogList" :key="log.id" :timestamp="dateFormat(log.updateDate)" placement="top">
        <el-card class="log-card">
          <h4>{{log.title}}</h4>
          <p>ZHANGDX 提交于 {{log.updateDate | dateFormat}}</p>
          <div :id="'update-log-' + log.id" :ref="'update-log-' + log.id" class="log-text"></div>
        </el-card>
      </el-timeline-item>
    </el-timeline>
    <div class="load-more">
      <el-button type="text" :disabled="loading || updateLogList.length === total" @click="query(++pageIndex)">{{ loading ? '加载中...' : '加载更多' }}
      </el-button>
    </div>
  </div>
</template>

<script>
import VditorPreview from "vditor/dist/method.min";
import "vditor/dist/index.css";

export default {
  name: "UpdateLogList",
  data() {
    return {
      pageSize: 3,
      pageIndex: 0,
      total: 0,
      loading: false,
      updateLogList: [],
      queryStatus: [3]
    }
  },
  created() {
    VditorPreview.mermaidRender(document);
    this.query();
  },
  methods: {
    query() {
      this.loading = true;
      this.$api.updateLogApi.getUpdateLogByPage(this.pageSize, this.pageIndex, this.queryStatus).then(res => {
        this.updateLogList = this.updateLogList.concat(res.data.elements);
        this.total = res.data.totalCount;
        this.renderUpdateLog(res.data.elements);
        this.pageIndex++;
        this.loading = false;
      }).catch(() => this.$message.error('更新日志查询失败'));
    },
    renderUpdateLog(updateLog) {
      this.$nextTick(() => {
        updateLog.forEach(log => {
          VditorPreview.preview(this.$refs['update-log-' + log.id][0], log.content);
        });
      });
    },
    dateFormat(date) {
      return this.$options.filters['dateFormat'](date, 'yyyy/MM/DD')
    }
  }
}
</script>

<style scoped>
.update-list {
  background-color: var(--bgColor);
  text-align: left;
  padding: 30px 50px;
  margin-bottom: 30px;
  min-height: 50vh;
}

.load-more {
  text-align: center;
  color: var(--mainThemeColor);
}

.log-card {
  background-color: var(--bgColor);
  border-color: var(--borderColor);
  color: var(--fontColor);
}

.log-card a {
  color: var(--fontColor);
  text-decoration: none;
  transition: all 0.5s;
}
.log-text {
  color: var(--fontColor);
}
</style>