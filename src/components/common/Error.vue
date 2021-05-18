<template>
  <div>
    <div class="error-content">
      <el-image :src="imgUrl" fit="cover"></el-image>
      <p>啊~哦~ 您要查看的页面不存在或已删除！</p>
      <p>请检查您输入的网址是否正确，或者点击按钮继续浏览网站</p>
      <button class="back-btn" @click="back()">返回首页</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Error",
  data() {
    return {
      imgUrl: "static/images/notfound.gif",
    };
  },
  methods: {
    back() {
      this.$router.push({name: 'Index'});
    },
  },
};
</script>

<style scoped>
.error-content {
  margin: 100px auto;
  width: 40%;
  text-align: center;
}
p:nth-of-type(1) {
  font-size: 24px;
}
p:nth-of-type(2) {
  font-size: 14px;
  margin-bottom: 30px;
}
.back-btn {
  width: 200px;
  height: 50px;
  background-color: var(--mainThemeColor);
  border-radius: 50px;
  font-size: 18px;
  color: #fff;
  transition: all 0.5s;
  border: none;
  margin: 30px 0;
  outline: none;
  cursor: pointer;
}
.back-btn:hover {
  border: 1px solid #666;
  background-color: #fff;
  color: #666;
}
</style>
