<template>
  <div class="u-custom-wrapper">
    <Sidebar />
    <Settings />
  </div>
</template>

<script>
import Sidebar from '~/components/site/Sidebar'
import Settings from '~/components/account/settings/Settings'

export default {
  name: 'Home',
  components: {
    Sidebar,
    Settings
  }
}
</script>

<style lang="scss" scoped>
.u-custom-wrapper {
  display: flex;
  width: 100%;
}
</style>
