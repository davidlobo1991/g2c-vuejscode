<template>
  <div class="u-custom-wrapper">
    <Sidebar />
    <Network />
  </div>
</template>

<script>
import Sidebar from '~/components/site/Sidebar'
import Network from '~/components/home/Network'

export default {
  name: 'Home',
  middleware: ['authG2CUser'],
  components: {
    Sidebar,
    Network
  }
}
</script>

<style lang="scss" scoped>
.u-custom-wrapper {
  display: flex;
  width: 100%;
}
</style>
