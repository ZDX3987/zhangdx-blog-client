<template>
  <div class="update-list">
    <el-timeline>
      <el-timeline-item v-for="log of updateLogList" :key="log.id" timestamp="2018/4/12" placement="top">
        <el-card class="log-card">
          <h4>{{log.title}}</h4>
          <p>ZHANGDX 提交于 {{log.updateDate}}</p>
        </el-card>
      </el-timeline-item>
    </el-timeline>
    <div class="load-more">
      <el-button type="text" :disabled="loading" @click="query(++pageIndex)">{{ loading ? '加载中...' : '加载更多' }}
      </el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "UpdateLogList",
  data() {
    return {
      pageSize: 3,
      pageIndex: 0,
      loading: false,
      updateLogList: []
    }
  },
  created() {
    this.query();
  },
  methods: {
    query() {
      this.loading = true;
      this.$api.updateLogApi.getUpdateLogByPage(this.pageSize, this.pageIndex).then(res => {
        this.updateLogList = res.elements;
        this.pageIndex++;
        this.loading = false;
      }).catch(() => this.$message.error('更新日志查询失败'));
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
</style>