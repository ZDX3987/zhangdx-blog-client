<template>
  <div>
    <el-timeline>
      <el-timeline-item v-for="i of 1" :key="i"
                        :timestamp="dateFormat(new Date())"
                        placement="top">
        <el-card class="article-card">
          <skeleton
              type="custom"
              :options="{ width: '100%', height: '100px' }"
              :childrenOption="[
            { type: 'listcom', rules: 'a,b,c,d, e, f', active: true, options: { row: 3, lineHight: 20 } },
          ]"
          />
        </el-card>
      </el-timeline-item>
    </el-timeline>

  </div>
</template>

<script>
export default {
  name: "ArchivesSkeleton",
  methods: {
    dateFormat(date) {
      return this.$options.filters['dateFormat'](date, 'yyyy-MM-DD')
    }
  }
}
</script>

<style scoped>

</style>