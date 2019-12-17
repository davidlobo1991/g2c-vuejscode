<template>
  <section class="c-account">
    <AccountNavbar active-tab="Account" />
    <div class="c-account__wrapper-section">
      <div class="c-account__left-cont">
        <AccountProfile />
      </div>
      <div class="c-account__right-cont">
        <AccountStats />
        <AccountPricing />
        <AccountMeetings />
      </div>
    </div>
  </section>
</template>

<script>
import AccountNavbar from '~/components/account/AccountNavbar'
import AccountProfile from '~/components/account/AccountProfile'
import AccountStats from '~/components/account/AccountStats'
import AccountPricing from '~/components/account/AccountPricing'
import AccountMeetings from '~/components/account/AccountMeetings'

export default {
  name: 'Network',
  components: {
    AccountNavbar,
    AccountProfile,
    AccountStats,
    AccountPricing,
    AccountMeetings
  },
  data: () => ({}),
  methods: {}
}
</script>

<style lang="scss" scoped>
.c-account {
  width: 100%;
  height: 100%;
  background-color: #fdfdfd;
  &__wrapper-section {
    width: 100%;
    padding: 25px;
    display: flex;
  }
  &__right-cont {
    width: 40%;
    margin-left: 12px;
  }
  &__left-cont {
    width: 60%;
    margin-right: 12px;
  }
}
</style>
