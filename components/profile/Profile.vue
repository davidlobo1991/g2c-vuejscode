<template>
  <div class="c-profile__profile-card">
    <div class="c-profile__profile-card--image-info-cont">
      <div class="c-profile__profile-card--img-cont">
        <nuxt-link
          :src="require('@/assets/images/persona1.png')"
          tag="img"
          to="/"
          class="c-profile__profile-card--img"
        />
        <div class="c-profile__profile-card--status u-status--available"></div>
      </div>
      <div class="c-profile__profile-card--details-cont">
        <div class="c-profile__profile-card--details">
          <span class="c-profile__profile-card--details-num">210</span>
          Connections
        </div>
        <div class="c-profile__profile-card--details">
          <span class="c-profile__profile-card--details-num">176</span>
          Recommends
        </div>
      </div>
      <div class="c-profile__profile-card--button-cont">
        <v-btn color="#0087FF" dark class="c-profile__profile-card--button">
          <div>
            <v-icon left>mdi-bookmark-multiple</v-icon> Request eMeeting
          </div>
        </v-btn>
        <v-btn color="#0087FF" dark class="c-profile__profile-card--button">
          <v-icon left>mdi-message-text</v-icon> Send a Message
        </v-btn>
        <v-btn color="#0087FF" dark class="c-profile__profile-card--button">
          <div>
            Pending
          </div>
        </v-btn>
      </div>
    </div>
    <div class="c-profile__profile-card--text-cont">
      <div class="c-profile__profile-card--name">Jessica O'Mallie</div>
      <div class="c-profile__profile-card--username">@jessomallie</div>
      <div class="c-profile__profile-card--description">
        Bitcoin Estrategics, Formation in UX/UI & Animal Lover
      </div>
      <div class="c-profile__profile-card--title">Knowledge</div>
      <div class="c-profile__profile-card--label-cont">
        <v-chip class="c-profile__profile-card--label" color="#EFF1F2" label>
          Design
        </v-chip>
        <v-chip class="c-profile__profile-card--label" color="#EFF1F2" label>
          Bitcoin
        </v-chip>
        <v-chip class="c-profile__profile-card--label" color="#EFF1F2" label>
          Startups
        </v-chip>
      </div>
      <div class="c-profile__profile-card--title">Summary</div>
      <div class="c-profile__profile-card--summary">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla id rutrum
        urna, et sodales arcu. Vestibulum at mauris ultrices, posuere neque eu,
        egestas neque. Sed erat neque, euismod vitae faucibus sit amet, euismod
        pharetra dui. Duis vulputate eu est rutrum. Cras fermentum ex nisl,
        finibus iaculis lacus vehicula egestas neque. Sed erat neque, euismod
        vita.
      </div>
      <div class="c-profile__profile-card--title">Languages</div>
      <div class="c-profile__profile-card--label-cont">
        <v-chip class="c-profile__profile-card--label" color="#EFF1F2" label>
          English
        </v-chip>
        <v-chip class="c-profile__profile-card--label" color="#EFF1F2" label>
          Spanish
        </v-chip>
      </div>
      <div class="c-profile__profile-card--title">Social Media</div>
      <div class="c-profile__profile-card--username">
        <v-icon color="#8C8C8C">mdi-linkedin-box</v-icon>
        <v-icon color="#8C8C8C">mdi-linkedin-box</v-icon>
        <v-icon color="#8C8C8C">mdi-twitter</v-icon>
        <v-icon color="#8C8C8C">mdi-facebook-box</v-icon>
        <v-icon color="#8C8C8C">mdi-instagram</v-icon>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Profile',
  components: {},
  data() {
    return {
      dialog: false
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
.c-profile {
  &__profile-card {
    display: flex;
    position: relative;
    padding: 50px 20px 50px 20px;
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
    &--button-cont {
      display: flex;
      flex-flow: column;
      width: 100%;
      ::v-deep {
        .v-btn {
          text-transform: none;
          font-size: 18px;
          height: 50px !important;
          letter-spacing: 0;
          font-family: Roboto;
        }
      }
    }
    &--button {
      margin-top: 20px;
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
  .c-profile {
    &__profile-card {
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
  .c-profile {
    &__profile-card {
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
        /*bottom: 37%;*/
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
  .c-profile {
    &__profile-card {
      flex-flow: column;
      &--img-cont {
        height: auto;
      }
      &--status {
        /*bottom: 37%;*/
      }
      &--text-cont {
        padding-left: 0;
      }
    }
  }
}
@media screen and (max-width: 768px) {
  .c-profile {
    &__profile-card {
      /*flex-flow: row;*/
    }
  }
}
</style>
