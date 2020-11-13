<template>
  <div class="navbar-content">
    <el-row>
      <el-col :span="3" :offset="1">
        <router-link :to="{name: 'Index'}">
          <h2 class="navbar-title">{{ title }}</h2>
        </router-link>
      </el-col>
      <el-col :span="29" :offset="1">
        <el-menu mode="horizontal">
          <el-menu-item v-for="menu of menuList" :key="menu.index" :index="menu.index">{{menu.text}}</el-menu-item>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  data() {
    return {
      title: 'ZHANGDX',
      menuList: [{index: 1, text: 'Java学习'}, {index: 2, text: '计算机知识'},
        {index: 3, text: '其他工具'}]
    }
  }
}
</script>

<style scoped>
.navbar-content {
  background-color: #FFF;
  height: 100%;
  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.1);
}
.navbar-title {
  height: 100%;
  background-image: linear-gradient(to right, #17b3a1, #e0142b);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
a {
  text-decoration: none;
}
.el-menu {
  height: 100%;
  border: none;
}
</style>
