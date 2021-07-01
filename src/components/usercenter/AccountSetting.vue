<template>
  <div class="account-content text-left">
    <el-row>
      <el-col :sm="16">
        <h6 class="ml-4 account-subtitle">基本资料</h6>
        <div class="ml-5">
          <div class="account-input my-4">
            <label class="mr-4">用户名&nbsp;&nbsp;</label>
            <input class="pl-2" type="text" v-model="userInfo.username" readonly>
          </div>
          <div class="account-input my-4">
            <label class="mr-5">昵称</label>
            <input class="pl-2" type="text" v-model="userInfo.nickname">
          </div>
          <div class="account-input my-4">
            <label class="mr-5">邮箱</label>
            <input class="pl-2" type="email" v-model="userInfo.email">
          </div>
          <div class="account-input my-4">
            <label class="mr-3">个人主页</label>
            <input class="pl-2" type="text" v-model="userInfo.website">
          </div>
          <div class="account-input my-4">
            <label class="mr-3">个人介绍</label>
            <input class="pl-2" type="text" v-model="userInfo.introduce">
          </div>
          <button class="account-btn" type="button">保存修改</button>
        </div>
      </el-col>
    </el-row>
    <el-divider></el-divider>
    <el-row>
      <el-col>
        <h6 class="ml-4 account-subtitle">第三方账号</h6>
        <ul class="social-list">
          <li class="social-item pr-5" v-for="socialUser of socialUserList" :key="socialUser.type">
            <el-avatar class="social-avatar align-middle mr-2" :src="socialUser.avatar">
              <span :style="{color:socialUser.color}" :class="socialUser.icon"></span>
            </el-avatar>
            <span class="social-info align-middle" v-if="socialUser.available">
              <span class="d-inline-block">{{ socialUser.nickname }}</span>
              <el-button class="p-0" type="text">解绑</el-button>
            </span>
            <el-button class="align-middle" v-else type="text" @click="bindSocialUser(socialUser.type)">
              {{ '绑定' + socialUser.text }}
            </el-button>
          </li>
        </ul>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "AccountSetting",
  data() {
    return {
      socialUserList: [
        {
          type: 'QQ',
          icon: 'iconfont iconQQ',
          color: 'rgb(94,164,210)',
          text: 'QQ',
          available: false,
          avatar: '',
          nickname: ''
        },
        {
          type: 'GITEE',
          icon: 'iconfont iconmayun',
          color: 'rgb(178,53,37)',
          text: '码云',
          available: false,
          avatar: '',
          nickname: ''
        },
        {
          type: 'GITHUB',
          icon: 'iconfont iconhuaban881',
          color: 'rgb(51,51,51)',
          text: 'Github',
          available: false,
          avatar: '',
          nickname: ''
        },
      ]
    }
  },
  props: {
    userInfo: {}
  },
  methods: {
    bindSocialUser(type) {
      // 解决Safari无法打卡新窗口问题
      let newWindow = window.open('', '_blank', "width=1000,height=600,menubar=yes,location=yes,resizable=yes,scrollbars=true,status=true");
      this.$api.oauthApi.login(type, 'BIND', this.userInfo.id).then(res => {
        newWindow.location = res.data;
      }).catch(error => this.$message.error(error));
    }
  }
}
</script>

<style scoped>
@import "../../../static/icon/iconfont/iconfont.css";

.account-content {
  color: var(--fontColor);
}

.account-input input {
  border: 1px solid var(--borderColor);
  height: 40px;
  width: 85%;
  background-color: var(--bgColor);
  color: var(--subFontColor);
}

.account-input input:focus {
  border: 1px solid var(--mainThemeColor);
}
.account-input input[readonly] {
  background-color: #dcdee0;
}
.account-btn {
  width: 100px;
  height: 35px;
  border: none;
  color: var(--btnText);
  background-color: var(--mainThemeColor);
  transition: all 0.5s;
  font-size: 15px;
}

.account-btn:hover {
  background-color: #68cd79;
}

.social-list {
  list-style: none;
  height: 40px;
}

.social-item {
  float: left;
  height: 40px;
  line-height: 40px;
}

.social-avatar {
  width: 30px;
  height: 30px;
  line-height: 30px;
}

.social-avatar span {
  font-size: 30px;
  background-color: var(--bgColor);
}

.social-info {
  color: var(--fontColor);
}
</style>