<template>
  <el-row type="flex" justify="center">
    <el-col :lg="14" :md="20" :sm="22" :xs="22" class="archives-content">
      <el-row>
        <el-col :md="6" :sm="6" :xs="24">
          <archives-timeline @query-date="setQueryDateStr"></archives-timeline>
        </el-col>
        <el-col :md="18" :sm="18" :xs="24">
          <archives-list v-if="queryDateStr"
                         :query-date-str="queryDateStr"></archives-list>
        </el-col>
      </el-row>
    </el-col>
  </el-row>
</template>

<script>
import ArchivesList from "../components/archives/ArchivesList";
import ArchivesTimeline from "../components/archives/ArchivesTimeline";

export default {
  name: "Archives",
  data() {
    return {
      queryDateStr: null
    }
  },
  components: {
    ArchivesTimeline,
    ArchivesList
  },
  methods: {
    setQueryDateStr(value) {
      this.queryDateStr = value;
    }
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
