<template>
  <div class="search-content">
    <el-dialog
        title="提示"
        :visible.sync="searchDialogShow"
        width="30%">
      <span>这是一段信息</span>
      <span slot="footer" class="dialog-footer">
    <el-button @click="searchDialogShow = false">取 消</el-button>
    <el-button type="primary" @click="searchDialogShow = false">确 定</el-button>
  </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "Search",
  data() {
    return {
      searchDialogShow: false
    }
  },
  props: {
    searchShow: {
      type: Boolean,
      default: false
    }
  },
  watch: {
    searchShow(value) {
      this.searchDialogShow = value
    }
  },
  // computed: {
  //   searchDialogShow: {
  //     get: function () {
  //       return this.searchShow;
  //     },
  //     set: function (newValue) {
  //       this.searchShow = newValue;
  //     }
  //   }
  // }
}
</script>

<style scoped>
.search-content {
}
</style>