<template>
  <section class="c-home">
    <TopMobile />
    <WelcomeBanner />
    <div class="c-home__wrapper">
      <div class="c-home__search--cont">
        <v-text-field
          :hide-details="true"
          v-model="filterNetwork"
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
          <li
            v-for="category in categories"
            :class="
              categoryNetwork === category
                ? 'c-home__navbar--elem-active'
                : 'c-home__navbar--elem'
            "
          >
            <a
              v-on:click="categoryNetwork = category"
              class="c-home__navbar--link"
              >{{ category }}</a
            >
          </li>
        </ul>
      </div>
      <ProfileCards
        :filterNetwork="filterNetwork"
        :categoryNetwork="categoryNetwork"
      />
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
  middleware: 'auth',
  components: {
    WelcomeBanner,
    ProfileCards,
    TopMobile,
    BottomMobile
  },
  data() {
    return {
      IsShowingContactInfo: false,
      filterNetwork: null,
      categoryNetwork: null,
      categories: [
        'My Connections',
        'Online',
        'Education',
        'Bitcoin',
        'Startups',
        'Finance',
        'Legal',
        'Health',
        'Design',
        'Marketing'
      ]
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
      padding: 22px 12px 80px 12px;
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

@media screen and (max-width: 400px) {
  .c-home {
    &__wrapper {
      padding: 22px 12px;
    }
  }
}
</style>
