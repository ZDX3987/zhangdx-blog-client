<template>
  <div class="classify-list-content">
    <el-row>
      <el-col class="cate-list">
        <ul>
          <li><a>全部（999）</a></li>
          <li v-for="cate of cateList" :key="cate.id" :class="currentCateId === cate.id
           ? 'active-cate-li' : ''">
            <a>
              {{ cate.cateName + '(' + cate.articleCount + ')' }}
            </a>
          </li>
        </ul>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "ClassifyList",
  data() {
    return {
      currentCateId: 0,
      cateList: [],
    }
  }
}
</script>

<style scoped>
.classify-list-content {
  background-color: var(--bgColor);
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, .1);
}

.cate-list {
  width: 100%;
  height: 50px;
  background-color: #FFF;
  padding: 10px 0;
  border-top: 1px solid rgb(220, 223, 230);
}

.cate-list ul {
  list-style: none;
}

.cate-list li {
  float: left;
  padding: 3px 5px;
  margin: 0 20px;
}

.cate-list a {
  color: #666;
  font-size: 13px;
  text-decoration: none;
  transition: all 0.5s;
}

.cate-list li:not(.active-cate-li):hover a {
  color: var(--mainThemeColor);
}

.active-cate-li {
  background-color: var(--mainThemeColor);
}

.active-cate-li a {
  color: #FFF;
}

.divider-margin {
  margin-bottom: 30px;
}
</style>
