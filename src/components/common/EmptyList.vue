<template>
<el-row class="empty-content" type="flex" justify="center">
  <el-col class="my-5" :span="emptySize">
    <el-empty/>
  </el-col>
</el-row>
</template>

<script>
export default {
  name: "EmptyList",
  props: {
    emptySize: {
      type: Number,
      default: 4
    }
  }
}
</script>

<style scoped>
.empty-content {
  color: var(--fontColor);
}
</style>