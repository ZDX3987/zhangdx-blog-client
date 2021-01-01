<template>
  <div class="fixed-tool">
    <div :class="skinToggle">
      <a title="切换皮肤" @click="toggleSkin()">
        <span :class="skinIcon"></span>
      </a>
    </div>
    <div class="back-top">
      <a title="返回顶部">
        <span class="top-icon fa fa-angle-up"></span>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "BackTop",
  data() {
    return {
      currentSkin: true,
      skinToggle: 'skin-toggle skin-toggle-bg-white',
      skinIcon: 'skin-icon skin-white fa fa-sun-o',
    }
  },
  methods: {
    toggleSkin() {
      this.currentSkin = !this.currentSkin;
      if (this.currentSkin) {
        this.skinToggle = 'skin-toggle skin-toggle-bg-white';
        this.skinIcon = 'skin-icon skin-white fa fa-sun-o';
      } else {
        this.skinToggle = 'skin-toggle skin-toggle-bg-black';
        this.skinIcon = 'skin-icon skin-black fa fa-moon-o';
      }
    }
  }
}
</script>

<style scoped>
.fixed-tool {
  display: inline-block;
  width: 40px;
  height: 80px;
  position: fixed;
  right: 20px;
  bottom: 100px;
  transition: all 0.5s;
  transform: translateX(100px);
}

.skin-toggle {
  width: 40px;
  height: 40px;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.5s;
}

.skin-toggle-bg-white {
  background: #FFF;
}

.skin-toggle-bg-black {
  background: #000;
}

.skin-icon {
  display: inline-block;
  width: 40px;
  height: 40px;
  line-height: 40px;
  font-size: 26px;
  margin: 0 auto;
}

.skin-white {
  color: #000;
}

.skin-black {
  color: #FFF;
}

/* 返回顶部 */
.back-top {
  width: 40px;
  height: 40px;
  background: rgb(85, 189, 102);
  color: #FFF;
  text-decoration: none;
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

</style>
