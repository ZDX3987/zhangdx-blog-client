<template>
  <div class="breadcrumb-list" v-if="isHomePage()">
    <el-row class="cate-title">
      <el-col :span="20">
        <div>
          <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item
              v-for="route in $route.matched"
              :key="route.name"
              :to="{ name: route.name }">{{ route.meta.title }}
            </el-breadcrumb-item>
          </el-breadcrumb>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "BreadcrumbRouter",
  data() {
    return {}
  },
  methods: {
    isHomePage() {
      return this.$route.path !== '/';
    }
  }
}
</script>

<style scoped>
.breadcrumb-list {
  padding: 20px 10%;
  background-color: var(--bgColor);
  margin-bottom: 20px;
}
.breadcrumb-list >>> span {
  color: var(--fontColor);
}
</style>
