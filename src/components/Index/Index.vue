<template>
  <div class="index-content">
    <el-container>
      <el-header>
        <NavBar/>
      </el-header>
      <el-main></el-main>
      <el-footer></el-footer>
    </el-container>
  </div>
</template>

<script>
import NavBar from "../layout/NavBar";

export default {
  name: "Index",
  components: {
    NavBar
  }
}
</script>

<style scoped>
.index-content {
  background-color: #eff1f4;
  height: 100%;
}
.el-container {
  height: 100%;
}
.el-header, .el-main {
  padding: 0;
  height: 100%;
}
</style>
