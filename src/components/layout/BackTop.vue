<template>
  <div class="back-top">
    <a title="返回顶部">
      <span class="top-icon fa fa-angle-up"></span>
<!--      <span class="top-text">返回顶部</span>-->
    </a>
  </div>
</template>

<script>
export default {
  name: "BackTop"
}
</script>

<style scoped>
/* 返回顶部 */
.back-top {
  display: inline-block;
  width: 40px;
  height: 40px;
  background: rgb(85, 189, 102);
  color: #FFF;
  text-decoration: none;
  position: fixed;
  right: 20px;
  bottom: 100px;
  transition: all 0.5s;
  transform: translateX(100px);
  cursor: pointer;
}

.back-top:hover {
  background: #55bd66;
}

.top-icon {
  display: inline-block;
  width: 40px;
  height: 40px;
  line-height: 40px;
  font-size: 26px;
  color: #FFF;
  margin: 0 auto;
}

.top-text {
  display: inline-block;
  height: 40px;
  width: 100px;
  font-size: 16px;
  background: #55bd66;
  position: fixed;
  right: 60px;
  bottom: 0;
  line-height: 40px;
  color: #FFF;
  padding-left: 20px;
  transition: all 0.5s;
  opacity: 0;
  visibility: hidden;
}

.back-top:hover .top-text {
  opacity: 1;
  visibility: visible;
  transform: translateX(20px);
}
</style>
