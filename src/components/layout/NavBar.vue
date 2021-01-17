<template>
  <div class="navbar-content">
    <nav class="navbar navbar-expand-lg navbar-light row">
      <div class="col-3">
        <a class="navbar-brand" href="/">
          <span class="navbar-brand mb-0 h1 navbar-title">{{ title }}</span>
        </a>
      </div>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse col-9" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li :class="'nav-item '+ menu.children ? 'dropdown' : ''"
              v-for="menu of menuList" :key="menu.index">
            <a v-if="menu.children" class="nav-link dropdown-toggle"
               :href="menu.href" :id="'menu_' + menu.index"
               role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              {{ menu.text }}
            </a>
            <div v-if="menu.children" class="dropdown-menu"
                 :aria-labelledby="'menu_' + menu.index">
              <a v-for="child of menu.children" :key="child.index" class="dropdown-item"
                 :href="child.href">{{ child.text }}</a>
            </div>
            <a v-else class="nav-link"
               :href="menu.href" :id="'menu_' + menu.index">
              {{ menu.text }} <span class="sr-only">(current)</span>
            </a>
          </li>
        </ul>
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
  color: #55bd66 !important;
}
</style>
