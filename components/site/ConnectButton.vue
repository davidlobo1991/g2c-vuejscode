<template>
  <section class="connectbutton">
    <v-btn
      v-if="status === 'view'"
      text
      class="connectbutton--button"
      color="#0087FF"
      dark
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
      <span v-if="cost">{{ cost }}$ - </span>
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
                  :src="require('@/assets/images/persona1.png')"
                  tag="img"
                  to="/"
                  class="connectbutton__modal--profile-img"
                />
              </div>
              Gabel Sheber
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
              v-if="modalStep === 1"
              @click="nextModalStep()"
              class="connectbutton__modal--connect-button"
            >
              <span v-if="cost">{{ cost }}$ - </span>
              Connect
            </div>
            <div
              v-if="modalStep === 2"
              class="connectbutton__modal--textarea-cont"
            >
              {{ connectMessage }}
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
export default {
  name: 'ProfileCards',
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
    }
  },
  methods: {
    showConnectForm() {
      this.modalStep = 1
      this.isShowingConnectModal = true
    },
    nextModalStep() {
      this.modalStep = this.modalStep + 1
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
</style>
<style lang="scss" scoped>
.connectbutton {
  width: 100%;
  &__accept {
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
    }
    &--connect-button {
      background-image: linear-gradient(to left, #0278fe, #bedffe, #0278fe);
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
