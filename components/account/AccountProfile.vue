<template>
  <div class="c-account__profile">
    <EditAccountModal />
    <div class="c-account__profile--image-info-cont">
      <div class="c-account__profile--img-cont">
        <nuxt-link
          :src="
            $auth.user.data.profile_image
              ? `_nuxt/assets/images/network/users/${$auth.user.data.profile_image}`
              : require('~/assets/images/default.png')
          "
          tag="img"
          to="/"
          class="c-account__profile--img"
        />
        <div class="c-account__profile--status u-status--available"></div>
      </div>
      <div class="c-account__profile--details-cont">
        <div class="c-account__profile--details">
          <span class="c-account__profile--details-num">{{
            $auth.user.data.total_connections
          }}</span>
          Connections
        </div>
        <!--        <div class="c-account__profile&#45;&#45;details">-->
        <!--          <span class="c-account__profile&#45;&#45;details-num">{{-->
        <!--            $auth.user.data.total_recommends-->
        <!--          }}</span>-->
        <!--          Recommends-->
        <!--        </div>-->
      </div>
    </div>
    <div class="c-account__profile--text-cont">
      <div class="c-account__profile--name">
        {{ $auth.user.data.name }} {{ $auth.user.data.surname }}
      </div>
      <div class="c-account__profile--username">
        @{{ $auth.user.data.nick }}
      </div>
      <div class="c-account__profile--description">
        {{ $auth.user.data.resume }}
      </div>
      <div class="c-account__profile--title">Knowledge</div>
      <div class="c-account__profile--label-cont">
        <v-chip
          v-for="knowledge in $auth.user.data.knowledges"
          :key="knowledge.en"
          class="c-account__profile--label"
          color="#EFF1F2"
          label
        >
          {{ knowledge.en }}
        </v-chip>
      </div>
      <div class="c-account__profile--title">Summary</div>
      <div class="c-account__profile--summary">
        {{ $auth.user.data.summary }}
      </div>
      <div class="c-account__profile--title">Languages</div>
      <div class="c-account__profile--label-cont">
        <v-chip
          v-for="language in $auth.user.data.languages"
          :key="language.en"
          class="c-account__profile--label"
          color="#EFF1F2"
          label
        >
          {{ language.en }}
        </v-chip>
      </div>
      <!--      <div class="c-account__profile&#45;&#45;title">Social Media</div>-->
      <!--      <div class="c-account__profile&#45;&#45;username">-->
      <!--        <v-icon color="#8C8C8C">mdi-linkedin-box</v-icon>-->
      <!--        <v-icon color="#8C8C8C">mdi-linkedin-box</v-icon>-->
      <!--        <v-icon color="#8C8C8C">mdi-twitter</v-icon>-->
      <!--        <v-icon color="#8C8C8C">mdi-facebook-box</v-icon>-->
      <!--        <v-icon color="#8C8C8C">mdi-instagram</v-icon>-->
      <!--      </div>-->
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import EditAccountModal from '@/components/account/modals/EditAccountModal'

export default {
  name: 'AccountProfile',
  components: {
    EditAccountModal
  },
  data() {
    return {
      dialog: false,
      userNameData: this.userName,
      userLastNameData: this.userLastName,
      userNickData: this.userNick,
      userSummaryData: this.userSummary
    }
  },
  computed: {
    ...mapState({
      userName: (state) => state.users.name,
      userLastName: (state) => state.users.last_name,
      userNick: (state) => state.users.nick,
      userSummary: (state) => state.users.summary
    })
  },
  watch: {
    userName(val) {
      this.userNameData = val
    },
    userLastName(val) {
      this.userLastNameData = val
    },
    userNick(val) {
      this.userNickData = val
    },
    userSummaryData(val) {
      this.userSummaryData = val
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
.c-account {
  &__profile {
    display: flex;
    position: relative;
    padding: 20px;
    padding-bottom: 40px;
    border-radius: 4px;
    background-color: #ffffff;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
    &--image-info-cont {
      display: flex;
      align-items: center;
      flex-flow: column;
      height: auto;
      width: 235px;
      flex-shrink: 0;
    }
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
    }
    &--details {
      text-align: center;
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
@media screen and (max-width: 1500px) {
  .c-account {
    &__profile {
      &--img-cont {
        width: 178px;
        height: 178px;
      }
      &--edit {
        font-size: 15px;
      }
      &--img-cont {
        position: relative;
        width: 178px;
        height: 178px;
        border: 2px solid #fff;
        border-radius: 50px;
        flex-shrink: 0;
      }
      &--status {
        border: 1px solid #fff;
        width: 16px;
        height: 16px;
      }
      &--details {
        font-size: 14px;
        &-num {
          font-size: 15px;
        }
      }
      &--name {
        font-size: 16px;
      }
      &--username {
        font-size: 14px;
      }
      &--description {
        font-size: 15px;
      }
      &--summary {
        font-size: 15px;
      }
      &--title {
        font-size: 14px;
      }
    }
  }
}

@media screen and (max-width: 1200px) {
  .c-account {
    &__profile {
      flex-flow: column;
      &--img-cont {
        height: auto;
      }
      &--edit {
        font-size: 15px;
      }
      &--img-cont {
        position: relative;
        width: 178px;
        height: 178px;
        border: 2px solid #fff;
        border-radius: 50px;
        flex-shrink: 0;
      }
      &--status {
        border: 1px solid #fff;
        width: 16px;
        height: 16px;
        bottom: 10%;
      }
      &--details {
        font-size: 14px;
        &-num {
          font-size: 15px;
        }
      }
      &--name {
        font-size: 16px;
      }
      &--username {
        font-size: 14px;
      }
      &--description {
        font-size: 15px;
      }
      &--summary {
        font-size: 15px;
      }
      &--title {
        font-size: 14px;
      }
      &--text-cont {
        padding-left: 0;
      }
    }
  }
}
@media screen and (max-width: 992px) {
  .c-account {
    &__profile {
      flex-flow: column;
      &--img-cont {
        height: auto;
      }
      &--status {
        bottom: 10%;
      }
      &--text-cont {
        padding-left: 0;
      }
    }
  }
}
@media screen and (max-width: 768px) {
  .c-account {
    &__profile {
      /*flex-flow: row;*/
    }
  }
}
</style>
