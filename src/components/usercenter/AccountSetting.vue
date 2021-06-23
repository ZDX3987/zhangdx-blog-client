<template>
  <div class="account-content text-left">
    <el-row>
      <el-col :sm="16">
        <el-form ref="form" :model="userInfo" label-width="80px">
          <el-form-item label="昵称">
            <el-input v-model="userInfo.nickname"></el-input>
          </el-form-item>
          <el-form-item label="密码">
            <el-input type="password" v-model="userInfo.password"></el-input>
          </el-form-item>
          <el-form-item label="邮箱">
            <el-input type="email" v-model="userInfo.email"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')">保存</el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
    <el-row>
      <el-col>
        <ul class="social-list">
          <li class="social-item pr-5" v-for="socialUser of socialUserList" :key="socialUser.type">
            <el-avatar class="social-avatar align-middle mr-2" :src="socialUser.avatar">
              <span :style="{color:socialUser.color}" :class="socialUser.icon"></span>
            </el-avatar>
            <span class="social-info" v-if="socialUser.available">
              <span>{{socialUser.nickname}}</span>
              <el-button type="text">解绑</el-button>
            </span>
            <el-button class="align-middle" v-else type="text">{{'绑定' + socialUser.text}}</el-button>
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
      userInfo: {nickname: 'ZHANGDX', password: '123456', email: 'zdx3987@163.com'},
      socialUserList: [
        {
          type: 'QQ',
          icon: 'iconfont iconQQ',
          color: 'rgb(94,164,210)',
          text: 'QQ',
          available: true,
          avatar: 'https://pic2.zhimg.com/v2-f029565d5a67d29343b2f212cd7bf121_xl.jpg',
          nickname: 'ZHANGDX'
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
  }
}
</script>

<style scoped>
@import "../../../static/icon/iconfont/iconfont.css";

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
}
.social-info {

}
</style>