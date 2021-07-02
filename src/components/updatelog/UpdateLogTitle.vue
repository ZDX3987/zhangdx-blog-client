<template>
  <div class="upload-title align-middle">
    <div class="title-mask"></div>
  </div>
</template>

<script>
export default {
  name: "UpdateLogTitle",
  data() {
    return {}
  }
}
</script>

<style scoped>
.upload-title {
  height: 200px;
  background-color: var(--bgColor);
}

.title-mask {
  width: 100%;
  height: 200px;
  background: url("https://file.zhangdx.cn/updatelog.jpg") no-repeat center;
  background-size: cover;
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0.9;
}
</style>
