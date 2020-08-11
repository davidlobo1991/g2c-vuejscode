<template>
  <v-dialog v-model="isShowingContactInfo" content-class="c-contact-card">
    <v-card>
      <v-card-text>
        <div class="c-contact-card__cross--cont">
          <v-icon
            @click="isShowingContactInfo = false"
            class="c-contact-card__cross"
          >
            mdi-close
          </v-icon>
        </div>
        <div class="c-contact-card__profile">
          <div class="c-contact-card__profile--img-cont">
            <nuxt-linkconnectbutton__modal--profile-img-cont
              :src="
                activeConnection.image
                  ? `_nuxt/assets/images/network/users/${activeConnection.image}`
                  : require('~/assets/images/default.png')
              "
              tag="img"
              to="/"
              class="c-contact-card__profile--img"
            />
            <div
              class="c-contact-card__profile--status u-status--available"
            ></div>
            <div class="c-contact-card__profile--details-cont">
              <div class="c-contact-card__profile--details">
                <span class="c-contact-card__profile--details-num">{{
                  activeConnection.connections
                }}</span>
                Connections
              </div>
              <div class="c-contact-card__profile--details">
                <span class="c-contact-card__profile--details-num">{{
                  activeConnection.recommends
                }}</span>
                Recommends
              </div>
            </div>
            <ConnectButton
              :activeConnection="activeConnection"
              @sendIsShowingConnectModal="sendIsShowingConnectModal"
              @openInfoModal="isShowingContactInfo = value"
              status="connect"
              cost="1"
            />
            <div class="c-contact-card__profile--progress-cont">
              <div class="c-contact-card__profile--progress-text">
                Time left to accept the connection
              </div>
              <v-progress-linear
                value="25"
                rounded="true"
                color="#0186FF"
                background-color="#F5F8FF"
                height="7"
                class="c-contact-card__profile--progress"
              ></v-progress-linear>
              <div class="c-contact-card__profile--progress-time">
                99h 58m 12s
              </div>
            </div>
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
            <div class="c-contact-card__profile--name">
              {{ activeConnection.name }}
            </div>
            <div class="c-contact-card__profile--username">
              {{ activeConnection.nick }}
            </div>
            <div class="c-contact-card__profile--description">
              {{ activeConnection.description }}
            </div>
            <div class="c-contact-card__profile--title">Knowledge</div>
            <div class="c-contact-card__profile--label-cont">
              <v-chip
                v-for="knowledge in activeConnection.knowledge"
                class="c-contact-card__profile--label"
                color="#EFF1F2"
                label
              >
                {{ knowledge }}
              </v-chip>
            </div>
            <div class="c-contact-card__profile--title">Summary</div>
            <div class="c-contact-card__profile--summary">
              {{ activeConnection.summary }}
            </div>
            <div class="c-contact-card__profile--title">Languages</div>
            <div class="c-contact-card__profile--label-cont">
              <v-chip
                v-for="language in activeConnection.language"
                class="c-contact-card__profile--label"
                color="#EFF1F2"
                label
              >
                {{ language }}
              </v-chip>
              <div class="c-contact-card__profile--title">
                Social Media
              </div>
              <div class="c-contact-card__profile--username">
                <v-icon color="#8C8C8C">mdi-linkedin-box</v-icon>
                <v-icon color="#8C8C8C">mdi-linkedin-box</v-icon>
                <v-icon color="#8C8C8C">mdi-twitter</v-icon>
                <v-icon color="#8C8C8C">mdi-facebook-box</v-icon>
                <v-icon color="#8C8C8C">mdi-instagram</v-icon>
              </div>
            </div>
          </div>
        </div>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
import ConnectButton from '~/components/site/ConnectButton'

export default {
  name: 'ModalProfile',
  components: {
    ConnectButton
  },
  props: {
    isShowingContactInfo: {
      type: Boolean,
      default: false
    },
    activeConnection: {
      type: Object,
      // eslint-disable-next-line vue/require-valid-default-prop
      default: {}
    }
  },
  watch: {
    isShowingContactInfo(value) {
      this.$emit('isShowingContactInfo', value)
    }
  },
  methods: {
    sendIsShowingConnectModal(value) {
      this.$emit('sendIsShowingConnectModal', value)
    }
  }
}
</script>
<style>
.c-contact-card {
  max-width: 50%;
}
@media screen and (max-width: 1500px) {
  .c-contact-card {
    max-width: 90%;
    margin: 0;
  }
}
@media screen and (max-width: 400px) {
  .c-contact-card {
    max-width: 100%;
  }
}
</style>
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
.c-contact-card {
  max-width: 50%;
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

    &--img-side {
      /*width: 235px;*/
      /*flex-shrink: 0;*/
    }

    &--img-cont {
      position: relative;
      width: 235px;
      height: 235px;
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
      margin: 5px;
    }

    &--title {
      color: #21273b;
      font-size: 17px;
      font-weight: 500;
      padding-top: 25px;
      padding-bottom: 10px;
    }
    &--progress {
      margin-bottom: 15px;
      &-cont {
        padding-top: 20px;
      }
      &-text {
        text-align: center;
        font-size: 15px;
        color: #8c8c8c;
        padding-bottom: 10px;
      }
      &-time {
        color: #4d4d4d;
        font-size: 17px;
        text-align: center;
      }
      ::v-deep {
        .v-progress-linear__background {
          border: solid 1px #d1d1d2 !important;
        }
      }
    }
  }
}
@media screen and (max-width: 768px) {
  .c-contact-card {
    &__profile {
      flex-flow: column;
      &--img-cont {
        height: auto;
      }
      &--status {
        bottom: 37%;
      }
      &--text-cont {
        padding-left: 0;
      }
    }
  }
}
</style>
