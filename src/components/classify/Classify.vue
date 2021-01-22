<template>
  <div>
    <el-row type="flex" justify="center">
      <el-col :md="20" :xs="22" :sm="22">
        <classify-list></classify-list>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import ClassifyList from "./ClassifyList";

export default {
  name: "Classify",
  data() {
    return {}
  },
  components: {
    ClassifyList
  }
}
</script>

<style scoped>
</style>
