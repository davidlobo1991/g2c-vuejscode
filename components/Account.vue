<template>
  <div class="u-custom-wrapper">
    <Sidebar />
    <Main />
  </div>
</template>

<script>
import Sidebar from '~/components/site/Sidebar'
import Main from '~/components/account/Main'

export default {
  name: 'Account',
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
}
</style>
