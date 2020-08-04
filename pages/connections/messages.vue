<template>
  <div class="c-connections">
    <Messages />
  </div>
</template>

<script>
import Messages from '~/components/connections/Messages'

export default {
  name: 'Messages.vue',
  components: {
    Messages
  }
}
</script>

<style scoped>
.c-connections {
  width: 100%;
  height: 100%;
}
</style>
