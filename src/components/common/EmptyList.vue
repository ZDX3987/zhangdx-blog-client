<template>
<el-row class="empty-content" type="flex" justify="center">
  <el-col class="my-5" :span="4">
    <el-empty></el-empty>
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