<template>
  <div class="index-content">
    <el-container>
      <bg></bg>
      <div class="fixed-header">
        <nav-bar @openLoginDialog="showLoginDialog"></nav-bar>
        <el-collapse-transition>
          <search v-show="searchShow"></search>
        </el-collapse-transition>
      </div>
      <el-main class="main-content" @click.native="mainClickCallback">
        <breadcrumb-router></breadcrumb-router>
        <router-view class="main-router" :key="$route.fullPath"/>
      </el-main>
      <footer>
        <Footer/>
      </footer>
    </el-container>
    <back-top/>
    <login-dialog ref="loginDialog"/>
  </div>
</template>

<script>
import NavBar from "../components/layout/NavBar";
import Footer from "../components/layout/Footer";
import ArticleList from "../components/article/ArticleList";
import BackTop from "../components/common/BackTop";
import '../../static/js/back-top.js'
import Search from "../components/common/Search";
import BreadcrumbRouter from "../components/common/BreadcrumbRouter";
import Bg from '../components/layout/Bg';
import LoginDialog from '../components/common/LoginDialog';
import {getAuthorization, removeAuthorization} from '../util/storage-unit';
import {closeWebSocket, initAnonymousWebSocket, initWebSocket} from '../websocket';

export default {
  name: "Layout",
  components: {
    Bg,
    NavBar,
    Search,
    BreadcrumbRouter,
    ArticleList,
    Footer,
    BackTop,
    LoginDialog
  },
  data() {
    return {
      loginDialogShow: false
    }
  },
  computed: {
    searchShow() {
      return this.$store.state.showSearch;
    }
  },
  created() {
    if (getAuthorization()) {
      this.$api.oauthApi.getUserInfo().then(res => {
        this.$store.commit('updateUserInfo', res.data);
        closeWebSocket();
        initWebSocket(res.data.username);
      }).catch(error => {
        this.$message.error('登录失败');
        removeAuthorization();
      });
    } else {
      initAnonymousWebSocket();
    }
  },
  methods: {
    showLoginDialog(value) {
      this.$refs.loginDialog.dialogVisible = value;
    },
    mainClickCallback() {
      // 点击页面主体，隐藏搜索框
      this.$store.commit('showSearchBar', false);
    }
  }
};
</script>

<style scoped>
.index-content {
  min-height: 100%;
}

.fixed-header {
  width: 100%;
  position: fixed;
  z-index: 20;
  top: 0;
  transition: all 0.5s;

}

.el-container {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
}

.el-main {
  margin-top: 65px;
  padding: 0;
}
</style>
