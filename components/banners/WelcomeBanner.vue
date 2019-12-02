<template>
  <div class="c-banner">
    <div class="c-banner__text">
      <span class="c-banner__text--pdr">Welcome @jessicaomallie!</span>
      Fill your profile information to appear on the Network and start receving
      and requesting connections.
    </div>
    <v-btn depressed class="c-banner__button">
      Edit Profile
    </v-btn>
  </div>
</template>

<script></script>

<style lang="scss" scoped>
.c-banner {
  display: flex;
  align-items: center;
  height: 72px;
  background-color: #0087ff;
  color: #fff;
  font-size: 18px;
  padding: 0 32px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.11);
  &__text--pdr {
    padding-right: 30px;
  }
  &__button {
    color: #0087ff;
    margin-left: 25px;
    height: 40px !important;
  }
}
</style>
