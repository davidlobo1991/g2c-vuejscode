<template>
  <section class="c-home">
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
        >
        </v-text-field>
      </div>
      <div class="c-home__navbar">
        <ul class="c-home__navbar--list">
          <li class="c-home__navbar--elem">
            <a href="#" class="c-home__navbar--link">My Connections</a>
          </li>
          <li class="c-home__navbar--elem">
            <a href="#" class="c-home__navbar--link-active">Online</a>
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
      <div class="c-home__cards">
        <div class="c-home__cards__wrapper">
          <div class="c-home__cards__card">
            <div class="c-home__cards__card--img-cont">
              <nuxt-link
                :src="require('@/assets/images/persona1.png')"
                tag="img"
                to="/"
                class="c-home__cards__card--img"
              />
              <div
                class="c-home__cards__card--status u-status--available"
              ></div>
            </div>
            <div class="c-home__cards__card--name">
              Gabel Sheber
            </div>
            <div class="c-home__cards__card--username">
              @gabelsh
            </div>
            <div class="c-home__cards__card--description">
              Company’s Legal Advisor & Chess Amateur
            </div>
            <div class="c-home__cards__card--details-cont">
              <div class="c-home__cards__card--details">
                <span class="c-home__cards__card--details-num">210</span>
                Connections
              </div>
              <div class="c-home__cards__card--details">
                <span class="c-home__cards__card--details-num">176</span>
                Recommends
              </div>
            </div>
            <v-btn text class="c-home__cards__card--button" color="primary">
              View Profile
            </v-btn>
          </div>

          <div class="c-home__cards__card">
            <div class="c-home__cards__card--img-cont">
              <nuxt-link
                :src="require('@/assets/images/persona1.png')"
                tag="img"
                to="/"
                class="c-home__cards__card--img"
              />
              <div
                class="c-home__cards__card--status u-status--available"
              ></div>
            </div>
            <div class="c-home__cards__card--name">
              Gabel Sheber
            </div>
            <div class="c-home__cards__card--username">
              @gabelsh
            </div>
            <div class="c-home__cards__card--description">
              Company’s Legal Advisor & Chess Amateur
            </div>
            <div class="c-home__cards__card--details-cont">
              <div class="c-home__cards__card--details">
                <span class="c-home__cards__card--details-num">210</span>
                Connections
              </div>
              <div class="c-home__cards__card--details">
                <span class="c-home__cards__card--details-num">176</span>
                Recommends
              </div>
            </div>
            <v-btn
              depressed
              class="c-home__cards__card--button"
              color="primary"
            >
              1$ - Connect
            </v-btn>
          </div>

          <div class="c-home__cards__card">
            <div class="c-home__cards__card--img-cont">
              <nuxt-link
                :src="require('@/assets/images/persona1.png')"
                tag="img"
                to="/"
                class="c-home__cards__card--img"
              />
              <div
                class="c-home__cards__card--status u-status--available"
              ></div>
            </div>
            <div class="c-home__cards__card--name">
              Gabel Sheber
            </div>
            <div class="c-home__cards__card--username">
              @gabelsh
            </div>
            <div class="c-home__cards__card--description">
              Company’s Legal Advisor & Chess Amateur
            </div>
            <div class="c-home__cards__card--details-cont">
              <div class="c-home__cards__card--details">
                <span class="c-home__cards__card--details-num">210</span>
                Connections
              </div>
              <div class="c-home__cards__card--details">
                <span class="c-home__cards__card--details-num">176</span>
                Recommends
              </div>
            </div>
            <v-btn
              depressed
              class="c-home__cards__card--button"
              color="primary"
            >
              Connect
            </v-btn>
          </div>

          <div class="c-home__cards__card">
            <div class="c-home__cards__card--img-cont">
              <nuxt-link
                :src="require('@/assets/images/persona1.png')"
                tag="img"
                to="/"
                class="c-home__cards__card--img"
              />
              <div
                class="c-home__cards__card--status u-status--available"
              ></div>
            </div>
            <div class="c-home__cards__card--name">
              Gabel Sheber
            </div>
            <div class="c-home__cards__card--username">
              @gabelsh
            </div>
            <div class="c-home__cards__card--description">
              Company’s Legal Advisor & Chess Amateur
            </div>
            <div class="c-home__cards__card--details-cont">
              <div class="c-home__cards__card--details">
                <span class="c-home__cards__card--details-num">210</span>
                Connections
              </div>
              <div class="c-home__cards__card--details">
                <span class="c-home__cards__card--details-num">176</span>
                Recommends
              </div>
            </div>
            <v-btn depressed class="c-home__cards__card--button">
              1$ - Pending
            </v-btn>
          </div>
          <div class="c-home__cards__card">
            <div class="c-home__cards__card--img-cont">
              <nuxt-link
                :src="require('@/assets/images/persona1.png')"
                tag="img"
                to="/"
                class="c-home__cards__card--img"
              />
              <div
                class="c-home__cards__card--status u-status--available"
              ></div>
            </div>
            <div class="c-home__cards__card--name">
              Gabel Sheber
            </div>
            <div class="c-home__cards__card--username">
              @gabelsh
            </div>
            <div class="c-home__cards__card--description">
              Company’s Legal Advisor & Chess Amateur
            </div>
            <div class="c-home__cards__card--details-cont">
              <div class="c-home__cards__card--details">
                <span class="c-home__cards__card--details-num">210</span>
                Connections
              </div>
              <div class="c-home__cards__card--details">
                <span class="c-home__cards__card--details-num">176</span>
                Recommends
              </div>
            </div>
            <v-btn
              depressed
              class="c-home__cards__card--button"
              color="primary"
            >
              1$ - Connect
            </v-btn>
          </div>

          <div class="c-home__cards__card">
            <div class="c-home__cards__card--img-cont">
              <nuxt-link
                :src="require('@/assets/images/persona1.png')"
                tag="img"
                to="/"
                class="c-home__cards__card--img"
              />
              <div
                class="c-home__cards__card--status u-status--available"
              ></div>
            </div>
            <div class="c-home__cards__card--name">
              Gabel Sheber
            </div>
            <div class="c-home__cards__card--username">
              @gabelsh
            </div>
            <div class="c-home__cards__card--description">
              Company’s Legal Advisor & Chess Amateur
            </div>
            <div class="c-home__cards__card--details-cont">
              <div class="c-home__cards__card--details">
                <span class="c-home__cards__card--details-num">210</span>
                Connections
              </div>
              <div class="c-home__cards__card--details">
                <span class="c-home__cards__card--details-num">176</span>
                Recommends
              </div>
            </div>
            <v-btn
              depressed
              class="c-home__cards__card--button"
              color="primary"
            >
              1$ - Connect
            </v-btn>
          </div>

          <div class="c-home__cards__card">
            <div class="c-home__cards__card--img-cont">
              <nuxt-link
                :src="require('@/assets/images/persona1.png')"
                tag="img"
                to="/"
                class="c-home__cards__card--img"
              />
              <div
                class="c-home__cards__card--status u-status--available"
              ></div>
            </div>
            <div class="c-home__cards__card--name">
              Gabel Sheber
            </div>
            <div class="c-home__cards__card--username">
              @gabelsh
            </div>
            <div class="c-home__cards__card--description">
              Company’s Legal Advisor & Chess Amateur
            </div>
            <div class="c-home__cards__card--details-cont">
              <div class="c-home__cards__card--details">
                <span class="c-home__cards__card--details-num">210</span>
                Connections
              </div>
              <div class="c-home__cards__card--details">
                <span class="c-home__cards__card--details-num">176</span>
                Recommends
              </div>
            </div>
            <v-btn
              depressed
              class="c-home__cards__card--button"
              color="primary"
            >
              1$ - Connect
            </v-btn>
          </div>

          <div class="c-home__cards__card">
            <div class="c-home__cards__card--img-cont">
              <nuxt-link
                :src="require('@/assets/images/persona1.png')"
                tag="img"
                to="/"
                class="c-home__cards__card--img"
              />
              <div
                class="c-home__cards__card--status u-status--available"
              ></div>
            </div>
            <div class="c-home__cards__card--name">
              Gabel Sheber
            </div>
            <div class="c-home__cards__card--username">
              @gabelsh
            </div>
            <div class="c-home__cards__card--description">
              Company’s Legal Advisor & Chess Amateur
            </div>
            <div class="c-home__cards__card--details-cont">
              <div class="c-home__cards__card--details">
                <span class="c-home__cards__card--details-num">210</span>
                Connections
              </div>
              <div class="c-home__cards__card--details">
                <span class="c-home__cards__card--details-num">176</span>
                Recommends
              </div>
            </div>
            <v-btn
              depressed
              class="c-home__cards__card--button"
              color="primary"
            >
              1$ - Connect
            </v-btn>
          </div>

          <div class="c-home__cards__card">
            <div class="c-home__cards__card--img-cont">
              <nuxt-link
                :src="require('@/assets/images/persona1.png')"
                tag="img"
                to="/account"
                class="c-home__cards__card--img"
              />
              <div
                class="c-home__cards__card--status u-status--available"
              ></div>
            </div>
            <div class="c-home__cards__card--name">
              Gabel Sheber
            </div>
            <div class="c-home__cards__card--username">
              @gabelsh
            </div>
            <div class="c-home__cards__card--description">
              Company’s Legal Advisor & Chess Amateur
            </div>
            <div class="c-home__cards__card--details-cont">
              <div class="c-home__cards__card--details">
                <span class="c-home__cards__card--details-num">210</span>
                Connections
              </div>
              <div class="c-home__cards__card--details">
                <span class="c-home__cards__card--details-num">176</span>
                Recommends
              </div>
            </div>
            <v-btn
              depressed
              class="c-home__cards__card--button"
              color="primary"
            >
              1$ - Connect
            </v-btn>
          </div>

          <div class="c-home__cards__card">
            <div class="c-home__cards__card--img-cont">
              <nuxt-link
                :src="require('@/assets/images/persona1.png')"
                tag="img"
                to="/"
                class="c-home__cards__card--img"
              />
              <div
                class="c-home__cards__card--status u-status--available"
              ></div>
            </div>
            <div class="c-home__cards__card--name">
              Gabel Sheber
            </div>
            <div class="c-home__cards__card--username">
              @gabelsh
            </div>
            <div class="c-home__cards__card--description">
              Company’s Legal Advisor & Chess Amateur
            </div>
            <div class="c-home__cards__card--details-cont">
              <div class="c-home__cards__card--details">
                <span class="c-home__cards__card--details-num">210</span>
                Connections
              </div>
              <div class="c-home__cards__card--details">
                <span class="c-home__cards__card--details-num">176</span>
                Recommends
              </div>
            </div>
            <v-btn
              depressed
              class="c-home__cards__card--button"
              color="primary"
            >
              1$ - Connect
            </v-btn>
          </div>

          <div class="c-home__cards__card">
            <div class="c-home__cards__card--img-cont">
              <nuxt-link
                :src="require('@/assets/images/persona1.png')"
                tag="img"
                to="/"
                class="c-home__cards__card--img"
              />
              <div
                class="c-home__cards__card--status u-status--available"
              ></div>
            </div>
            <div class="c-home__cards__card--name">
              Gabel Sheber
            </div>
            <div class="c-home__cards__card--username">
              @gabelsh
            </div>
            <div class="c-home__cards__card--description">
              Company’s Legal Advisor & Chess Amateur
            </div>
            <div class="c-home__cards__card--details-cont">
              <div class="c-home__cards__card--details">
                <span class="c-home__cards__card--details-num">210</span>
                Connections
              </div>
              <div class="c-home__cards__card--details">
                <span class="c-home__cards__card--details-num">176</span>
                Recommends
              </div>
            </div>
            <v-btn
              depressed
              class="c-home__cards__card--button"
              color="primary"
            >
              1$ - Connect
            </v-btn>
          </div>
        </div>
      </div>
    </div>
    <v-dialog v-model="dialog" width="500">
      <template v-slot:activator="{ on }">
        <v-btn v-on="on" color="red lighten-2" dark>
          Click Me
        </v-btn>
      </template>

      <v-card>
        <v-card-title class="headline grey lighten-2" primary-title>
          Privacy Policy
        </v-card-title>

        <v-card-text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn @click="dialog = false" color="primary" text>
            I accept
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </section>
</template>

