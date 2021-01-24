<template>
  <el-row type="flex" justify="center">
    <el-col :md="20" :sm="22" :xs="22" class="archives-content">
      <el-row>
        <el-col :md="6" :sm="6" :xs="24">
          <archives-timeline></archives-timeline>
        </el-col>
        <el-col :md="18" :sm="18" :xs="24">
          <archives-list></archives-list>
        </el-col>
      </el-row>
    </el-col>
  </el-row>
</template>

<script>
import ArchivesList from "./ArchivesList";
import ArchivesTimeline from "./ArchivesTimeline";

export default {
  name: "Archives",
  data() {
    return {}
  },
  components: {
    ArchivesTimeline,
    ArchivesList
  }
}
</script>

<style scoped>
.archives-content {
  background-color: var(--bgColor);
  margin-bottom: 30px;
  text-align: left;
  padding: 20px;
}
</style>
