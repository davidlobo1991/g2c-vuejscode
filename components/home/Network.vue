<template>
  <section class="c-home">
    <TopMobile />
    <WelcomeBanner />
    <div class="c-home__wrapper">
      <div class="c-home__search--cont">
        <v-text-field
          :hide-details="true"
          outlined
          placeholder="Who or what are you looking for?"
          append-icon="mdi-magnify"
          class="c-home__search--input"
          height="57px"
          color="#0087FF"
        >
        </v-text-field>
      </div>
      <div class="c-home__navbar">
        <ul class="c-home__navbar--list">
          <li class="c-home__navbar--elem">
            <a href="#" class="c-home__navbar--link">My Connections</a>
          </li>
          <li class="c-home__navbar--elem-active">
            <a href="#" class="c-home__navbar--link">Online</a>
          </li>
          <li class="c-home__navbar--elem">
            <a href="#" class="c-home__navbar--link">Education</a>
          </li>
          <li class="c-home__navbar--elem">
            <a href="#" class="c-home__navbar--link">Bitcoin</a>
          </li>
          <li class="c-home__navbar--elem">
            <a href="#" class="c-home__navbar--link">Startups</a>
          </li>
          <li class="c-home__navbar--elem">
            <a href="#" class="c-home__navbar--link">Finance</a>
          </li>
          <li class="c-home__navbar--elem">
            <a href="#" class="c-home__navbar--link">Legal</a>
          </li>
          <li class="c-home__navbar--elem">
            <a href="#" class="c-home__navbar--link">Health</a>
          </li>
          <li class="c-home__navbar--elem">
            <a href="#" class="c-home__navbar--link">Design</a>
          </li>
          <li class="c-home__navbar--elem">
            <a href="#" class="c-home__navbar--link">Marketing</a>
          </li>
          <li class="c-home__navbar--elem">
            <a href="#" class="c-home__navbar--link">Coding</a>
          </li>
        </ul>
      </div>
      <ProfileCards />
    </div>
    <BottomMobile />
  </section>
</template>

<script>
import WelcomeBanner from '~/components/banners/WelcomeBanner'
import ProfileCards from '~/components/home/network/ProfileCards'
import TopMobile from '~/components/site/TopMobile'
import BottomMobile from '~/components/site/BottomMobile'

export default {
  name: 'Network',
  components: {
    WelcomeBanner,
    ProfileCards,
    TopMobile,
    BottomMobile
  },
  data() {
    return {
      IsShowingContactInfo: false
    }
  },
  methods: {
    showContact() {
      // Llamada AJAX al endpoint
      this.IsShowingContactInfo = true
    }
  }
}
</script>

<style lang="scss" scoped>
/* Clase repetida en componente Sidebar. Buescar manera de ponerla global */
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
.c-home {
  background-color: #fdfdfd;
  width: 100%;
  &__wrapper {
    display: flex;
    flex-flow: column;
    align-items: center;
    padding: 36px 25px;
  }
  &__search {
    &--cont {
      // background-color: red;
      display: flex;
      min-width: 576px;
    }
    &--input {
    }
  }
  &__navbar {
    // background-color: blue;
    width: 100%;
    padding: 36px 0;
    color: #8c8c8c;
    font-size: 18px;
    font-weight: 500;
    &--list {
      padding: 0;
      display: flex;
      justify-content: space-around;
    }
    &--elem {
      display: inline-block;
      &-active {
        & a {
          display: inline-block;
          color: #0087ff;
        }
      }
    }
    &--link {
      color: #8c8c8c;
      &:hover {
        color: #545454;
      }
    }
  }
}

@media screen and (max-width: 1500px) {
  .c-home {
    &__navbar {
      font-size: 15px;
    }
    &__search {
      &--cont {
        min-width: 436px;
      }
      &--input {
        // max-width: 436px;
      }
    }
  }
}
@media screen and (max-width: 768px) {
  .c-home {
    &__wrapper {
      padding: 22px 12px;
    }
    &__navbar {
      font-size: 13px;
      &--list {
        flex-wrap: wrap;
      }
      &--elem {
        background-color: #eff1f2;
        padding: 8px;
        border-radius: 4px;
        margin: 6px;
        &-active {
          background-color: #0087ff;
          padding: 8px;
          border-radius: 4px;
          margin: 6px;
          & a {
            color: #fff;
          }
        }
      }
    }
    &__search {
      &--cont {
        min-width: 100%;
      }
    }
  }
}
</style>
