<template>
  <div>
    <el-row type="flex" justify="center">
      <el-col>
        <update-log-title></update-log-title>
      </el-col>
    </el-row>
    <el-row class="my-2"></el-row>
    <el-row  type="flex" justify="center">
      <el-col :md="14" :sm="22" :xs="22">
        <update-log-list></update-log-list>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import UpdateLogTitle from "./UpdateLogTitle";
import UpdateLogList from "./UpdateLogList";

export default {
  name: "UpdateLog",
  components: {
    UpdateLogTitle,
    UpdateLogList
  }
}
</script>

<style scoped>

</style>
