<template>
  <section class="c-sidebar">
    <div class="c-sidebar__wrapper">
      <nuxt-link
        :src="require('@/assets/svg/networksv_logo_white.svg')"
        tag="img"
        to="/home"
        class="c-sidebar__logo"
      />
      <div class="c-sidebar__profile--cont">
        <div class="c-sidebar__profile--img-cont">
          <nuxt-link
            :src="require('@/assets/images/persona1.jpg')"
            tag="img"
            to="/"
            class="c-sidebar__profile--img"
          />
          <div class="c-sidebar__profile--status u-status--available"></div>
        </div>
        <div class="c-sidebar__profile--name">Jessica O'Malllie</div>
      </div>
      <ul class="c-sidebar__menu--cont">
        <li class="c-sidebar__menu--item-active">
          <a href="" class="c-sidebar__menu--link">
            <v-icon class="c-sidebar__menu--icon">
              mdi-account-multiple
            </v-icon>
            Network
          </a>
        </li>
        <li class="c-sidebar__menu--item">
          <a href="" class="c-sidebar__menu--link">
            <v-icon class="c-sidebar__menu--icon">
              mdi-message-text
            </v-icon>
            Messages
          </a>
        </li>
        <li class="c-sidebar__menu--item">
          <a href="" class="c-sidebar__menu--link">
            <v-icon class="c-sidebar__menu--icon">
              mdi-bookmark-multiple
            </v-icon>
            eMeetings
          </a>
        </li>
        <li class="c-sidebar__menu--item">
          <a href="" class="c-sidebar__menu--link">
            <v-icon class="c-sidebar__menu--icon">
              mdi-forum
            </v-icon>
            Forum
          </a>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Sidebar'
}
</script>

<style lang="scss" scoped>
.u-status {
  &--available {
    background-color: #18de82;
  }
  &--bussy {
    background-color: #dd183c;
  }
  &--absent {
    background-color: #dbdb18;
  }
  &--invisible {
    background-color: #d6d6d6;
  }
}
.c-sidebar {
  color: #fff;
  font-size: 18px;
  font-weight: 500;
  background-color: #1f2531;
  min-width: 14%;
  &__wrapper {
    display: flex;
    flex-flow: column;
    padding-top: 32px;
    align-items: center;
  }
  &__logo {
    padding-bottom: 50px;
  }
  &__profile {
    &--cont {
      display: flex;
      flex-flow: column;
      align-items: center;
      padding-bottom: 70px;
    }
    &--img-cont {
      position: relative;
      width: 105px;
      height: 105px;
      margin-bottom: 13px;
      border: 2px solid #fff;
      border-radius: 50px;
    }
    &--img {
      object-fit: cover;
      width: 100%;
      height: 100%;
      border-radius: 50px;
    }
    &--status {
      position: absolute;
      border-radius: 50px;
      border: 2px solid #fff;
      width: 15px;
      height: 15px;
      bottom: 6%;
      right: 6%;
    }
    &--name {
    }
  }
  &__menu {
    &--cont {
      color: #8c8c8c;
      padding: 0;
      width: 90%;
    }
    &--item {
      padding-bottom: 35px;
      &-active {
        padding-bottom: 35px;
        color: #fff;
        & .c-sidebar__menu--icon {
          color: #fff;
        }
        & .c-sidebar__menu--link {
          color: #fff;
        }
      }
    }
    &--link {
      color: #8c8c8c;
      &:hover {
        color: #fff;
        & .c-sidebar__menu--icon {
          color: #fff;
        }
      }
    }
    &--icon {
      padding-right: 15px;
      color: #8c8c8c;
    }
  }
}
@media screen and (max-width: 1440px) {
  .c-sidebar {
    font-size: 15px;
    &--img-cont {
      width: 70px;
      height: 70px;
    }
    &--status {
      width: 10px;
      height: 10px;
      bottom: 6%;
      right: 6%;
      border: 1px solid #fff;
    }
  }
}
</style>
