<template>
  <section class="connectbutton">
    <v-btn
      v-if="status === 'view'"
      text
      class="connectbutton--button"
      color="#0087FF"
      dark
      href="/profile"
    >
      View Profile
    </v-btn>

    <v-btn
      v-if="status === 'connect'"
      v-on:click="showConnectForm"
      depressed
      class="connectbutton--button"
      color="#0087FF"
      dark
    >
      <div>
        <span v-if="cost">{{ cost }}$ - </span>
        Connect
      </div>
    </v-btn>

    <v-btn v-if="status === 'pending'" depressed class="connectbutton--button">
      <div>
        <span v-if="cost">{{ cost }}$ - </span>
        Pending
      </div>
    </v-btn>

    <div v-if="status === 'accept'" depressed class="connectbutton__accept">
      <span v-if="cost">{{ cost }}$ - &nbsp;</span>
      Accept
    </div>
    <v-dialog
      v-model="isShowingConnectModal"
      content-class="connectbutton__modal"
    >
      <v-card>
        <v-card-text>
          <div class="connectbutton__modal--wrapper">
            <div class="connectbutton__modal--topbar">
              <v-icon
                @click="returnToProfile()"
                class="connectbutton__modal--icon"
              >
                mdi-arrow-left
              </v-icon>
              <v-icon
                @click="isShowingConnectModal = false"
                class="connectbutton__modal--icon"
              >
                mdi-close
              </v-icon>
            </div>
            <div class="connectbutton__modal--profile-cont">
              <div class="connectbutton__modal--profile-img-cont">
                <nuxt-link
                  :src="
                    activeConnection.image
                      ? `_nuxt/assets/images/network/users/${activeConnection.image}`
                      : require('~/assets/images/default.png')
                  "
                  tag="img"
                  to="/"
                  class="connectbutton__modal--profile-img"
                />
              </div>
              {{ activeConnection.nick }}
            </div>
            <div
              v-if="modalStep == 1"
              class="connectbutton__modal--textarea-cont"
            >
              <v-textarea
                v-model="connectMessage"
                outlined
                counter="140"
                no-resize
                rows="10"
              ></v-textarea>
            </div>
            <div
              v-if="modalStep === 2"
              class="connectbutton__modal--textarea-cont"
            >
              {{ connectMessage }}
            </div>
            <div class="connectbutton__modal--setprice-cont">
              <div class="connectbutton__modal--setprice">
                <v-text-field
                  class="connectbutton__modal--setprice-input"
                  outlined
                  hide-details="0"
                ></v-text-field>
                <v-btn
                  class="connectbutton__modal--setprice-button"
                  depressed
                  color="#0885F6"
                  dark
                  width="100%"
                >
                  Set Price
                </v-btn>
              </div>
            </div>
            <div
              v-if="modalStep === 1"
              @click="nextModalStep()"
              class="connectbutton__modal--connect-button"
            >
              <span v-if="cost">{{ activeConnection.cost }}$ - </span>
              Connect
            </div>

            <div
              v-if="modalStep === 2"
              @click="confirmConnection()"
              class="connectbutton__modal--confirm-button"
            >
              Okay
            </div>
          </div>
        </v-card-text>
      </v-card>
    </v-dialog>
  </section>
</template>

<script>
import { apiG2c } from '~/mixins/apiG2c'
import { apiG2cConnections } from '~/mixins/apiG2cConnections'

