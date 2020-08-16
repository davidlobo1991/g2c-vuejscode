<template>
  <section class="c-sidebar">
    <div class="c-sidebar__wrapper">
      <div class="c-sidebar__fixed-cont">
        <nuxt-link
          :to="localePath('home')"
          :src="require('@/assets/svg/networksv_logo_white.svg')"
          tag="img"
          class="c-sidebar__logo"
          title="Home"
        />
        <div v-if="$auth.loggedIn" class="c-sidebar__profile--cont">
          <div class="c-sidebar__profile--img-cont">
            <template>
              <nuxt-link
                :to="localePath('/account/profile')"
                :src="require('~/assets/images/default.png')"
                tag="img"
                class="c-sidebar__profile--img"
                title="Account Profile"
              />
            </template>
            <div class="c-sidebar__profile--status u-status--available"></div>
          </div>
          <div v-if="$auth.user.name" class="c-sidebar__profile--name">
            {{ $auth.user.name }} {{ $auth.user.surname }}
          </div>
          <div v-else class="c-sidebar__profile--name">
            @{{ $auth.user.data.nick }}
          </div>
        </div>
        <ul class="c-sidebar__menu--cont">
          <li
            v-bind:class="
              activeTab === 'network' ? 'c-sidebar__menu--item-active' : ''
            "
            class="c-sidebar__menu--item"
          >
            <nuxt-link
              :to="localePath('home')"
              class="c-sidebar__menu--link"
              title="Network"
            >
              <v-icon class="c-sidebar__menu--icon">
                mdi-account-multiple
              </v-icon>
              Network
            </nuxt-link>
            <span
              v-if="badgeNetworkTotal > 0"
              class="c-sidebar__menu--notification"
            >
              {{ badgeNetworkTotal }}
            </span>
          </li>
          <li
            v-bind:class="
              activeTab === 'connections' ? 'c-sidebar__menu--item-active' : ''
            "
            class="c-sidebar__menu--item"
          >
            <nuxt-link
              :to="localePath('/connections/messages')"
              class="c-sidebar__menu--link"
              title="Connections"
            >
              <v-icon class="c-sidebar__menu--icon">
                mdi-message-text
              </v-icon>
              Connections
            </nuxt-link>
            <span
              v-if="badgeConnectionsTotal > 0"
              class="c-sidebar__menu--notification"
            >
              {{ badgeConnectionsTotal }}
            </span>
          </li>
          <li
            v-bind:class="
              activeTab === 'emeetings' ? 'c-sidebar__menu--item-active' : ''
            "
            class="c-sidebar__menu--item"
          >
            <nuxt-link
              :to="localePath('/emeetings/requests')"
              class="c-sidebar__menu--link"
              title="eMeetings"
            >
              <v-icon class="c-sidebar__menu--icon">
                mdi-message-video
              </v-icon>
              eMeetings
            </nuxt-link>
            <span
              v-if="badgeeMeetingsTotal > 0"
              class="c-sidebar__menu--notification"
            >
              {{ badgeeMeetingsTotal }}
            </span>
          </li>

          <li class="c-sidebar__menu--item">
            <v-btn
              @click="logout"
              class="c-sidebar__menu--link c-sidebar-logout"
              title="eMeetings"
              depressed
            >
              <v-icon class="c-sidebar__menu--icon">
                mdi-login
              </v-icon>
              Logout
            </v-btn>
          </li>

          <!--          <li class="c-sidebar__menu&#45;&#45;item">-->
          <!--            <a href="" class="c-sidebar__menu&#45;&#45;link">-->
          <!--              <v-icon class="c-sidebar__menu&#45;&#45;icon">-->
          <!--                mdi-forum-->
          <!--              </v-icon>-->
          <!--              Forum-->
          <!--            </a>-->
          <!--          </li>-->
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
import { login } from '~/mixins/login'
export default {
  name: 'Sidebar',
  mixins: [login],
  props: {
    activeTab: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      baseFilesURL: process.env.baseFilesURL,
      badgeNetworkTotal: 0,
      badgeConnectionsTotal: 4,
      badgeeMeetingsTotal: 0
    }
  },
  mounted() {
    // TODO filter and count connections pending. Access to user info from store
    // eslint-disable-next-line no-console
    // console.log(this.$auth.$state.user.data.connections)
    // this.badgeConnectionsTotal = this.$auth.$state.user.connections
  },
  methods: {
    async logout() {
      await this.handleLogout()
    }
  }
}
</script>

