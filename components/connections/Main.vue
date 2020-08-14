<template>
  <div class="c-connections">
    <TopMobile />
    <ConnectionsNavbar active-tab="messages" />
    <div class="c-messages">
      <MessagesUsersList class="c-messages__users" />
      <MessagesConversation class="c-messages__conversation" />
    </div>
    <BottomMobile activeTab="connections" />
  </div>
</template>

<script>
import MessagesConversation from '~/components/connections/MessagesConversation'
import MessagesUsersList from '~/components/connections/MessagesUsersList'
import ConnectionsNavbar from '~/components/connections/ConnectionsNavbar'
import TopMobile from '~/components/site/TopMobile'
import BottomMobile from '~/components/site/BottomMobile'

export default {
  name: 'Main',
  components: {
    ConnectionsNavbar,
    MessagesUsersList,
    MessagesConversation,
    TopMobile,
    BottomMobile
  }
}
</script>

<style lang="scss" scoped>
.c-connections {
  width: 100%;
  background-color: #fdfdfd;
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
</style>
