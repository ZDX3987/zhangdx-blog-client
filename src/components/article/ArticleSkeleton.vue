<template>
  <div>
    <skeleton
        type="custom"
        :options="{ width: '100%', height: '100%' }"
        :childrenOption="[
            {
              type: 'card',
              rules: 'a, b, c',
              active: true,
              options: { width: '100%', height: '50px' },
            },
            { type: 'listcom', rules: 'd, e, f, g, h, i', active: true, options: { row: 6, lineHight: 25 } },
          ]"
    />
  </div>
</template>

<script>
export default {
  name: "ArticleSkeleton"
}
</script>

<style scoped>

</style>