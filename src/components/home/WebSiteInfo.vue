<template>
<div class="website-info">
  <div class="website-info-header">
    <span><i class="fa fa-server"></i>&nbsp;网站信息</span>
  </div>
</div>
</template>

<script>
export default {
  name: "WebSiteInfo"
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
</style>