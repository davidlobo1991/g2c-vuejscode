<template>
  <div class="c-home__cards">
    <div v-if="filteredConnections.length > 0" class="c-home__cards__wrapper">
      <div
        v-for="connection in filteredConnections"
        class="c-home__cards__card"
      >
        <div
          @click="showContact(connection)"
          class="c-home__cards__card--text-wrapper"
        >
          <div class="c-home__cards__card--img-cont">
            <img
              :src="
                connection.image
                  ? `_nuxt/assets/images/network/users/${connection.image}`
                  : require('~/assets/images/default.png')
              "
              alt="image"
              class="c-home__cards__card--img"
            />
            <div
              :class="
                connection.is_online
                  ? 'u-status--available'
                  : 'u-status--absent'
              "
              class="c-home__cards__card--status"
            ></div>
          </div>
          <div class="c-home__cards__card--name">
            {{ connection.name }}
          </div>
          <div class="c-home__cards__card--username">
            @{{ connection.nick }}
          </div>
          <div class="c-home__cards__card--description">
            {{ connection.description }}
          </div>
          <div class="c-home__cards__card--details-cont">
            <div class="c-home__cards__card--details">
              <span class="c-home__cards__card--details-num">{{
                connection.total_connections
              }}</span>
              Connections
            </div>
            <div class="c-home__cards__card--details">
              <span class="c-home__cards__card--details-num">{{
                connection.total_recommends
              }}</span>
              Recommends
            </div>
          </div>
        </div>
        <ConnectButton
          @sendIsShowingConnectModal="setIsShowingConnectModal"
          @openInfoModal="showContact"
          :status="'connect'"
          :activeConnection="connection"
          :cost="`${connection.cost}`"
        />
      </div>
      <ModalProfile
        :isShowingContactInfo="IsShowingContactInfo"
        :activeConnection="activeConnection"
        @isShowingContactInfo="isShowingContactInfo"
        @sendIsShowingConnectModal="setIsShowingConnectModal"
      ></ModalProfile>
    </div>
    <span v-if="filteredConnections.length === 0 && usersLoaded">{{
      this.$i18n.t('profile.cards.not_found')
    }}</span>
  </div>
</template>

<script>
import ConnectButton from '~/components/site/ConnectButton'
import ModalProfile from '~/components/home/network/ModalProfile'

export default {
  name: 'ProfileCards',
  components: {
    ConnectButton,
    ModalProfile
  },
  props: {
    filterNetwork: {
      type: String,
      default: ''
    },
    categoryNetwork: {
      type: Array,
      default: null
    }
  },
  data() {
    return {
      IsShowingContactInfo: false,
      IsShowingConnectModal: false,
      filteredConnections: [],
      activeConnection: {},
      usersLoaded: false
    }
  },
  watch: {
    filterNetwork(val) {
      this.filter(this.connections, val)
      this.filterCategory(this.filteredConnections, this.categoryNetwork)
    },
    categoryNetwork(val) {
      this.filterCategory(this.connections, val)
      this.filter(this.filteredConnections, this.filterNetwork)
    }
  },

  mounted() {
    const loadUsers = this.showUsers()

    loadUsers.then((result) => {
      if (!result.error) {
        this.connections = Object.values(result.data)
        this.filteredConnections = this.connections.filter(
          (connection) => connection.nick !== this.$auth.$state.user.data.nick
        )
        this.usersLoaded = true
      } else {
        // eslint-disable-next-line no-console
        console.log('Error users')
      }
    })
  },
  methods: {
    isShowingContactInfo(value) {
      this.IsShowingContactInfo = value
    },
    showContact(connection) {
      this.IsShowingContactInfo = true
      this.activeConnection = connection
    },
    setIsShowingConnectModal(value) {
      if (this.IsShowingContactInfo === true) {
        this.IsShowingContactInfo = false
      }
      this.IsShowingConnectModal = value
    },
    filter(connections, val) {
      if (val) {
        this.filteredConnections = connections.filter(
          (connection) =>
            connection.nick.toLowerCase().includes(val.toLowerCase()) ||
            connection.resume.toLowerCase().includes(val.toLowerCase())
        )
      } else {
        this.filteredConnections = connections
      }
    },
    filterCategory(connections, val) {
      if (val.length > 0) {
        this.filteredConnections = connections.filter(function(connection) {
          if (
            connection.knowledge &&
            Object.keys(connection.knowledge).length > 0
          ) {
            connection.knowledges.some((knowledge) => val.includes(knowledge))
          }
        })
      } else {
        this.filteredConnections = connections
      }
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
      /*width: 365px;*/
      width: 92%;
      /*height: 500px;*/
      height: auto;
      display: flex;
      flex-flow: column;
      justify-content: space-between;
      /*align-items: center;*/
      border-radius: 5px;
      box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
      &--text-wrapper {
        display: flex;
        flex-flow: column;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        height: 100%;
      }
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
        /*width: 280px;*/
        /*width: 92%;*/
        /*height: 360px;*/
        height: auto;
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
        /*width: 95%;*/
      }
    }
  }
}
@media screen and (max-width: 1200px) {
  .c-home {
    &__cards {
      &__wrapper {
        grid-template-columns: 1fr 1fr 1fr;
      }
      &__card {
        &--details-cont {
          padding: 0 0 7px 0;
        }
      }
    }
  }
}
@media screen and (max-width: 992px) {
  .c-home {
    &__cards {
      &__wrapper {
        grid-template-columns: 1fr 1fr;
      }
      &__card {
        &--details-cont {
          padding: 0;
        }
      }
    }
  }
}
@media screen and (max-width: 768px) {
  .c-home {
    &__cards {
      &__wrapper {
        /*grid-template-columns: 1fr 1fr;*/
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
