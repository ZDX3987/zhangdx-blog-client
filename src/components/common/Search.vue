<template>
  <div>
    <el-dialog
        :visible.sync="searchDialogShow"
        :before-close="closeDialog">
      <div class="search-content">
        <el-input placeholder="请输入内容" v-model="searchWord" class="input-with-select">
          <el-select v-model="searchCategory" slot="prepend" placeholder="请选择">
            <el-option v-for="cate of searchCateList" :key="cate.index" :label="cate.text"
                       :value="cate.index"></el-option>
          </el-select>
          <el-button slot="append" icon="fa fa-search"></el-button>
        </el-input>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "Search",
  data() {
    return {
      searchDialogShow: false,
      searchCategory: '',
      searchWord: '',
      searchCateList: [{text: '文章', index: 1}, {text: '专题', index: 2}, {text: '分类', index: 3}]
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
  methods: {
    closeDialog() {
      this.searchDialogShow = false;
      this.$emit('close-search', this.searchDialogShow)
    }
  }
}
</script>

<style scoped>
.search-content {
  height: 200px;
}
.el-select >>> .el-input {
  width: 100px;
}
</style>