<script>
import WelcomeBanner from '~/components/banners/WelcomeBanner'

export default {
  name: 'Network',
  components: {
    WelcomeBanner
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
        display: inline-block;
        color: #0087ff;
      }
    }
    &--link {
      color: #8c8c8c;
      &:hover {
        color: #545454;
      }
    }
  }
  &__cards {
    width: 100%;
    &__wrapper {
      width: 100%;
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      justify-items: center;
    }
    &__card {
      margin-bottom: 20px;
      font-size: 18px;
      color: #29363d;
      background-color: #fff;
      padding: 15px;
      width: 365px;
      height: 500px;
      display: flex;
      flex-flow: column;
      justify-content: space-between;
      align-items: center;
      border-radius: 5px;
      box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
      &--img-cont {
        position: relative;
        width: 163px;
        height: 163px;
        margin-bottom: 13px;
        margin-top: 7px;
        border-radius: 50px;
        flex-shrink: 0;
      }
      &--img {
        object-fit: cover;
        width: 100%;
        height: 100%;
        border-radius: 50%;
      }
      &--status {
        position: absolute;
        border-radius: 50px;
        border: 2px solid #fff;
        width: 15px;
        height: 15px;
        bottom: 10%;
        right: 10%;
      }
      &--name {
        font-weight: 500;
      }
      &--username {
        font-size: 15px;
        color: #8c8c8c;
        padding-bottom: 15px;
      }
      &--description {
        font-size: 17px;
        color: #8c8c8c;
        width: 90%;
        text-align: center;
        padding-bottom: 20px;
        min-height: 65px;
      }
      &--details-cont {
        display: flex;
        justify-content: space-between;
        padding: 0 24px;
        width: 100%;
        padding-bottom: 7px;
      }
      &--details {
        text-align: center;
        // width: 45%;
        font-size: 15px;
        color: #8c8c8c;
        &-num {
          display: block;
          color: #4d4d4d;
          font-size: 19px;
          font-weight: bold;
        }
      }
      &--button {
        width: 100%;
        height: 40px !important;
      }
    }
  }
}
@media screen and (max-width: 1800px) {
  .c-home {
    &__cards {
      &__card {
        width: 280px;
        height: 360px;
        font-size: 15px;
        &--img-cont {
          width: 122px;
          height: 122px;
        }
        &--username {
          font-size: 12px;
          padding-bottom: 10px;
        }
        &--description {
          font-size: 13px;
          min-height: 33px;
        }
        &--details {
          font-size: 12px;
          &-num {
            font-size: 16px;
          }
        }
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
</style>
