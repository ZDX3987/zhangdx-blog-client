<template>
  <div>
    <el-dialog
        :visible.sync="searchDialogShow"
        :before-close="closeDialog"
        width="450px"
        custom-class="dialog">
      <div class="search-content">
        <el-form :model="searchForm" :rules="rules" ref="searchForm">
          <el-form-item prop="searchWord">
            <el-input placeholder="请输入内容" v-model="searchForm.searchWord" class="input-with-select">
              <el-select v-model="searchCategory" slot="prepend" placeholder="请选择">
                <el-option v-for="cate of searchCateList" :key="cate.index" :label="cate.text"
                           :value="cate.index"></el-option>
              </el-select>
              <el-button slot="append" icon="fa fa-search" @click="submitSearch('searchForm')"></el-button>
            </el-input>
          </el-form-item>
        </el-form>
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
      searchCateList: [{text: '文章', index: 1}, {text: '专题', index: 2}, {text: '分类', index: 3}],
      searchForm: {
        searchWord: '',
      },
      rules: {
        searchWord: [{required: true, message: '请输入关键字', trigger: 'submit'}]
      }
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
    },
    submitSearch(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!');
        }
      });
    }
  }
}
</script>

<style scoped>
.search-content {
  height: 200px;
}

.el-dialog__wrapper >>> .dialog {
  background-color: var(--bgColor);
}

.input-with-select {
  min-width: 100%;
}

.el-select {
  min-width: 90px;
}

.search-content >>> input:focus {
  border-color: var(--mainThemeColor);
}

.el-select-dropdown__item.selected {
  color: var(--mainThemeColor);
}

</style>