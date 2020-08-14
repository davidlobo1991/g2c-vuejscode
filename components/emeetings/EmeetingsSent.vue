<template>
  <div class="u-custom-wrapper">
    <Sidebar activeTab="emeetings" />
    <Sent />
  </div>
</template>

<script>
import Sidebar from '~/components/site/Sidebar'
import Sent from '~/components/emeetings/Sent'

export default {
  name: 'EmeetingsSent',
  layout: 'default',
  components: {
    Sidebar,
    Sent
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
