<template>
<el-row class="empty-content">
  <el-col class="my-5" :span="24">
    列表为空
  </el-col>
</el-row>
</template>

<script>
export default {
  name: "EmptyList"
}
</script>

<style scoped>
.empty-content {
  color: var(--fontColor);
}
</style>