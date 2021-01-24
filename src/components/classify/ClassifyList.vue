<template>
  <div class="classify-list-content">
    <el-row class="parent-cate-list">
      <el-col>
        <ul>
          <li :class="currentCateId === 0 ? 'active-cate-li' : ''" @click="chooseCate(null, 0)">
            <a>全部（999）</a>
          </li>
          <li v-for="cate of getAllParentCategories()" :key="cate.id" :class="currentCateId === cate.id
           ? 'active-cate-li' : ''" @click="chooseCate(cate, 0)">
            <a>
              {{ cate.cateName + '(' + cate.articleCount + ')' }}
            </a>
          </li>
        </ul>
      </el-col>
    </el-row>
    <el-collapse-transition>
      <el-row class="child-cate-list" v-if="childCateList.length !== 0">
        <el-col>
          <ul>
            <li :class="currentChildCateId === 0 ? 'active-cate-li' : ''" @click="chooseCate(null, 1)">
              <a>全部（999）</a>
            </li>
            <li v-for="cate of childCateList" :key="cate.id" :class="currentChildCateId === cate.id
           ? 'active-cate-li' : ''" @click="chooseCate(cate, 1)">
              <a>
                {{ cate.cateName + '(' + cate.articleCount + ')' }}
              </a>
            </li>
          </ul>
        </el-col>
      </el-row>
    </el-collapse-transition>
  </div>
</template>

<script>
export default {
  name: "ClassifyList",
  data() {
    return {
      currentCateId: 0,
      cateList: [],
      childCateList: [],
      currentChildCateId: 0
    }
  },
  created() {
    this.initCategories();
  },
  methods: {
    initCategories() {
      this.$api.categoryApi.getAllCategory().then(res => {
        this.cateList = res.data;
      }).catch(error => this.$message.error("标签加载失败"))
    },
    getAllParentCategories() {
      return this.cateList.filter(category => !category.parentCate)
    },
    genChildCategories(parentCateId) {
      this.childCateList = this.cateList.filter(category => category.parentCate &&
        category.parentCate.id === parentCateId);
    },
    chooseCate(category, cateSource) {
      if (cateSource) {
        this.currentChildCateId = category ? category.id : 0;
      } else {
        this.currentCateId = category ? category.id : 0;
        this.genChildCategories(this.currentCateId);
        this.currentChildCateId = 0;
      }
      let queryCateId = this.currentCateId ? (this.currentChildCateId
        ? this.currentChildCateId : this.currentCateId) : 0;
      this.$emit('query-category', queryCateId);
    }
  }
}
</script>

<style scoped>
.classify-list-content {
  background-color: var(--bgColor);
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, .1);
  padding: 10px 0;
}

.parent-cate-list {
}

.child-cate-list {
  border-top: 1px solid rgb(220, 223, 230);
  margin-top: 10px;
  padding-top: 10px;
}

.classify-list-content ul {
  list-style: none;
}

.classify-list-content li {
  float: left;
  padding: 3px 5px;
  margin: 0 20px;
}

.classify-list-content a {
  color: var(--aBg);
  font-size: 13px;
  text-decoration: none;
  transition: all 0.5s;
  cursor: pointer;
}

.classify-list-content li:not(.active-cate-li):hover a {
  color: var(--mainThemeColor);
}

.active-cate-li {
  background-color: var(--mainThemeColor);
}

.active-cate-li a {
  color: #FFF;
}

</style>
