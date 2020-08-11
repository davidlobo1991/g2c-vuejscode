<template>
  <div class="c-home__cards">
    <div class="c-home__cards__wrapper">
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
            <div class="c-home__cards__card--status u-status--available"></div>
          </div>
          <div class="c-home__cards__card--name">
            {{ connection.name }}
          </div>
          <div class="c-home__cards__card--username">
            {{ connection.nick }}
          </div>
          <div class="c-home__cards__card--description">
            {{ connection.description }}
          </div>
          <div class="c-home__cards__card--details-cont">
            <div class="c-home__cards__card--details">
              <span class="c-home__cards__card--details-num">{{
                connection.connections
              }}</span>
              Connections
            </div>
            <div class="c-home__cards__card--details">
              <span class="c-home__cards__card--details-num">{{
                connection.recommends
              }}</span>
              Recommends
            </div>
          </div>
        </div>
        <ConnectButton
          @sendIsShowingConnectModal="setIsShowingConnectModal"
          @openInfoModal="showContact"
          :status="`${connection.status}`"
          :cost="`${connection.cost}`"
        />
      </div>
      <ModalProfile
        :isShowingContactInfo="IsShowingContactInfo"
        :activeConnection="activeConnection"
        @isShowingContactInfo="isShowingContactInfoChild"
        @sendIsShowingConnectModal="setIsShowingConnectModal"
      ></ModalProfile>
      <span v-if="filteredConnections.length === 0">{{
        this.$i18n.t('profile.cards.not_found')
      }}</span>
    </div>
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
  data() {
    return {
      IsShowingContactInfo: false,
      IsShowingConnectModal: false,
      connections: [
        // {
        //   name: 'Gabel Sheber',
        //   image: 'persona1.png',
        //   nick: '@gabelsh',
        //   description: 'Company´s Legal Advisor & Chess Amateur',
        //   connections: '210',
        //   recommends: '176',
        //   cost: '5',
        //   knowledge: ['Education', 'Bitcoin', 'Finance'],
        //   language: ['Spanish', 'English'],
        //   summary:
        //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla urna, et sodales arcu. ' +
        //     'Vestibulum at mauris ultrices, posuere, egestas neque. Sed erat neque, euismod vitae faucibus' +
        //     ' sit amet, pharetra dui. Duis vulputate eu est rutrum. Cras fermentum finibus iaculis ' +
        //     'lacus vehicula egestas neque. Sed erat neque, vita.\n',
        //   social: {
        //     facebook: 'gabelsheber',
        //     instagram: 'gabelsheber'
        //   },
        //   status: 'view'
        // },
        // {
        //   name: 'David Gonzalez',
        //   image: 'persona1.png',
        //   nick: '@dgonzalez',
        //   description: 'Programador en Refineria Web',
        //   connections: '32',
        //   recommends: '125',
        //   cost: '10',
        //   knowledge: ['Education', 'Bitcoin', 'Finance'],
        //   language: ['Spanish', 'English'],
        //   summary:
        //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla urna, et sodales arcu. ' +
        //     'Vestibulum at mauris ultrices, posuere, egestas neque. Sed erat neque, euismod vitae faucibus' +
        //     ' sit amet, pharetra dui. Duis vulputate eu est rutrum. Cras fermentum finibus iaculis ' +
        //     'lacus vehicula egestas neque. Sed erat neque, vita.\n',
        //   social: {
        //     facebook: 'gabelsheber',
        //     instagram: 'gabelsheber'
        //   },
        //   status: 'connect'
        // },
        // {
        //   name: 'Pau Coll',
        //   image: 'persona1.png',
        //   nick: '@pcoll',
        //   description: 'Ingeniero aeroespacial',
        //   connections: '321',
        //   recommends: '123',
        //   knowledge: ['Education', 'Bitcoin', 'Marketing'],
        //   cost: '20',
        //   status: 'accept'
        // },
        // {
        //   name: 'Julian Martinez',
        //   image: 'persona1.png',
        //   nick: '@pcoll',
        //   description: 'Ingeniero aeroespacial',
        //   connections: '321',
        //   recommends: '123',
        //   knowledge: ['Education', 'Bitcoin', 'Finance'],
        //   cost: '20',
        //   status: 'pending'
        // }
      ],
      filteredConnections: [],
      activeConnection: {}
    }
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
  methods: {
    isShowingContactInfoChild(value) {
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
            // connection.name.toLowerCase().includes(val.toLowerCase()) ||
            connection.nick.toLowerCase().includes(val.toLowerCase()) ||
            connection.summary.toLowerCase().includes(val.toLowerCase())
        )
      } else {
        this.filteredConnections = connections
      }
    },
    filterCategory(connections, val) {
      if (val.length > 0) {
        this.filteredConnections = connections.filter((connection) =>
          connection.knowledges.some((knowledge) => val.includes(knowledge))
        )
      } else {
        this.filteredConnections = connections
      }
    }
  },

  mounted() {
    const loadUsers = this.showUsers()

    loadUsers.then((result) => {
      if (!result.error) {
        this.connections = Object.values(result.data)
        this.filteredConnections = this.connections
      } else {
        console.log('Error users')
      }
    })

    console.log(this.filteredConnections)
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
