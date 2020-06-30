<template>
  <div class="u-custom-wrapper">
    <Sidebar />
    <Main />
  </div>
</template>

<script>
import Sidebar from '~/components/site/Sidebar'
import Main from '~/components/profile/Main'

export default {
  name: 'Home',
  components: {
    Sidebar,
    Main
  }
}
</script>

<style lang="scss" scoped>
.u-custom-wrapper {
  display: flex;
  width: 100%;
  height: 100%;
}
</style>
