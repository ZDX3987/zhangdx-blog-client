<template>
  <div class="fixed-tool">
    <div class="theme-toggle">
      <el-tooltip class="item" :effect="currentTheme === 'light' ? 'dark' : 'light'"
                  :content="currentTheme === 'light' ? '切换至黑夜':'切换至白天'"
                  placement="left">
        <a @click="toggleSkin()">
          <span :class="themeIcon"></span>
        </a>
      </el-tooltip>

    </div>
    <div class="back-top">
      <el-tooltip class="item" :effect="currentTheme === 'light' ? 'dark' : 'light'"
                  content="返回顶部" placement="left">
        <a>
          <span class="top-icon fa fa-angle-up"></span>
        </a>
      </el-tooltip>
    </div>
  </div>
</template>

<script>
export default {
  name: "BackTop",
  data() {
    return {}
  },
  computed: {
    currentTheme() {
      return this.$store.state.themeToggle;
    },
    themeIcon() {
      return this.currentTheme === 'light' ? 'theme-icon fa fa-sun-o'
        : 'theme-icon fa fa-moon-o';
    }
  },
  methods: {
    toggleSkin() {
      let newTheme = this.currentTheme === 'light' ? 'dark' : 'light';
      this.$store.commit('switchTheme', newTheme);
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
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, .1);
}

.theme-toggle {
  width: 40px;
  height: 40px;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.5s;
  background: var(--bgColor);
}

.theme-icon {
  display: inline-block;
  width: 40px;
  height: 40px;
  line-height: 40px;
  font-size: 20px;
  margin: 0 auto;
  color: var(--fontColor);
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
  background: var(--mainThemeColor);
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
