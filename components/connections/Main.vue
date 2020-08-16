<template>
  <div class="c-connections">
    <TopMobile />
    <ConnectionsNavbar active-tab="messages" />
    <div class="c-messages">
      <SoonBanner />
      <MessagesUsersList class="c-messages__users" />
      <MessagesConversation class="c-messages__conversation" />
    </div>
    <BottomMobile active-tab="connections" />
  </div>
</template>

<script>
import MessagesConversation from '~/components/connections/MessagesConversation'
import MessagesUsersList from '~/components/connections/MessagesUsersList'
import ConnectionsNavbar from '~/components/connections/ConnectionsNavbar'
import SoonBanner from '~/components/banners/SoonBanner'
import TopMobile from '~/components/site/TopMobile'
import BottomMobile from '~/components/site/BottomMobile'

export default {
  name: 'Main',
  components: {
    ConnectionsNavbar,
    MessagesUsersList,
    MessagesConversation,
    SoonBanner,
    TopMobile,
    BottomMobile
  }
}
</script>

<style lang="scss" scoped>
.c-connections {
  width: 100%;
  background-color: #fdfdfd;
  height: 100vh;
}
.c-messages {
  width: 100%;
  height: calc(100% - 76px);
  display: flex;
  &__users {
    width: 36%;
  }
  &__conversation {
    width: 64%;
  }
}
@media screen and (max-width: 1200px) {
  .c-messages {
    width: 100%;
    height: calc(100% - 76px);
    display: flex;
    &__users {
      width: 0%;
    }
    &__conversation {
      width: 100%;
    }
  }
}
</style>
