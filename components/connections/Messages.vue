<template>
  <div class="u-custom-wrapper">
    <Sidebar active-tab="connections" />
    <Main />
  </div>
</template>

<script>
import Sidebar from '~/components/site/Sidebar'
import Main from '~/components/connections/Main'

export default {
  name: 'Messages',
  layout: 'default',
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
