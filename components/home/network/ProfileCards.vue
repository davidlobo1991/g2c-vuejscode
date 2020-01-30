<template>
  <div class="c-home__cards">
    <div class="c-home__cards__wrapper">
      <div v-on:click="showContact" class="c-home__cards__card">
        <div class="c-home__cards__card--img-cont">
          <nuxt-link
            :src="require('@/assets/images/persona1.png')"
            tag="img"
            to="/"
            class="c-home__cards__card--img"
          />
          <div class="c-home__cards__card--status u-status--available"></div>
        </div>
        <div class="c-home__cards__card--name">
          Gabel Shebera
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
        <ConnectButton status="view" />
      </div>

      <div class="c-home__cards__card">
        <div class="c-home__cards__card--img-cont">
          <nuxt-link
            :src="require('@/assets/images/persona1.png')"
            tag="img"
            to="/"
            class="c-home__cards__card--img"
          />
          <div class="c-home__cards__card--status u-status--available"></div>
        </div>
        <div class="c-home__cards__card--name">
          Gabel Shebera
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
        <ConnectButton status="connect" cost="35" />
      </div>

      <div class="c-home__cards__card">
        <div class="c-home__cards__card--img-cont">
          <nuxt-link
            :src="require('@/assets/images/persona1.png')"
            tag="img"
            to="/"
            class="c-home__cards__card--img"
          />
          <div class="c-home__cards__card--status u-status--available"></div>
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
        <ConnectButton status="connect" />
      </div>

      <div class="c-home__cards__card">
        <div class="c-home__cards__card--img-cont">
          <nuxt-link
            :src="require('@/assets/images/persona1.png')"
            tag="img"
            to="/"
            class="c-home__cards__card--img"
          />
          <div class="c-home__cards__card--status u-status--available"></div>
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
        <ConnectButton status="pending" cost="1" />
      </div>
      <div class="c-home__cards__card">
        <div class="c-home__cards__card--img-cont">
          <nuxt-link
            :src="require('@/assets/images/persona1.png')"
            tag="img"
            to="/"
            class="c-home__cards__card--img"
          />
          <div class="c-home__cards__card--status u-status--available"></div>
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
          color="#0087FF"
          dark
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
          <div class="c-home__cards__card--status u-status--available"></div>
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
          color="#0087FF"
          dark
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
          <div class="c-home__cards__card--status u-status--available"></div>
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
          color="#0087FF"
          dark
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
          <div class="c-home__cards__card--status u-status--available"></div>
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
          color="#0087FF"
          dark
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
          <div class="c-home__cards__card--status u-status--available"></div>
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
          color="#0087FF"
          dark
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
          <div class="c-home__cards__card--status u-status--available"></div>
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
          color="#0087FF"
          dark
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
          <div class="c-home__cards__card--status u-status--available"></div>
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
          color="#0087FF"
          dark
        >
          1$ - Connect
        </v-btn>
      </div>
    </div>
    <v-dialog v-model="IsShowingContactInfo" width="50%" class="c-contact-card">
      <v-card>
        <v-card-text>
          <div class="c-contact-card__cross--cont">
            <v-icon
              @click="IsShowingContactInfo = false"
              class="c-contact-card__cross"
            >
              mdi-close
            </v-icon>
          </div>
          <div class="c-contact-card__profile">
            <div class="c-contact-card__profile--img-cont">
              <nuxt-link
                :src="require('@/assets/images/persona1.png')"
                tag="img"
                to="/"
                class="c-contact-card__profile--img"
              />
              <div
                class="c-contact-card__profile--status u-status--available"
              ></div>
              <div class="c-contact-card__profile--details-cont">
                <div class="c-contact-card__profile--details">
                  <span class="c-contact-card__profile--details-num">210</span>
                  Connections
                </div>
                <div class="c-contact-card__profile--details">
                  <span class="c-contact-card__profile--details-num">176</span>
                  Recommends
                </div>
              </div>
              <ConnectButton status="connect" cost="1" />
              <!--              <v-btn-->
              <!--                depressed-->
              <!--                class="c-home__cards__card&#45;&#45;button"-->
              <!--                color="#0087FF"-->
              <!--                dark-->
              <!--              >-->
              <!--                1$ - Connect-->
              <!--              </v-btn>-->
            </div>
            <div class="c-contact-card__profile--text-cont">
              <div class="c-contact-card__profile--name">Jessica O'Mallie</div>
              <div class="c-contact-card__profile--username">@jessomallie</div>
              <div class="c-contact-card__profile--description">
                Bitcoin Estrategics, Formation in UX/UI & Animal Lover
              </div>
              <div class="c-contact-card__profile--title">Knowledge</div>
              <div class="c-contact-card__profile--label-cont">
                <v-chip
                  class="c-contact-card__profile--label"
                  color="#EFF1F2"
                  label
                >
                  Design
                </v-chip>
                <v-chip
                  class="c-contact-card__profile--label"
                  color="#EFF1F2"
                  label
                >
                  Bitcoin
                </v-chip>
                <v-chip
                  class="c-contact-card__profile--label"
                  color="#EFF1F2"
                  label
                >
                  Startups
                </v-chip>
              </div>
              <div class="c-contact-card__profile--title">Summary</div>
              <div class="c-contact-card__profile--summary">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                urna, et sodales arcu. Vestibulum at mauris ultrices, posuere,
                egestas neque. Sed erat neque, euismod vitae faucibus sit amet,
                pharetra dui. Duis vulputate eu est rutrum. Cras fermentum
                finibus iaculis lacus vehicula egestas neque. Sed erat neque,
                vita.
              </div>
              <div class="c-contact-card__profile--title">Languages</div>
              <div class="c-contact-card__profile--label-cont">
                <v-chip
                  class="c-contact-card__profile--label"
                  color="#EFF1F2"
                  label
                >
                  English
                </v-chip>
                <v-chip
                  class="c-contact-card__profile--label"
                  color="#EFF1F2"
                  label
                >
                  Spanish
                </v-chip>
              </div>
              <div class="c-contact-card__profile--title">Social Media</div>
              <div class="c-contact-card__profile--username">
                <v-icon color="#8C8C8C">mdi-linkedin-box</v-icon>
                <v-icon color="#8C8C8C">mdi-linkedin-box</v-icon>
                <v-icon color="#8C8C8C">mdi-twitter</v-icon>
                <v-icon color="#8C8C8C">mdi-facebook-box</v-icon>
                <v-icon color="#8C8C8C">mdi-instagram</v-icon>
              </div>
            </div>
          </div>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import ConnectButton from '~/components/site/ConnectButton'