<style lang="scss" scoped>
/* Clase repetida en componente Network. Buescar manera de ponerla global */
.u-status {
  &--available {
    background-color: #18de82;
  }
  &--bussy {
    background-color: #dd183c;
  }
  &--absent {
    background-color: #dbdb18;
  }
  &--invisible {
    background-color: #d6d6d6;
  }
}
.c-sidebar {
  color: #fff;
  font-size: 18px;
  font-weight: 500;
  background-color: #1f2531;
  min-width: 14%;
  &__wrapper {
    padding: 32px 15px;
  }
  &__fixed-cont {
    min-width: 12%;
    position: fixed;
    text-align: center;
  }
  &__logo {
    padding-bottom: 50px;
    cursor: pointer;
  }
  &-logout {
    background: transparent !important;
    margin: 0;
    border: 0;
    font-size: inherit;
    height: auto !important;
    min-width: 0 !important;
    text-transform: none;
    padding: 0 !important;

    &:hover {
      color: black;
      background: transparent !important;
    }
  }
  &__profile {
    &--cont {
      display: flex;
      flex-flow: column;
      align-items: center;
      padding-bottom: 70px;
      cursor: pointer;
    }
    &--img-cont {
      position: relative;
      width: 105px;
      height: 105px;
      margin-bottom: 13px;
      border: 2px solid #fff;
      border-radius: 100%;
      background-color: #fff;
    }
    &--img {
      object-fit: cover;
      width: 100%;
      height: 100%;
      border-radius: 100%;
    }
    &--status {
      position: absolute;
      border-radius: 100%;
      border: 2px solid #fff;
      width: 15px;
      height: 15px;
      bottom: 6%;
      right: 6%;
    }
    &--name {
      color: #8c8c8c;
    }
  }
  &__menu {
    &--cont {
      color: #8c8c8c;
      padding: 0;
      width: 100%;
    }
    &--item {
      padding-bottom: 35px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      &-active {
        padding-bottom: 35px;
        color: #fff;
        display: flex;
        justify-content: space-between;
        align-items: center;
        & .c-sidebar__menu--icon {
          color: #fff !important;
        }
        & .c-sidebar__menu--link {
          color: #fff;
        }
      }
    }
    &--link {
      color: #8c8c8c;
      &:hover {
        color: #fff;
        & .c-sidebar__menu--icon {
          color: #fff !important;
        }
      }
    }
    &--notification {
      background-color: #f34101;
      color: #fff;
      font-size: 12px;
      border-radius: 50px;
      display: inline-flex;
      justify-content: center;
      align-items: center;
      height: 20px;
      min-width: 20px;
      padding: 0 4px;
    }
    &--icon {
      padding-right: 15px;
      color: #8c8c8c !important;
    }
  }
}
@media screen and (max-width: 1500px) {
  .c-sidebar {
    font-size: 15px;
    min-width: 200px;
    &__logo {
      width: 100px;
    }
    &__profile {
      &--img-cont {
        width: 70px;
        height: 70px;
        border: 1px solid #fff;
      }
      &--status {
        width: 10px;
        height: 10px;
        bottom: 6%;
        right: 6%;
        border: 1px solid #fff;
      }
    }
    &__menu {
      &--icon {
        font-size: 17px;
      }
    }
  }
}
@media screen and (max-width: 768px) {
  .c-sidebar {
    display: none;
  }
}
</style>
