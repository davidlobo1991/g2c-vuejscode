<template>
  <div class="c-connections">
    <RequestConnections />
  </div>
</template>

<script>
import RequestConnections from '~/components/connections/RequestConnections'

export default {
  name: 'Request',
  components: {
    RequestConnections
  }
}
</script>

<style scoped>
.c-connections {
  width: 100%;
  height: 100%;
}
</style>
