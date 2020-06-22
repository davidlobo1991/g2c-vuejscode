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
    <v-dialog
      v-model="isShowingConnectModal"
      width="50%"
      class="c-contact-card"
    >
      <v-card>
        <v-card-text>
          <div class="connectbutton__modal--wrapper">
            <div class="connectbutton__modal--topbar">
              <v-icon
                @click="isShowingConnectModal = false"
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
            <div class="connectbutton__modal--textarea-cont">
              <v-textarea
                outlined
                counter="140"
                width="40%"
                no-resize
                rows="10"
              ></v-textarea>
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
    }
  },
  data() {
    return {
      isShowingConnectModal: false
    }
  },
  methods: {
    showConnectForm() {
      // eslint-disable-next-line no-console
      console.log('Evento emitido')
      this.$emit('closeAllModals', this.isShowingConnectModal)
      this.isShowingConnectModal = true
    }
  }
}
</script>

<style lang="scss" scoped>
.connectbutton {
  width: 100%;
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
  }
}
</style>
