<template>
  <div class="c-info">
    <div class="c-info__text">
      <span class="c-info__text--title">
        Title Text
      </span>
      Text explaining why do we need your email. We won't spam.
    </div>
    <div class="c-info__input-cont">
      <v-text-field label="Email" outlined class="c-info__input">
      </v-text-field>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RegisterEmail'
}
</script>

<style lang="scss" scoped>
.v-text-field__slot {
  font-size: 80px !important;
}
.c-info {
  color: #4d4d4d;
  font-size: 22px;
  &__text {
    color: #4d4d4d;
    font-family: Roboto;
    line-height: 40px;
    text-align: center;
    &--title {
      display: block;
      font-size: 25px;
      font-weight: 500;
      padding-bottom: 40px;
    }
  }
  &__input-cont {
    max-width: 40%;
    margin: 0 auto;
    padding-top: 40px;
  }
  &__input {
    text-align: center;
    & input {
      font-size: 80px;
    }
  }
}
@media screen and (max-width: 899px) {
  .c-info {
    padding-left: 17px;
    padding-right: 17px;
    padding-top: 0 !important;
    &__text {
      padding-top: 0 !important;
      font-size: 12px;
      line-height: 15px;
    }
  }
}
</style>
