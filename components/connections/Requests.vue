<template>
  <div class="c-connections">
    <TopMobile />
    <ConnectionsNavbar active-tab="requests" />
    <SoonBanner />
    <div class="c-requests">
      <div class="c-requests--cont">
        <div @click.self="showContact" class="c-requests__elem">
          <div @click="showContact" class="c-requests__elem--info-cont">
            <img
              :src="require('~/assets/images/network/users/persona1.png')"
              class="c-requests__elem--image"
              alt=""
            />
            <div class="c-requests__elem--name-cont">
              <div class="c-requests__elem--name">Annabel Amber</div>
              <div class="c-requests__elem--description">
                Ut porta mollis porttitor. Cras et lacus at nulla feugiat
                scelerisque. Interdum et malesuada fames ac ante ipsum…
              </div>
            </div>
          </div>
          <div
            @click.self="showContact"
            class="c-requests__elem--progress-buttons-cont"
          >
            <div @click="showContact" class="c-requests__elem--progress-cont">
              <div>37h 21m 54s</div>
              <v-progress-linear
                :rounded="true"
                value="25"
                color="#0186FF"
                background-color="#F5F8FF"
                height="7"
                class="c-requests__elem--progress"
              ></v-progress-linear>
            </div>
            <div
              v-if="acceptedUser === false"
              class="c-requests__elem--button-cont"
            >
              <div depressed class="connectbutton__accept">
                <span>100$ - </span>
                Accept
              </div>
              <v-btn text color="#8C8C8C">Dismiss</v-btn>
            </div>
            <div
              v-if="acceptedUser === true"
              class="c-requests__elem--button-cont"
            >
              <v-btn text color="#0087FF">Messages</v-btn>
              <v-btn icon color="#8C8C8C">
                <v-icon>mdi-close</v-icon>
              </v-btn>
            </div>
          </div>
        </div>
      </div>
    </div>
    <BottomMobile active-tab="connections" />
    <ModalProfile
      :isShowingContactInfo="IsShowingContactInfo"
      @isShowingContactInfo="isShowingContactInfoChild"
      @sendIsShowingConnectModal="setIsShowingConnectModal"
    ></ModalProfile>
  </div>
</template>

<script>
import ModalProfile from '~/components/home/network/ModalProfile'
import ConnectionsNavbar from '~/components/connections/ConnectionsNavbar'
import TopMobile from '~/components/site/TopMobile'
import BottomMobile from '~/components/site/BottomMobile'
import SoonBanner from '~/components/banners/SoonBanner'

export default {
  name: 'Requests',
  components: {
    ConnectionsNavbar,
    TopMobile,
    ModalProfile,
    SoonBanner,
    BottomMobile
  },
  data() {
    return {
      IsShowingContactInfo: false,
      acceptedUser: true
    }
  },
  methods: {
    isShowingContactInfoChild(value) {
      this.IsShowingContactInfo = value
    },
    showContact() {
      // Llamada AJAX al endpoint
      this.IsShowingContactInfo = true
    }
  }
}
</script>

<style lang="scss" scoped>
.c-connections {
  width: 100%;
  height: 100vh;
}
.connectbutton {
  width: 100%;

  &__accept {
    margin-right: 15px;
    padding: 25px;
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
    cursor: pointer;

    &:hover {
      background-position: right;
    }
  }
}
.c-requests {
  padding: 25px;
  &--cont {
    box-sizing: border-box;
    border: 1px solid #eff1f2;
    border-radius: 4px;
    background-color: #ffffff;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
  }
  &__elem {
    padding: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #eff1f2;
    cursor: pointer;
    &:last-of-type {
      border-bottom: none;
    }
    &--info-cont {
      display: flex;
      align-items: center;
      width: 35%;
    }
    &--image {
      width: 67px;
      height: 67px;
      border-radius: 50px;
    }
    &--name-cont {
      padding-left: 15px;
    }
    &--name {
      color: #29363d;
      font-size: 18px;
      font-weight: 500;
    }
    &--description {
      color: #8c8c8c;
      font-size: 15px;
    }
    &--progress-buttons-cont {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 60%;
    }
    &--progress-cont {
      display: flex;
      flex-flow: column;
      justify-content: center;
      align-items: flex-end;
      width: 48%;
    }
    &--progress {
      width: 100%;
      ::v-deep {
        .v-progress-linear__background {
          border: solid 1px #d1d1d2 !important;
        }
      }
    }
    &--button-cont {
      display: flex;
      align-items: center;
    }
  }
}
@media screen and (max-width: 1200px) {
  .c-requests {
    &__elem {
      &--progress-buttons-cont {
        flex-flow: column;
        align-items: flex-end;
        width: 60%;
      }
      &--progress-cont {
        width: 100%;
        padding-bottom: 20px;
      }
    }
  }
}
@media screen and (max-width: 992px) {
  .connectbutton {
    &__accept {
      padding: 17px;
    }
  }
  .c-requests {
    &__elem {
      flex-flow: column;
      &--info-cont {
        width: 100%;
        padding-bottom: 20px;
      }
      &--progress-buttons-cont {
        width: 100%;
      }
      &--button-cont {
        display: flex;
        align-items: center;
      }
    }
  }
}
@media screen and (max-width: 500px) {
  .c-requests {
    &__elem {
      &--info-cont {
        flex-flow: column;
      }
      &--image {
        margin-bottom: 15px;
      }
      &--button-cont {
        flex-flow: column;
        width: 100%;
      }
    }
  }
}
</style>
