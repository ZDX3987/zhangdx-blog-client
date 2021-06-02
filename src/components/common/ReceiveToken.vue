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
    this.type = this.$route.query.type;
    localStorage.setItem('oauth_type', this.type);
    window.opener.location.reload();
    window.close();
  }
}
</script>

<style scoped>

</style>