<template>
  <div class="c-banner__space">
    <div class="c-banner">
      <div class="c-banner__text">
        <span class="c-banner__text--pdr">Welcome @jessicaomallie!</span>
        Fill your profile information to appear on the Network and start
        receving and requesting connections.
      </div>
      <div class="c-banner__close">
        <v-icon dark class="c-banner__close--icon">mdi-close</v-icon>
        <v-btn depressed class="c-banner__button">
          Edit Profile
        </v-btn>
      </div>
    </div>
  </div>
</template>

<script></script>

<style lang="scss" scoped>
.c-banner {
  position: fixed;
  z-index: 9;
  width: 100%;
  display: flex;
  align-items: center;
  height: 72px;
  background-color: #0087ff;
  color: #fff;
  font-size: 18px;
  padding: 0 32px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.11);
  box-sizing: border-box;
  &__space {
    display: block;
    height: 72px;
  }
  &__text--pdr {
    padding-right: 30px;
  }
  &__button {
    color: #0087ff;
    margin-left: 25px;
    height: 40px !important;
  }
  &__close {
    &--icon {
      display: none;
    }
  }
}
@media screen and (max-width: 1500px) {
  .c-banner {
    font-size: 15px;
    padding: 0 32px;
  }
}

@media screen and (max-width: 768px) {
  .c-banner {
    font-size: 12px;
    padding: 10px;
    height: 110px;
    position: static;
    &__space {
      height: 110px;
    }
    &__text--pdr {
      font-weight: bold;
      display: block;
    }
    &__button {
      max-width: 90px;
      font-size: 13px;
      letter-spacing: 0.1px;
    }
    &__close {
      text-align: right;
      height: 100%;
      display: flex;
      flex-flow: column;
      justify-content: space-between;
      align-items: flex-end;
      &--icon {
        display: block;
      }
    }
  }
}
</style>
