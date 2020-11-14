<template>
  <div class="navbar-content">
    <nav class="navbar navbar-expand-lg navbar-light row">
      <div class="col-3">
        <a class="navbar-brand" href="#">
          <span class="navbar-brand mb-0 h1 navbar-title">{{ title }}</span>
        </a>
      </div>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse col-9" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item" v-for="menu of menuList" :key="menu.index">
            <a class="nav-link" href="#">{{ menu.text }} <span class="sr-only">(current)</span></a>
          </li>
        </ul>
      </div>
    </nav>
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
}
</style>
