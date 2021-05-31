<template>
<div>接收token的组件</div>
</template>

<script>
export default {
  name: "ReceiveToken",
  data() {
    return {
      accessToken: ''
    }
  },
  created() {
    this.accessToken = this.$route.query.accessToken;
    localStorage.setItem('oauth_token', this.accessToken);
    window.opener.location.reload();
    window.close();
  }
}
</script>

<style scoped>

</style>