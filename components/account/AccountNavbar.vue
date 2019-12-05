<template>
  <div class="c-account__navbar">
    <ul class="c-account__navbar--menu">
      <li class="c-account__navbar--item-active">
        <a href="#" class="c-account__navbar--link">ACCOUNT</a>
      </li>
      <li class="c-account__navbar--item">
        <a href="#" class="c-account__navbar--link">CALENDAR</a>
      </li>
      <li class="c-account__navbar--item">
        <a href="#" class="c-account__navbar--link">ACTIVITY</a>
      </li>
      <li class="c-account__navbar--item">
        <a href="#" class="c-account__navbar--link">SETTINGS</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'AccountNavbar'
}
</script>

<style lang="scss" scoped>
.c-account {
  &__navbar {
    color: rgba(82, 82, 82, 0.5);
    font-size: 18px;
    font-weight: 500;
    background-color: #fff;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
    display: flex;
    justify-content: center;
    align-items: flex-end;
    height: 76px;
    &--menu {
      padding: 0;
    }
    &--item {
      display: inline-block;
      padding-right: 45px;
      &-active {
        display: inline-block;
        color: #0087ff;
        border-bottom: 2px solid #0087ff;
        margin-right: 45px;
        &:hover .c-account__navbar--link {
          color: #0087ff;
        }
      }
    }
    &--link {
      color: inherit;
      text-decoration: none;
      &:hover {
        color: rgba(82, 82, 82, 0.8);
      }
    }
  }
}
</style>
