<template>
  <section class="c-settings">
    <AccountNavbar active-tab="Settings" />
    <div class="c-settings__wrapper">
      <div class="c-settings__box">
        <div class="c-settings__title">
          Contact Info
        </div>
        <div class="c-settings__option-cont">
          <span>
            <span class="c-settings__option">Email</span>
            <span class="c-settings__current-setting">
              jessica@emailaddress.com
            </span>
          </span>
          <a href="#" class="c-settings--link">Add Email</a>
        </div>
        <div class="c-settings__option-cont">
          <span>
            <span class="c-settings__option">Phone</span>
            <span class="c-settings__current-setting">+34 628733965</span>
          </span>
          <a href="#" class="c-settings--link">Change Phone</a>
        </div>
      </div>
      <div class="c-settings__box">
        <div class="c-settings__title">
          Notifications
        </div>
        <div class="c-settings__option-cont">
          <span>
            <span class="c-settings__option">Connexion Request</span>
          </span>
          <v-switch class="mt-0 pt-0" hide-details></v-switch>
        </div>
        <div class="c-settings__option-cont">
          <span>
            <span class="c-settings__option">Messages</span>
          </span>
          <v-switch class="mt-0 pt-0" hide-details></v-switch>
        </div>
        <div class="c-settings__option-cont">
          <span>
            <span class="c-settings__option">eMeeting Request</span>
          </span>
          <v-switch class="mt-0 pt-0" hide-details></v-switch>
        </div>
        <div class="c-settings__option-cont">
          <span>
            <span class="c-settings__option">eMeeting Confirmed</span>
          </span>
          <v-switch class="mt-0 pt-0" hide-details></v-switch>
        </div>
        <div class="c-settings__option-cont">
          <span>
            <span class="c-settings__option">Upcoming eMeeting</span>
          </span>
          <v-switch class="mt-0 pt-0" hide-details></v-switch>
        </div>
      </div>
      <div class="c-settings__box">
        <div class="c-settings__title-alone">
          Currency
        </div>
      </div>
      <div class="c-settings__box">
        <div class="c-settings__title-alone">
          Set a Wallet pin
        </div>
      </div>
      <div class="c-settings__box">
        <div class="c-settings__title-alone">
          Invite friends
        </div>
      </div>
      <ul class="c-settings--list">
        <li class="c-settings--elem">
          <a href="" class="c-settings--link">Support & FAQs</a>
        </li>
        <li class="c-settings--elem">
          <a href="" class="c-settings--link">
            Privacy Policy and Terms & Conditions
          </a>
        </li>
        <li class="c-settings--elem">
          <a href="" class="c-settings--link">Deactivate account</a>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import AccountNavbar from '~/components/account/AccountNavbar'

export default {
  name: 'Settings',
  components: {
    AccountNavbar
  },
  data: () => ({}),
  methods: {}
}
</script>

<style lang="scss" scoped>
.c-settings {
  width: 100%;
  height: 100%;
  background-color: #fdfdfd;
  &__wrapper {
    padding: 25px;
  }
  &__box {
    background-color: #fff;
    border-radius: 4px;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
    padding: 20px;
    font-size: 18px;
    color: #4d4d4d;
    margin-bottom: 25px;
  }
  &__title {
    font-weight: 500;
    padding-bottom: 30px;
  }
  &__title-alone {
    font-weight: 500;
  }
  &__option-cont {
    display: flex;
    justify-content: space-between;
    padding-bottom: 30px;
    &:last-of-type {
      padding-bottom: 10px;
    }
  }
  &__option {
    min-width: 115px;
    display: inline-block;
  }
  &__current-setting {
    color: #8c8c8c;
  }
  &--list {
    padding-top: 10px;
  }
  &--elem {
    padding-bottom: 25px;
  }
  &--link {
    color: #0087ff;
    font-weight: 500;
  }
}
</style>
