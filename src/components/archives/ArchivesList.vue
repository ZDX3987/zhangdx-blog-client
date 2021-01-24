<template>
  <div class="archives-list">
    <el-timeline>
      <el-timeline-item timestamp="2018/4/12" placement="top">
        <el-card class="article-card">
          <h4>文章标题</h4>
          <p>标签 2018/4/12 20:46</p>
        </el-card>
      </el-timeline-item>
    </el-timeline>
  </div>
</template>

<script>
export default {
  name: "ArchivesList",
  data() {
    return {}
  }
}
</script>

<style scoped>

.article-card {
  background-color: var(--bgColor);
  border-color: var(--borderColor);
  color: var(--fontColor);
}
</style>
