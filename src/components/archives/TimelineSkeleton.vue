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
              options: { width: '100%', height: '40px' },
            },
            { type: 'listcom', rules: 'd, e, f, g, h, i', active: true, options: { row: 3, lineHight: 25 } },
          ]"
    />
  </div>
</template>

<script>
export default {
  name: "TimelineSkeleton"
}
</script>

<style scoped>

</style>