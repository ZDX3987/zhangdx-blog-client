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
      <el-main class="main-content">
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
    let token = localStorage.getItem('oauth_token');
    let type = localStorage.getItem('oauth_type');
    if (!token || !type) {
      return;
    }
    this.$api.oauthApi.getUserInfo(type, token).then(res => {
      this.$store.commit('updateUserInfo', res.data);
      this.$message.success('欢迎！' + res.data.nickname);
    }).catch(error => this.$message.error('登录失败'));
  },
  methods: {
    showLoginDialog(value) {
      this.$refs.loginDialog.dialogVisible = value;
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
