<template>
  <div class="c-connections">
    <SentRequestConnections />
  </div>
</template>

<script>
import SentRequestConnections from '~/components/connections/SentRequestConnections'

export default {
  name: 'SentRequest',
  components: {
    SentRequestConnections
  }
}
</script>

<style scoped>
.c-connections {
  width: 100%;
  height: 100vh;
}
</style>
