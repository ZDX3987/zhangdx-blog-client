<template>
  <div class="shared-content mt-5">
    <ul class="shared-ul">
      <li>分享</li>
      <li v-for="type of sharedType" :key="type.type">
      <span class="shared-type-item" :class="type.icon" :title="type.text"
            :style="{color:type.color}"></span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "SharedSide",
  data() {
    return {
      sharedType: [
        {type: 'QQ空间', icon: 'iconfont iconQQkongjian', color: 'rgb(236,184,47)', text: 'QQ空间'},
        {type: '微博', icon: 'iconfont iconweibo', color: 'rgb(213,104,93)', text: '微博'},
        {type: '微信', icon: 'iconfont iconweixin', color: 'rgb(118,192,47)', text: '微信'},
      ]
    }
  },
  methods: {
    handleShared(title, url) {

    }
  }
}
</script>

<style scoped>
@import "../../../static/icon/iconfont/iconfont.css";

.shared-content {
  position: fixed;
}
.shared-ul {
  list-style: none;
}

.shared-type-item {
  font-size: 30px;
}
</style>