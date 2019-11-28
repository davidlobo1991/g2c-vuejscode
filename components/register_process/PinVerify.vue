<template>
  <div class="c-info">
    <div class="c-info__text">
      Please enter the code you’ve receive in the phone number +34xxxxxxxxx965
    </div>
    <div class="c-info__pincode-cont">
      <v-text-field
        :height="pinInputHeight"
        class="c-info__pincode__number u-mrh-xs"
        outlined
        maxlength="1"
        type="number"
      ></v-text-field>
      <v-text-field
        :height="pinInputHeight"
        class="c-info__pincode__number u-mrh-xs"
        outlined
        maxlength="1"
        type="number"
      ></v-text-field>
      <v-text-field
        :height="pinInputHeight"
        class="c-info__pincode__number u-mrh-xs"
        outlined
        maxlength="1"
        type="number"
      ></v-text-field>
      <v-text-field
        :height="pinInputHeight"
        class="c-info__pincode__number u-mrh-xs"
        outlined
        maxlength="1"
        type="number"
      ></v-text-field>
      <v-text-field
        :height="pinInputHeight"
        class="c-info__pincode__number u-mrl-xs"
        outlined
        maxlength="1"
        type="number"
      ></v-text-field>
    </div>
    <div class="c-info__button--cont">
      <div class="c-info__button u-align-right">
        <v-btn depressed x-large color="primary">
          Sign in
        </v-btn>
      </div>
      <div class="c-info__responsability u-flex u-flex-between">
        <div class="c-info__responsability--text-v2 u-pdt-xxxl">
          Al hacer clic en Registrarte, aceptas nuestras Condiciones. Obtén más
          información sobre cómo recopilamos, usamos y compartimos tu
          información en la Política de datos, así como el uso que hacemos de
          las cookies y tecnologías similares en nuestra Política de cookies. Es
          posible que te enviemos notificaciones por SMS que podrás desactivar
          cuando quieras.
        </div>
      </div>
    </div>
  </div>
</template>

<script></script>

<style lang="scss" scoped>
.c-info {
  padding-left: 120px;
  padding-right: 120px;
  &__button {
    // padding-top: 60px;
    padding-right: var(--space-8xh);
  }
  &__pincode {
    &-cont {
      padding-right: var(--space-8xh);
      padding-top: 56px;
      padding-bottom: 32px;
      display: flex;
      justify-content: flex-end;
    }
    &__number {
      max-width: 64px;
      height: 64px !important;
      font-weight: bold;
      color: #4d4d4d;
      font-size: 22px;
      & input {
        text-align: center;
      }
    }
  }
}
@media screen and (max-width: 899px) {
  .c-info {
    padding-left: 17px;
    padding-right: 17px;
    padding-top: 0 !important;
    &__button--cont {
      display: flex;
      flex-flow: column-reverse;
    }
    &__button {
      padding-right: 0;
      padding-top: 35px;
      text-align: center !important;
      & button {
        min-width: 92% !important;
      }
    }
    &__responsability--text {
      &-v2 {
        font-size: 10px;
        padding-right: 15px;
        line-height: 13px;
        color: #8c8c8c;
      }
    }
    &__pincode {
      &-cont {
        padding-right: 0;
        justify-content: center;
      }
      &__number {
        max-width: 56px;
        & input {
        }
      }
    }
  }
}
</style>
