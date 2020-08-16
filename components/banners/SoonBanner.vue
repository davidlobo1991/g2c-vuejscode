<template>
  <div class="soon">
    <div class="soon__message">
      Work in progress. Soon.
    </div>
  </div>
</template>

<script>
export default {
  name: 'SoonBanner.vue'
}
</script>

<style lang="scss" scoped>
.soon {
  background-color: red;
  position: absolute;
  width: 100%;
  height: calc(100% - 76px);
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 9999999;
  &__message {
    background-color: red;
    color: #fff;
    height: 50px;
    display: flex;
    align-items: center;
    font-size: 30px;
    padding: 0 20px;
  }
}
</style>
