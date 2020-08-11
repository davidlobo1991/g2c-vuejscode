<template>
  <div class="c-account__navbar">
    <v-icon class="c-account__navbar--menu">
      mdi-menu-open
    </v-icon>
    <ul class="c-account__navbar--menu">
      <li
        v-bind:class="
          activeTab === 'messages' ? 'c-account__navbar--item-active' : ''
        "
        class="c-account__navbar--item"
      >
        <nuxt-link to="/connections/messages" class="c-account__navbar--link">
          Messages
        </nuxt-link>
      </li>
      <li
        v-bind:class="
          activeTab === 'requests' ? 'c-account__navbar--item-active' : ''
        "
        class="c-account__navbar--item"
      >
        <nuxt-link to="/connections/request" class="c-account__navbar--link">
          Requests Connection
        </nuxt-link>
      </li>
      <li
        v-bind:class="
          activeTab === 'sent-requests' ? 'c-account__navbar--item-active' : ''
        "
        class="c-account__navbar--item"
      >
        <nuxt-link
          to="/connections/sent-requests"
          class="c-account__navbar--link"
        >
          Sent requests
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'ConnectionsNavbar',
  props: {
    activeTab: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.c-account {
  &__navbar {
    width: 100%;
    color: rgba(82, 82, 82, 0.5);
    font-size: 18px;
    font-weight: 500;
    background-color: #fff;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
    display: flex;
    justify-content: center;
    align-items: flex-end;
    height: 76px;
    position: relative;
    &--logout-cont {
      position: absolute;
      top: 25px;
      right: 25px;
      display: flex;
      align-items: center;
    }
    &--logout-text {
      padding-right: 15px;
    }
    &--menu {
      padding: 0;
    }
    &--item {
      display: inline-block;
      margin-right: 45px;
      &:last-of-type {
        margin-right: 0;
      }
      &-active {
        color: #0087ff;
        border-bottom: 2px solid #0087ff;
        &:hover .c-account__navbar--link {
          color: #0087ff;
        }
      }
    }
    &--link {
      color: inherit;
      text-decoration: none;
      &:hover {
        color: rgba(82, 82, 82, 0.8);
      }
    }
  }
}
@media screen and (max-width: 1500px) {
  .c-account {
    &__navbar {
      font-size: 15px;
    }
  }
}

@media screen and (max-width: 768px) {
  .c-account {
    &__navbar {
      background-color: #21273b;
      color: rgba(255, 255, 255, 0.4);
      font-size: 13px;
      font-weight: normal;
      height: 45px;
      &--logout-cont {
        display: none;
      }
      &--item {
        &-active {
          color: #fff;
          border-bottom: #fff;
          &:hover .c-account__navbar--link {
            color: #fff;
          }
        }
      }
    }
  }
}
</style>
