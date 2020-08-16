<template>
  <section class="c-bottom-mobile">
    <div class="c-bottom-mobile__wrapper">
      <div>
        <div class="c-bottom-mobile__profile-img-cont">
          <nuxt-link
            :src="require('@/assets/images/default.png')"
            tag="img"
            to="/account/profile"
            class="c-bottom-mobile__profile-img"
          />
        </div>
      </div>
      <nuxt-link :to="localePath('home')" title="Network">
        <v-icon
          v-bind:class="
            activeTab === 'network' ? 'c-bottom-mobile__icon-active' : ''
          "
          class="c-bottom-mobile__icon"
        >
          mdi-account-multiple
        </v-icon>
      </nuxt-link>
      <nuxt-link :to="localePath('/connections/messages')" title="Network">
        <v-icon
          v-bind:class="
            activeTab === 'connections' ? 'c-bottom-mobile__icon-active' : ''
          "
          class="c-bottom-mobile__icon"
        >
          mdi-message-text
        </v-icon>
      </nuxt-link>
      <nuxt-link :to="localePath('/emeetings/requests')" title="Network">
        <v-icon
          v-bind:class="
            activeTab === 'emeetings' ? 'c-bottom-mobile__icon-active' : ''
          "
          class="c-bottom-mobile__icon"
        >
          mdi-message-video
        </v-icon>
      </nuxt-link>
      <!--      <div>-->
      <!--        <v-icon class="c-bottom-mobile__icon">-->
      <!--          mdi-forum-->
      <!--        </v-icon>-->
      <!--      </div>-->
    </div>
  </section>
</template>

<script>
export default {
  name: 'BottomMobile',
  props: {
    activeTab: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.c-bottom-mobile {
  display: none;
}
@media screen and (max-width: 768px) {
  .c-bottom-mobile {
    display: block;
    position: fixed;
    bottom: 0;
    background-color: #21273b;
    width: 100%;
    height: 80px;
    z-index: 999999999999999;

    &__wrapper {
      height: 100%;
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      justify-items: center;
      align-items: center;
    }

    &__profile-img {
      object-fit: cover;
      width: 100%;
      height: 100%;
      border-radius: 50%;
      &-cont {
        width: 44px;
        height: 44px;
        position: relative;
        border-radius: 50px;
        flex-shrink: 0;
      }
    }

    &__icon {
      color: #fff;
      opacity: 50%;
      font-size: 30px;

      &-active {
        opacity: 100%;
        color: #fff;
        font-size: 30px;
      }
    }
  }
}
@media screen and (max-width: 400px) {
  .c-bottom-mobile {
    height: 40px;
    &__profile-img {
      &-cont {
        width: 22px;
        height: 22px;
      }
    }
    &__icon {
      font-size: 18px;

      &-active {
        font-size: 18px;
      }
    }
  }
}
</style>
