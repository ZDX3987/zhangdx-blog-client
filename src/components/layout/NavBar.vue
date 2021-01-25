<template>
  <div class="navbar-content">
    <nav class="navbar navbar-expand-md navbar-light row">
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="col-md-3 col-6 col-sm-6 m-auto m-md-0">
        <a class="navbar-brand" href="/">
          <span class="navbar-brand mb-0 h1 navbar-title">{{ title }}</span>
        </a>
      </div>
      <div class="collapse navbar-collapse col-md-7 menu-content" id="navbarSupportedContent">
        <ul class="navbar-nav">
          <li class="nav-item mr-3" :class="getNavLiClass(menu)"
              v-for="menu of menuList" :key="menu.index">
            <router-link v-if="menu.children" class="nav-link dropdown-toggle"
                         :id="'menu_' + menu.index" :to="{path: menu.href}"
                         role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <span :class="menu.icon"></span>&nbsp;
              {{ menu.text }}
            </router-link>
            <div v-if="menu.children" class="dropdown-menu"
                 :aria-labelledby="'menu_' + menu.index">
              <router-link v-for="child of menu.children" :key="child.index" class="dropdown-item"
                           :to="{path: child.href}">
                {{ child.text }}
              </router-link>
            </div>
            <router-link v-else class="nav-link" :to="{path: menu.href}"
                         :id="'menu_' + menu.index">
              <span :class="menu.icon"></span>&nbsp;
              {{ menu.text }} <span class="sr-only">(current)</span>
            </router-link>
          </li>
        </ul>
      </div>
      <div class="col-1 col-md-2 search-content">
        <el-form :inline="true">
          <el-form-item class="m-0">
            <el-input class="search-input" placeholder="请输入内容"></el-input>
          </el-form-item>
          <el-form-item class="m-0">
            <el-button class="search-btn" icon="fa fa-search" circle></el-button>
          </el-form-item>
        </el-form>
      </div>
    </nav>
  </div>
</template>

<script>
import {navData} from "../../util/nav-data";

export default {
  name: "NavBar",
  data() {
    return {
      title: 'ZHANGDX',
      menuList: navData,
    }
  },
  methods: {
    getNavLiClass(menu) {
      let dropdown = menu.children ? 'dropdown ' : '';
      let active = this.$route.path === menu.href ? 'active ' : '';
      return dropdown + active;
    },
  }
}
</script>

<style scoped>
.navbar-content {
  background-color: var(--bgColor);
  width: 100%;
  position: fixed;
  z-index: 20;
  top: 0;
  transition: all 0.5s;
  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.1);
}

.navbar-title {
  height: 100%;
  font-weight: bold;
  background-image: linear-gradient(to right, #17b3a1, #e0142b);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

a {
  text-decoration: none;
  color: var(--fontColor) !important;
}

.active a {
  color: var(--mainThemeColor) !important;
}

.menu-content {
  text-align: left;
}

.menu-content a:hover {
  color: var(--mainThemeColor) !important;
}

.dropdown-menu {
  background-color: var(--bgColor);
  margin-top: 20px;
  border: none;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, .1);
}

.dropdown-item {
  border-bottom: 1px solid #fff;
}

.dropdown-item:nth-last-of-type(1) {
  border: none;
}

.navbar-toggler {
  border: none;
}

.search-content {
  border-radius: 2em;
  border: 1px solid #DCDFE6;
  padding: 0;
}

.search-input >>> input {
  border: none;
}

.search-btn {
  border: none;
}

.search-btn >>> button {
  border: none;
}
</style>
