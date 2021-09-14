<template>
<div class="website-info">
  <div class="website-info-header">
    <span><i class="fa fa-server"></i>&nbsp;网站信息</span>
  </div>
  <div class="website-info-body p-4">
    在线人数：{{ websiteInfo.onlineCount }}
  </div>
</div>
</template>

<script>
export default {
  name: "WebSiteInfo",
  data() {
    return {
      websiteInfo: {}
    }
  },
  created() {
    this.$api.commonApi.getWebsiteInfo().then(res => this.websiteInfo = res.data).catch(error => this.$message.error(error));
  }
}
</script>

<style scoped>
.website-info {
  background-color: var(--bgColor);
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, .1);
}

.website-info-header {
  height: 50px;
  border-bottom: 1px solid var(--borderColor);
  font-size: 18px;
  line-height: 50px;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  color: var(--fontColor);
}

.website-info-body {
  text-align: left;
  font-size: 15px;
  color: var(--fontColor);
}
</style>