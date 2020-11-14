<template>
  <div class="footer-content">
    <el-row>
      <el-col>

      </el-col>
    </el-row>
    <el-row>
      <el-col>
        <p class="copyright">
          <a href="http://beian.miit.gov.cn">豫 ICP 备 20019985 号 - 1</a>
          Copyright © {{ currentYear }}
          <a href="http://www.zhangdx.cn">ZHANGDX</a>
        </p>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      currentYear: new Date().getFullYear()
    }
  }
};
</script>

<style scoped>
.footer-content {
  width: 100%;
  height: 300px;
  background-color: rgb(23, 28, 62);
}
.copyright {
  color: rgb(176, 183, 189);
  font-size: 14px;
}
.copyright a {
  color: rgb(176, 183, 189);
  text-decoration: none;
  transition: all 0.5s;
}
.copyright a:hover {
  color: rgb(31, 193, 93);
}
</style>
