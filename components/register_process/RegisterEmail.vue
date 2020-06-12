<template>
  <div class="c-info">
    <div class="c-info__text">
      <span class="c-info__text--title">
        Title Text
      </span>
      Text explaining why do we need your email. We won't spam.
    </div>
    <div class="c-info__input-cont">
      <v-text-field
        v-model="registerEmail"
        :rules="[rules.required, rules.email]"
        label="Email"
        outlined
        class="c-info__input"
        hide-details="auto"
      >
      </v-text-field>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RegisterEmail',
  data() {
    return {
      registerEmail: null,
      rules: {
        required: (value) => !!value || 'Required.',
        email: (value) => {
          const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          return pattern.test(value) || 'Invalid e-mail.'
        }
      }
    }
  },
  watch: {
    registerEmail(value) {
      this.registerEmail = value
      this.$emit('registerEmail', this.registerEmail)
    }
  }
}
</script>

<style>
.c-info__input .v-input__control .v-input__slot {
  font-size: 30px;
  height: 90px;
}
.c-info__input .v-input__control .v-input__slot .v-text-field__slot .v-label {
  font-size: 23px;
  top: 34px !important;
}
.c-info__input
  .v-input__control
  .v-input__slot
  .v-text-field__slot
  .v-label--active {
  transform: translateY(-38px) scale(0.75) !important;
}
@media screen and (max-width: 1500px) {
  .c-info__input .v-input__control .v-input__slot {
    font-size: 15px;
    height: 64px;
  }
  .c-info__input .v-input__control .v-input__slot .v-text-field__slot .v-label {
    font-size: 15px;
    top: 22px !important;
  }
  .c-info__input
    .v-input__control
    .v-input__slot
    .v-text-field__slot
    .v-label--active {
    transform: translateY(-25px) scale(0.75) !important;
  }
}
@media screen and (max-width: 768px) {
  .c-info__input .v-input__control .v-input__slot {
    /*font-size: 20px;*/
    height: 46px;
  }
  .c-info__input .v-input__control .v-input__slot .v-text-field__slot .v-label {
    /*font-size: 20px;*/
    top: 14px !important;
  }
  .c-info__input
    .v-input__control
    .v-input__slot
    .v-text-field__slot
    .v-label--active {
    transform: translateY(-25px) scale(0.75) !important;
  }
}
</style>
<style lang="scss" scoped>
.v-text-field__slot {
  font-size: 80px !important;
}
.c-info {
  color: #4d4d4d;
  font-size: 20px;
  &__text {
    color: #4d4d4d;
    font-family: Roboto;
    line-height: 40px;
    text-align: center;
    &--title {
      display: block;
      font-size: 25px;
      font-weight: 500;
      padding-bottom: 10px;
      color: #202739;
    }
  }
  &__input-cont {
    max-width: 46%;
    margin: 0 auto;
    padding: 40px 0 12px 0;
  }
  &__input {
    text-align: center;
    padding-bottom: 20px;
    & input {
      font-size: 80px;
    }
  }
}
@media screen and (max-width: 1500px) {
  .c-info {
    &__text {
      padding-top: 0 !important;
      font-size: 15px;
      &--title {
        font-size: 18px;
      }
    }
    &__input-cont {
      /*max-width: none;*/
      /*width: 100%;*/
    }
  }
}
@media screen and (max-width: 768px) {
  .c-info {
    &__text {
      padding-top: 0 !important;
      font-size: 12px;
      line-height: 15px;
      &--title {
        font-size: 18px;
      }
    }
    &__input-cont {
      max-width: none;
      width: 100%;
    }
  }
}
</style>
