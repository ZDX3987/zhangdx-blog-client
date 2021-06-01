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
        <router-view class="main-router" v-wechat-title="$route.meta.title + ' - ZHANGDX的博客'"
                     :key="$route.fullPath"/>
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
import NavBar from "./NavBar";
import Footer from "./Footer";
import ArticleList from "../article/ArticleList";
import BackTop from "../common/BackTop";
import '../../../static/js/back-top.js'
import Search from "../common/Search";
import BreadcrumbRouter from "../common/BreadcrumbRouter";
import Bg from './Bg';
import LoginDialog from '../common/LoginDialog';

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
  mounted() {
    let token = localStorage.getItem('oauth_token');
    if (!token) {
      return;
    }
    this.$api.oauthApi.getUserInfo('GITEE', token).then(res => {
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
