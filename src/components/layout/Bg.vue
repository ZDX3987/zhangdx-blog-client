<template>
<div class="bg-content">
  <div class="bg-img"></div>
</div>
</template>

<script>
export default {
  name: "Bg"
}
</script>

<style scoped>
.bg-content {
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0; top: 0;
  z-index: -1;
}
.bg-img {
  width: 100%;
  height: 100vh;
  background: var(--bgImg);
  background-repeat: repeat;
}
</style>