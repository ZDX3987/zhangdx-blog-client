<template>
  <el-dialog title="授权登录" :visible="dialogVisible">
    <ul class="login-type-list">
      <li v-for="type of loginType" :key="type.type">
        <a :class="type.icon" :title="type.text" @click="launchLogin(type.type)"></a>
      </li>
    </ul>
    <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
  </span>
  </el-dialog>
</template>

<script>
export default {
  name: "LoginDialog",
  data() {
    return {
      dialogVisible: false,
      loginType: [
        {type: 'QQ', icon: 'fa fa-qq', text: 'QQ'},
        {type: 'GITEE', icon: 'fa fa-qq', text: '码云'},
        {type: 'GITHUB', icon: 'fa fa-github', text: 'Github'},
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
.login-type-list {
  list-style: none;
}

.login-type-list li {
  float: left;
  margin-right: 10%;
}
</style>