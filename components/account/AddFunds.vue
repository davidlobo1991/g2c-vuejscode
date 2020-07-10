<template>
  <div class="c-account__stats--link">ADD FUNDS</div>
</template>

<script>
export default {
  name: 'AddFunds.vue'
}
</script>

<style lang="scss" scoped>
.c-account {
  &__stats {
    &--link {
      display: flex;
      font-size: 18px;
      font-weight: 500;
      padding-right: 21px;
      &:last-of-type {
        padding-right: 0;
      }
    }
  }
}
</style>
