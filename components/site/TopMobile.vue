<template>
  <div class="c-top-mobile__space">
    <section class="c-top-mobile">
      <div class="c-top-mobile__logout-cont">
        <v-icon color="rgba(255, 255, 255, 0.4)">
          mdi-exit-to-app
        </v-icon>
      </div>
      <div class="c-top-mobile__img-cont">
        <nuxt-link
          :src="require('@/assets/svg/networksv_logo_white.svg')"
          tag="img"
          to="/home"
          class="c-top-mobile__img"
        />
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'TopMobile'
}
</script>

<style lang="scss" scoped>
.c-top-mobile {
  display: none;
}
@media screen and (max-width: 768px) {
  .c-top-mobile {
    display: flex;
    position: fixed;
    background-color: #21273b;
    width: 100%;
    height: 80px;
    justify-content: center;
    align-items: center;
    z-index: 9;
    &__space {
      display: block;
      height: 80px;
    }
    &__img-cont {
      height: 36px;
    }
    &__img {
      height: 100%;
    }
    &__logout-cont {
      position: absolute;
      top: 30px;
      right: 25px;
    }
  }
}
@media screen and (max-width: 400px) {
  .c-top-mobile {
    height: 40px;
    &__space {
      height: 40px;
    }
    &__img-cont {
      height: 18px;
    }
    &__logout-cont {
      top: 12px;
      right: 12px;
    }
  }
}
</style>
