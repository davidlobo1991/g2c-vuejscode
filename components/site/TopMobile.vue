<template>
  <div class="c-top-mobile__space">
    <section class="c-top-mobile">
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
  position: fixed;
  background-color: #21273b;
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9;
  &__space {
    display: block;
    height: 40px;
  }
  &__img-cont {
    height: 18px;
  }
  &__img {
    height: 100%;
  }
}
</style>