export default {
  name: 'ProfileCards',
  components: {
    ConnectButton
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

<style>
.c-home__cards .v-dialog {
  width: 50%;
}
</style>
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
  &__cards {
    width: 100%;
    &__wrapper {
      width: 100%;
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      justify-items: center;
    }
    &__card {
      cursor: pointer;
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
.c-contact-card {
  width: 60% !important;
  &__cross {
    cursor: pointer;
    &--cont {
      width: 100%;
      text-align: right;
      padding-top: 20px;
    }
  }
  &__profile {
    display: flex;
    position: relative;
    padding: 0 20px 20px 20px;

    &--img-cont {
      position: relative;
      width: 235px;
      height: 235px;
      border: 2px solid #fff;
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
      width: 21px;
      height: 21px;
      bottom: 10%;
      right: 10%;
    }

    &--details-cont {
      display: flex;
      justify-content: space-between;
      width: 100%;
      padding-top: 25px;
      padding-bottom: 30px;
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

    &--text-cont {
      padding-left: 40px;
    }

    &--name {
      color: #21273b;
      padding-top: 15px;
      font-size: 19px;
      font-weight: 500;
    }

    &--username {
      color: rgba(33, 39, 59, 0.5);
      font-size: 17px;
      font-weight: 500;
    }

    &--description {
      opacity: 0.8;
      color: #525252;
      font-size: 18px;
      width: 72%;
      padding-top: 10px;
    }

    &--label {
      margin-bottom: 5px;
    }

    &--title {
      color: #21273b;
      font-size: 17px;
      font-weight: 500;
      padding-top: 25px;
      padding-bottom: 10px;
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
    &__cards {
      &__card {
        width: 95%;
      }
    }
  }
}
@media screen and (max-width: 992px) {
  .c-home {
    &__cards {
      &__wrapper {
        grid-template-columns: 1fr 1fr 1fr;
      }
    }
  }
}
@media screen and (max-width: 768px) {
  .c-home {
    &__cards {
      &__wrapper {
        grid-template-columns: 1fr 1fr;
      }
    }
  }
}
@media screen and (max-width: 500px) {
  .c-home {
    &__cards {
      &__wrapper {
        grid-template-columns: 1fr;
      }
    }
  }
}
</style>
