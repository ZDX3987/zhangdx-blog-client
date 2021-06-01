<template>
  <el-dialog title="授权登录" :visible="dialogVisible" @close="dialogVisible = false">
    <el-row type="flex" justify="center">
      <el-col>
        <span class="login-type-item m-3" v-for="type of loginType" :key="type.type" :class="type.icon" :title="type.text"
              :style="{color:type.color}" @click="launchLogin(type.type)"></span>
      </el-col>
    </el-row>
  </el-dialog>
</template>

<script>

export default {
  name: "LoginDialog",
  data() {
    return {
      dialogVisible: false,
      loginType: [
        {type: 'QQ', icon: 'iconfont iconQQ', color: 'rgb(94,164,210)', text: 'QQ'},
        {type: 'gitee', icon: 'iconfont iconmayun', color: 'rgb(178,53,37)', text: '码云'},
        {type: 'GITHUB', icon: 'iconfont iconhuaban881', color: 'rgb(51,51,51)', text: 'Github'},
      ]
    }
  },
  methods: {
    launchLogin(type) {
      this.$api.oauthApi.login(type).then(res => {
        window.open(res.data, '_blank', "width=1000,height=500,menubar=yes,location=yes,resizable=yes,scrollbars=true,status=true");
      }).catch(error => this.$message.error(error));
    }
  }
}
</script>

<style scoped>
@import "../../../static/icon/iconfont/iconfont.css";

.login-type-item {
  font-size: 30px;
}
</style>