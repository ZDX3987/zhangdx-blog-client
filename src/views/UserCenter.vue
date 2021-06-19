<template>
  <div class="user-center-page">
    <el-row type="flex" justify="center">
      <el-col :lg="12" :md="20" :xs="22" :sm="22">
        <div class="user-center-content">
          <el-image class="user-cover-image" :src="userCoverImg" fit="cover"></el-image>
          <div class="user-info">
            <el-row>
              <el-col :md="4" :sm="6" :xs="8">
<!--                <el-avatar shape="square" fit="fill"-->
<!--                           :src="userAvatarImg"></el-avatar>-->
                <div class="user-avatar p-1">
                  <img :src="userAvatarImg" :alt="userInfo.nickname">
                </div>
              </el-col>
              <el-col :md="16" :sm="13" :xs="11">
                <div class="user-right-info text-left">
                  <h4>{{ userInfo.nickname }}</h4>
                </div>
              </el-col>
              <el-col :md="4" :sm="5" :xs="6">
                <el-button class="align-bottom" type="primary">编辑资料</el-button>
              </el-col>
            </el-row>
          </div>
        </div>
        <div class="user-profile my-3 p-2">
          <account-setting/>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import AccountSetting from '../components/usercenter/AccountSetting';

export default {
  name: "UserCenter",
  data() {
    return {
      userInfo: {
        nickname: 'ZHANGDX'
      },
      userCoverImg: 'https://pic2.zhimg.com/80/v2-262a0b84e2d05c5e431032cbf589e35e_r.jpg',
      userAvatarImg: 'https://pic2.zhimg.com/v2-f029565d5a67d29343b2f212cd7bf121_xl.jpg',
      currentTab: '2'
    }
  },
  components: {
    AccountSetting
  }
}
</script>

<style scoped>
.user-center-page {
}

.user-center-content {
  background-color: var(--bgColor);
  border-radius: 3px;
  overflow: hidden;
}

.user-cover-image {
  height: 280px;
}

.user-avatar {
  background-color: var(--bgColor);
  transform: translateY(-30%);
  width: 80%;
  margin: 0 auto;
  border-radius: 2px;
}
.user-avatar img {
  width: 100%;
  height: 100%;
}

.user-right-info h4 {
  font-weight: 600;
  color: var(--fontColor);
}

.user-profile {
  height: 600px;
  background-color: var(--bgColor);
}
</style>