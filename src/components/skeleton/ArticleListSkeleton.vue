<template>
<div>
  <skeleton
      type="custom"
      :options="{ width: '100%', height: '100%' }"
      :childrenOption="[
              {
                type: 'card',
                rules: 'a, d, g',
                active: true,
                options: { width: '100%', height: '80%' },
              },
              { type: 'listcom', rules: 'b, c, e, f, h, i', active: true },
            ]"
  />
</div>
</template>

<script>
export default {
  name: "ArticleListSkeleton"
}
</script>

<style scoped>

</style>