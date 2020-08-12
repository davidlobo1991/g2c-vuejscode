<template>
  <div class="u-custom-wrapper">
    <Sidebar />
    <Requests />
  </div>
</template>

<script>
import Sidebar from '~/components/site/Sidebar'
import Requests from '~/components/connections/Requests'

export default {
  name: 'RequestsConnections',
  layout: 'default',
  components: {
    Sidebar,
    Requests
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
