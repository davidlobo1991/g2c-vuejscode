<template>
  <section class="c-home">
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
                :src="require('@/assets/images/persona1.jpg')"
                tag="img"
                to="/"
                class="c-home__cards__card--img"
              />
              <div
                class="c-home__cards__card--status u-status--available"
              ></div>
            </div>
            <div class="c-home__cards__card--name">Gabel Sheber</div>
            <div class="c-home__cards__card--username">@gabelsh</div>
            <div class="c-home__cards__card--description">
              Company’s Legal Advisor & Chess Amateur
            </div>
            <div class="c-home__cards__card--details-cont">
              <div class="c-home__cards__card--details">
                <span class="c-home__cards__card--details-num">210</span>
                Connexions
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
                :src="require('@/assets/images/persona1.jpg')"
                tag="img"
                to="/"
                class="c-home__cards__card--img"
              />
              <div
                class="c-home__cards__card--status u-status--available"
              ></div>
            </div>
            <div class="c-home__cards__card--name">Gabel Sheber</div>
            <div class="c-home__cards__card--username">@gabelsh</div>
            <div class="c-home__cards__card--description">
              Company’s Legal Advisor & Chess Amateur
            </div>
            <div class="c-home__cards__card--details-cont">
              <div class="c-home__cards__card--details">
                <span class="c-home__cards__card--details-num">210</span>
                Connexions
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
                :src="require('@/assets/images/persona1.jpg')"
                tag="img"
                to="/"
                class="c-home__cards__card--img"
              />
              <div
                class="c-home__cards__card--status u-status--available"
              ></div>
            </div>
            <div class="c-home__cards__card--name">Gabel Sheber</div>
            <div class="c-home__cards__card--username">@gabelsh</div>
            <div class="c-home__cards__card--description">
              Company’s Legal Advisor & Chess Amateur
            </div>
            <div class="c-home__cards__card--details-cont">
              <div class="c-home__cards__card--details">
                <span class="c-home__cards__card--details-num">210</span>
                Connexions
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
                :src="require('@/assets/images/persona1.jpg')"
                tag="img"
                to="/"
                class="c-home__cards__card--img"
              />
              <div
                class="c-home__cards__card--status u-status--available"
              ></div>
            </div>
            <div class="c-home__cards__card--name">Gabel Sheber</div>
            <div class="c-home__cards__card--username">@gabelsh</div>
            <div class="c-home__cards__card--description">
              Company’s Legal Advisor & Chess Amateur
            </div>
            <div class="c-home__cards__card--details-cont">
              <div class="c-home__cards__card--details">
                <span class="c-home__cards__card--details-num">210</span>
                Connexions
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
                :src="require('@/assets/images/persona1.jpg')"
                tag="img"
                to="/"
                class="c-home__cards__card--img"
              />
              <div
                class="c-home__cards__card--status u-status--available"
              ></div>
            </div>
            <div class="c-home__cards__card--name">Gabel Sheber</div>
            <div class="c-home__cards__card--username">@gabelsh</div>
            <div class="c-home__cards__card--description">
              Company’s Legal Advisor & Chess Amateur
            </div>
            <div class="c-home__cards__card--details-cont">
              <div class="c-home__cards__card--details">
                <span class="c-home__cards__card--details-num">210</span>
                Connexions
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
                :src="require('@/assets/images/persona1.jpg')"
                tag="img"
                to="/"
                class="c-home__cards__card--img"
              />
              <div
                class="c-home__cards__card--status u-status--available"
              ></div>
            </div>
            <div class="c-home__cards__card--name">Gabel Sheber</div>
            <div class="c-home__cards__card--username">@gabelsh</div>
            <div class="c-home__cards__card--description">
              Company’s Legal Advisor & Chess Amateur
            </div>
            <div class="c-home__cards__card--details-cont">
              <div class="c-home__cards__card--details">
                <span class="c-home__cards__card--details-num">210</span>
                Connexions
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
                :src="require('@/assets/images/persona1.jpg')"
                tag="img"
                to="/"
                class="c-home__cards__card--img"
              />
              <div
                class="c-home__cards__card--status u-status--available"
              ></div>
            </div>
            <div class="c-home__cards__card--name">Gabel Sheber</div>
            <div class="c-home__cards__card--username">@gabelsh</div>
            <div class="c-home__cards__card--description">
              Company’s Legal Advisor & Chess Amateur
            </div>
            <div class="c-home__cards__card--details-cont">
              <div class="c-home__cards__card--details">
                <span class="c-home__cards__card--details-num">210</span>
                Connexions
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
                :src="require('@/assets/images/persona1.jpg')"
                tag="img"
                to="/"
                class="c-home__cards__card--img"
              />
              <div
                class="c-home__cards__card--status u-status--available"
              ></div>
            </div>
            <div class="c-home__cards__card--name">Gabel Sheber</div>
            <div class="c-home__cards__card--username">@gabelsh</div>
            <div class="c-home__cards__card--description">
              Company’s Legal Advisor & Chess Amateur
            </div>
            <div class="c-home__cards__card--details-cont">
              <div class="c-home__cards__card--details">
                <span class="c-home__cards__card--details-num">210</span>
                Connexions
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
                :src="require('@/assets/images/persona1.jpg')"
                tag="img"
                to="/"
                class="c-home__cards__card--img"
              />
              <div
                class="c-home__cards__card--status u-status--available"
              ></div>
            </div>
            <div class="c-home__cards__card--name">Gabel Sheber</div>
            <div class="c-home__cards__card--username">@gabelsh</div>
            <div class="c-home__cards__card--description">
              Company’s Legal Advisor & Chess Amateur
            </div>
            <div class="c-home__cards__card--details-cont">
              <div class="c-home__cards__card--details">
                <span class="c-home__cards__card--details-num">210</span>
                Connexions
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
                :src="require('@/assets/images/persona1.jpg')"
                tag="img"
                to="/"
                class="c-home__cards__card--img"
              />
              <div
                class="c-home__cards__card--status u-status--available"
              ></div>
            </div>
            <div class="c-home__cards__card--name">Gabel Sheber</div>
            <div class="c-home__cards__card--username">@gabelsh</div>
            <div class="c-home__cards__card--description">
              Company’s Legal Advisor & Chess Amateur
            </div>
            <div class="c-home__cards__card--details-cont">
              <div class="c-home__cards__card--details">
                <span class="c-home__cards__card--details-num">210</span>
                Connexions
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
                :src="require('@/assets/images/persona1.jpg')"
                tag="img"
                to="/"
                class="c-home__cards__card--img"
              />
              <div
                class="c-home__cards__card--status u-status--available"
              ></div>
            </div>
            <div class="c-home__cards__card--name">Gabel Sheber</div>
            <div class="c-home__cards__card--username">@gabelsh</div>
            <div class="c-home__cards__card--description">
              Company’s Legal Advisor & Chess Amateur
            </div>
            <div class="c-home__cards__card--details-cont">
              <div class="c-home__cards__card--details">
                <span class="c-home__cards__card--details-num">210</span>
                Connexions
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
  </section>
</template>

<script>
export default {
  name: 'Network'
}
</script>

<style lang="scss" scoped>
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
@media screen and (max-width: 1440px) {
  .c-home {
    &__navbar {
      font-size: 15px;
    }
  }
}
</style>