export default {
  name: 'ConnectButton',
  mixins: { apiG2c, apiG2cConnections },
  props: {
    status: {
      type: String,
      default: 'none'
    },
    cost: {
      type: String,
      default: ''
    },
    modalStep: {
      type: Number,
      default: 1
    },
    activeConnection: {
      type: Object,
      // eslint-disable-next-line vue/require-valid-default-prop
      default: () => ({
        connections: 0,
        email: '',
        invitation_code: '',
        is_disabled: 0,
        is_online: 0,
        knowledges: Object,
        languages: Object,
        mobile: '',
        mobile_number: '',
        mobile_prefix: '',
        nick: '',
        password: '',
        profile_image: '',
        recommends: '',
        resume: '',
        social_media: Object,
        summary: ''
      })
    }
  },
  data() {
    return {
      isShowingConnectModal: false,
      connectMessage: ''
    }
  },
  watch: {
    isShowingConnectModal(value) {
      this.$emit('sendIsShowingConnectModal', value)
    },
    connectMessage(value) {
      // eslint-disable-next-line no-console
      console.log(value)
    }
  },
  methods: {
    showConnectForm() {
      this.modalStep = 1
      this.isShowingConnectModal = true
    },
    async nextModalStep() {
      this.loading = true
      try {
        this.cost = await this.exchangeRates(this.cost)

        const propose = this.walletPropose(
          'tokenid',
          'tokens1',
          'tokenc1',
          this.g2c_application,
          'sourcenick',
          'destinationnick',
          this.cost,
          'lockuntil',
          'description'
        )

        if (!propose.error) {
          const object = this.shareUserObject(
            'tokenid',
            'tokens1',
            'tokenc1',
            this.g2c_application,
            'sourcenick',
            'path',
            'name',
            'destinationnick'
          )

          // eslint-disable-next-line no-console
          console.log(object)

          // TODO Save shareauth in firebase

          this.modalStep = this.modalStep + 1
        }
      } catch (error) {}
    },
    confirmConnection() {
      this.isShowingConnectModal = false
    },
    returnToProfile() {
      this.isShowingConnectModal = false
      this.$emit('openInfoModal', true)
    }
  }
}
</script>
<style>
.connectbutton__modal {
  max-width: 65%;
}
@media screen and (max-width: 992px) {
  .connectbutton__modal {
    max-width: 90%;
    margin: 0;
  }
}
@media screen and (max-width: 400px) {
  .connectbutton__modal {
    max-width: 100%;
  }
}

/* width */
::-webkit-scrollbar {
  width: 3px;
}

/* Track */
::-webkit-scrollbar-track {
  border-radius: 10px;
  background-color: lightgrey;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #0278fe;
  border-radius: 50px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #006ce0;
}
</style>
<style lang="scss" scoped>
.connectbutton {
  width: 100%;
  &__accept {
    padding: 0 15px;
    width: 100%;
    height: 40px;
    border: 2px solid #4dd695;
    background-image: linear-gradient(to left, #00db73, #08d5b9, #00db73);
    background-size: 200%;
    transition: 0.8s;
    border-radius: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    &:hover {
      background-position: right;
    }
  }
  &--button {
    width: 100%;
    height: 40px !important;
  }
  &__modal {
    &--wrapper {
      padding: 20px;
    }
    &--topbar {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    &--profile-cont {
      display: flex;
      justify-content: center;
      align-items: center;
      color: #29363d;
      font-size: 15px;
      font-weight: 500;
      margin-bottom: 30px;
    }
    &--profile-img-cont {
      height: 50px;
      width: 50px;
      border-radius: 50px;
      margin-right: 12px;
    }
    &--profile-img {
      height: 100%;
      width: 100%;
      border-radius: 50px;
    }
    &--textarea-cont {
      width: 70%;
      margin: 0 auto;
      height: 325px;

      white-space: pre-line;
      overflow-y: auto;
    }
    &--setprice-cont {
      display: flex;
      justify-content: center;
      width: 100%;
      margin-bottom: 70px;
    }
    &--setprice {
      display: grid;
      grid-template-columns: 3fr 2fr;
      grid-column-gap: 15px;
      &-input {
        ::v-deep {
          .v-input__control .v-input__slot {
            /*font-size: 18px;*/
            min-height: 56px;
          }
        }
      }
      &-button {
        height: 56px !important;
      }
    }
    &--connect-button {
      background-image: linear-gradient(to left, #0278fe, #bedffe, #0278fe);
      font-size: 17px;
      background-position: left;
      background-size: 200%;
      border-radius: 50px;
      width: 35%;
      height: 50px;
      color: #fff;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 auto;
      cursor: pointer;
      transition: 0.8s;
      &:hover {
        background-position: right;
        transition: 0.8s;
      }
    }
    &--confirm-button {
      background-color: #0278fe;
      border-radius: 50px;
      width: 35%;
      height: 50px;
      color: #fff;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 auto;
      cursor: pointer;
      transition: 0.8s;
      &:hover {
        background-position: right;
        transition: 0.8s;
      }
    }
  }
}
@media screen and (max-width: 992px) {
  .connectbutton__modal {
    &--textarea-cont {
      width: 100%;
      margin: 0 auto;
    }
    &--button {
      width: 80%;
    }
  }
}
@media screen and (max-width: 768px) {
  .connectbutton__modal {
    &--setprice {
      grid-template-columns: 1fr;
      grid-row-gap: 15px;
      width: 100%;
      &-cont {
        margin-bottom: 30px;
      }
    }
    &--connect-button {
      width: 100%;
    }
  }
}
@media screen and (max-width: 400px) {
  .connectbutton__modal {
    &--textarea-cont {
      width: 100%;
      margin: 0 auto;
    }
    &--button {
      width: 100%;
    }
  }
}
</style>
