<template>
  <div class="c-connections">
    <TopMobile />
    <ConnectionsNavbar activeTab="messages" />
    <div class="c-messages">test</div>
    <BottomMobile />
  </div>
</template>

<script>
import ConnectionsNavbar from '~/components/connections/ConnectionsNavbar'
import TopMobile from '~/components/site/TopMobile'
import BottomMobile from '~/components/site/BottomMobile'

export default {
  name: 'Main.vue',
  components: {
    ConnectionsNavbar,
    TopMobile,
    BottomMobile
  }
}
</script>

<style lang="scss" scoped>
.c-connections {
  width: 100%;
}
</style>
