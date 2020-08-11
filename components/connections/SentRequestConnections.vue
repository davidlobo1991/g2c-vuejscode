<template>
  <div class="u-custom-wrapper">
    <Sidebar />
    <SentRequests />
  </div>
</template>

<script>
import Sidebar from '~/components/site/Sidebar'
import SentRequests from '~/components/connections/SentRequests'

export default {
  name: 'SentRequestsConnections',
  layout: 'default',
  components: {
    Sidebar,
    SentRequests
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
