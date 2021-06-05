<template>
  <div class="shared-content mt-5" ref="sharedContent">
    <ul class="shared-ul p-0">
      <li>分享</li>
      <li v-for="shared of sharedType" :key="shared.text">
        <span class="shared-type-item" :class="shared.icon" :title="shared.text"
              :style="{color:shared.color}" @click="handleShared(shared)">
        <vue-qr v-if="shared.type === 'qrcode'" class="shared-qrcode" :text="currentUrl" :size="100"
                :margin="10"></vue-qr>
      </span>
      </li>
    </ul>
  </div>
</template>

<script>
import vueQr from 'vue-qr';

export default {
  name: "SharedSide",
  data() {
    return {
      sharedType: [
        {
          type: 'window',
          icon: 'iconfont iconQQkongjian',
          color: 'rgb(236,184,47)',
          text: 'QQ空间',
          url: 'http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey',
          queryParams: [
            {key: 'url', value: 'http://www.zhangdx.cn/article/6.html'}, {key: 'title', value: this.article.title},
            {key: 'summary', value: this.article.digest || ''}, {
              key: 'desc',
              value: encodeURIComponent('我在看 #' + this.article.title + '#')
            },
            {key: 'pics', value: this.article.coverImg}
          ]
        },
        {
          type: 'window',
          icon: 'iconfont iconweibo',
          color: 'rgb(213,104,93)',
          text: '微博',
          url: 'http://v.t.sina.com.cn/share/share.php',
          queryParams: [
            {key: 'url', value: 'http://www.zhangdx.cn/article/6.html'},
            {
              key: 'title',
              value: encodeURIComponent('我在看 #' + this.article.title + '#')
            },
            {key: 'content', value: this.article.digest || ''}, {key: 'pic', value: this.article.coverImg}
          ]
        },
        {
          type: 'qrcode',
          icon: 'iconfont iconweixin',
          color: 'rgb(118,192,47)',
          text: '微信',
          url: '',
          queryParams: []
        },
      ],
      currentUrl: location.href,
    }
  },
  props: {
    article: {}
  },
  components: {
    vueQr
  },
  methods: {
    handleShared(shared) {
      if (shared.type === 'qrcode') {
        return;
      } else {
        let paramsStr = shared.queryParams.map(param => param.key + '=' + param.value).join('&');
        let url = shared.url + '?' + paramsStr;
        window.open(url);
      }
    },
  }
}
</script>

<style scoped>
@import "../../../static/icon/iconfont/iconfont.css";

.shared-content {
  /*position: fixed;*/
}

.shared-ul {
  list-style: none;
  color: var(--fontColor);
}

.shared-ul li {
  width: 40px;
}

.shared-type-item {
  font-size: 30px;
  width: 100%;
  display: block;
}

.shared-qrcode {
  transform: translate(-30px, 0);
  display: none !important;
}

.shared-type-item:hover .shared-qrcode {
  display: inline-block !important;
}
</style>