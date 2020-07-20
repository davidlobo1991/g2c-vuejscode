<template>
  <div class="u-custom-wrapper">
    User Profile without words
  </div>
</template>

<script>
export default {
  name: 'UserProfile',
  middleware: ['authUser']
}
</script>

<style lang="scss" scoped>
.u-custom-wrapper {
  display: flex;
  width: 100%;
  height: 100%;
}
</style>
