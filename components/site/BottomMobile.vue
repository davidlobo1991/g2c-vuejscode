<template>
  <section class="c-bottom-mobile">
    <div class="c-bottom-mobile__wrapper">
      <div>E</div>
      <div>
        <v-icon class="c-bottom-mobile__icon-active">
          mdi-account-multiple
        </v-icon>
      </div>
      <div>
        <v-icon class="c-bottom-mobile__icon">
          mdi-message-text
        </v-icon>
      </div>
      <div>
        <v-icon class="c-bottom-mobile__icon">
          mdi-bookmark-multiple
        </v-icon>
      </div>
      <div>
        <v-icon class="c-bottom-mobile__icon">
          mdi-forum
        </v-icon>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'BottomMobile'
}
</script>

<style lang="scss" scoped>
.c-bottom-mobile {
  position: fixed;
  bottom: 0;
  background-color: #21273b;
  width: 100%;
  height: 40px;
  &__wrapper {
    height: 100%;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    justify-items: center;
    align-items: center;
  }
  &__icon {
    color: #fff;
    opacity: 50%;
    font-size: 18px;
    &-active {
      opacity: 100%;
      color: #fff;
      font-size: 18px;
    }
  }
}
</style>
