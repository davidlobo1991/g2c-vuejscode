<template>
  <div class="sendfunds">
    <div class="sendfunds__info"></div>
    <div class="sendfunds__invoice"></div>
  </div>
</template>

<script>
export default {
  name: 'SendFunds.vue'
}
</script>

<style lang="scss" scoped>
.sendfunds {
  height: 100%;
  display: flex;
  &__info {
    width: 50%;
    height: 100%;
    background-color: #ffffff;
    box-shadow: 0 0 14px 2px rgba(0, 0, 0, 0.19);
  }
  &__invoice {
    width: 50%;
    height: 100%;
    background-color: #f8fbfd;
  }
}
</style>
