<template>
  <section class="c-account">
    <div class="c-account__navbar">
      <ul class="c-account__navbar--menu">
        <li class="c-account__navbar--item-active">
          <a href="#" class="c-account__navbar--link">ACCOUNT</a>
        </li>
        <li class="c-account__navbar--item">
          <a href="#" class="c-account__navbar--link">CALENDAR</a>
        </li>
        <li class="c-account__navbar--item">
          <a href="#" class="c-account__navbar--link">ACTIVITY</a>
        </li>
        <li class="c-account__navbar--item">
          <a href="#" class="c-account__navbar--link">SETTINGS</a>
        </li>
      </ul>
    </div>
    <div class="c-account__wrapper-section">
      <div class="c-account__left-cont">
        <div class="c-account__profile">
          <div class="c-account__profile--edit">Edit</div>
          <div class="c-account__profile--img-cont">
            <nuxt-link
              :src="require('@/assets/images/persona1.png')"
              tag="img"
              to="/"
              class="c-account__profile--img"
            />
            <div class="c-account__profile--status u-status--available"></div>
          </div>
          <div class="c-account__profile--text-cont">
            <div class="c-account__profile--name">Jessica O'Mallie</div>
            <div class="c-account__profile--username">@jessomallie</div>
            <div class="c-account__profile--description">
              Bitcoin Estrategics, Formation in UX/UI & Animal Lover
            </div>
            <div class="c-account__profile--title">Knowledge</div>
            <div class="c-account__profile--label-cont">
              <v-chip class="c-account__profile--label" color="#EFF1F2" label>
                Design
              </v-chip>
              <v-chip class="c-account__profile--label" color="#EFF1F2" label>
                Bitcoin
              </v-chip>
              <v-chip class="c-account__profile--label" color="#EFF1F2" label>
                Startups
              </v-chip>
            </div>
            <div class="c-account__profile--title">Summary</div>
            <div class="c-account__profile--summary">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla id
              rutrum urna, et sodales arcu. Vestibulum at mauris ultrices,
              posuere neque eu, egestas neque. Sed erat neque, euismod vitae
              faucibus sit amet, euismod pharetra dui. Duis vulputate eu est
              rutrum. Cras fermentum ex nisl, finibus iaculis lacus vehicula
              egestas neque. Sed erat neque, euismod vita.
            </div>
            <div class="c-account__profile--title">Languages</div>
            <div class="c-account__profile--label-cont">
              <v-chip class="c-account__profile--label" color="#EFF1F2" label>
                English
              </v-chip>
              <v-chip class="c-account__profile--label" color="#EFF1F2" label>
                Spanish
              </v-chip>
            </div>
            <div class="c-account__profile--title">Social Media</div>
            <div class="c-account__profile--username">
              <v-icon color="#8C8C8C">mdi-linkedin-box</v-icon>
              <v-icon color="#8C8C8C">mdi-linkedin-box</v-icon>
              <v-icon color="#8C8C8C">mdi-twitter</v-icon>
              <v-icon color="#8C8C8C">mdi-facebook-box</v-icon>
              <v-icon color="#8C8C8C">mdi-instagram</v-icon>
            </div>
          </div>
        </div>
      </div>
      <div class="c-account__right-cont">
        <div class="c-account__stats">
          <div v-show="AreStatsVisible" class="c-account__stats--content">
            <div class="c-account__stats--total">
              <sup class="c-account__stats--superindex">$</sup>0
            </div>
            <div class="c-account__stats--sats">0 SATS</div>
            <div class="c-account__stats--lastmonth-cont">
              <v-select
                :items="items"
                class="c-account__stats--lastmonth"
                label="Last month"
                color="#fff"
                item-color="#fff"
                light
              >
              </v-select>
            </div>
            <div class="c-account__stats--balance-cont">
              <div class="c-account__stats--balance u-color-green">
                <span class="c-account__stats--balance-tit">Ins</span>$0
              </div>
              <div class="c-account__stats--balance u-color-blue">
                <span class="c-account__stats--balance-tit">
                  Outs
                </span>
                $0
              </div>
            </div>
            <div class="c-account__stats--buttons">
              <div class="c-account__stats--link">ADD FUNDS</div>
              <div class="c-account__stats--link">SEND</div>
            </div>
          </div>
          <div @click="toggleStats" class="c-account__stats--eye">
            <v-icon v-if="AreStatsVisible" color="#fff">mdi-eye-off</v-icon>
            <v-icon v-if="!AreStatsVisible" color="#fff">mdi-eye</v-icon>
          </div>
        </div>
        <div class="c-account__pricing">
          <div class="c-account__pricing-label">
            <div>
              Pricing Model
              <v-tooltip right>
                <template v-slot:activator="{ on }">
                  <v-icon v-on="on" color="primary" dark>
                    mdi-help-circle
                  </v-icon>
                </template>
                <span>
                  Lorem ipsum dolor sit amet, consectetur asipiscing elit
                </span>
              </v-tooltip>
            </div>
            <v-switch @change="togglePrices" class="mt-0 pt-0" hide-details>
            </v-switch>
          </div>
          <div v-show="IsShowingPrices">
            <div class="c-account__pricing--inner-check">
              <div>
                Open Prices
                <v-tooltip right>
                  <template v-slot:activator="{ on }">
                    <v-icon v-on="on" color="primary" dark>
                      mdi-help-circle
                    </v-icon>
                  </template>
                  <span>
                    Lorem ipsum dolor sit amet, consectetur asipiscing elit
                  </span>
                </v-tooltip>
              </div>
              <v-switch @change="toggleInput" class="mt-0 pt-0" hide-details>
              </v-switch>
            </div>
            <div class="c-account__pricing--input-cont">
              <div>
                Request Connection
              </div>
              <v-text-field
                v-bind:disabled="IsInputActive ? true : false"
                v-model="connectionPrice"
                class="c-account__pricing--input"
                filled
                rounded
                dense
                single-line
                prefix="$"
              >
              </v-text-field>
            </div>
            <div class="c-account__pricing--input-cont">
              <div>
                Message
              </div>
              <v-text-field
                v-bind:disabled="IsInputActive ? true : false"
                v-model="messagePrice"
                class="c-account__pricing--input"
                filled
                rounded
                dense
                single-line
                prefix="$"
              >
              </v-text-field>
            </div>
            <div class="c-account__pricing--input-cont">
              <div>
                eMeeting Deposit
              </div>
              <v-text-field
                v-bind:disabled="IsInputActive ? true : false"
                v-model="depositPrice"
                class="c-account__pricing--input"
                filled
                rounded
                dense
                single-line
                prefix="$"
              >
              </v-text-field>
            </div>
            <div class="c-account__pricing--input-cont">
              <div>
                eMeeting Price/Minute
              </div>
              <v-text-field
                v-bind:disabled="IsInputActive ? true : false"
                v-model="emeetingPrice"
                class="c-account__pricing--input"
                filled
                rounded
                dense
                single-line
                prefix="$"
              >
              </v-text-field>
            </div>
            <v-btn large color="primary" class="c-account__pricing--save-btn">
              Save
            </v-btn>
          </div>
        </div>
        <div class="c-account__meetings">
          <div class="c-account__pricing-label">
            <div>
              Available for eMeetings
              <v-tooltip right>
                <template v-slot:activator="{ on }">
                  <v-icon v-on="on" color="primary" dark>
                    mdi-help-circle
                  </v-icon>
                </template>
                <span>
                  Lorem ipsum dolor sit amet, consectetur asipiscing elit
                </span>
              </v-tooltip>
            </div>
            <v-switch class="mt-0 pt-0" hide-details></v-switch>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Network',
  data: () => ({
    items: ['Today', 'Last week', 'Last month', 'Last year'],
    IsShowingPrices: false,
    IsInputActive: true,
    AreStatsVisible: true,
    connectionPrice: '1',
    messagePrice: '0.01',
    depositPrice: '10',
    emeetingPrice: '2'
  }),
  methods: {
    togglePrices() {
      this.IsShowingPrices = !this.IsShowingPrices
    },
    toggleInput() {
      this.IsInputActive = !this.IsInputActive
    },
    toggleStats() {
      this.AreStatsVisible = !this.AreStatsVisible
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
.u-color-blue {
  color: #0bbadc;
}
.u-color-green {
  color: #1dff96;
}
.c-account {
  width: 100%;
  height: 100%;
  background-color: #fdfdfd;
  &__navbar {
    color: rgba(82, 82, 82, 0.5);
    font-size: 18px;
    font-weight: 500;
    background-color: #fff;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
    display: flex;
    justify-content: center;
    align-items: flex-end;
    height: 76px;
    &--menu {
      padding: 0;
    }
    &--item {
      display: inline-block;
      padding-right: 45px;
      &-active {
        display: inline-block;
        color: #0087ff;
        border-bottom: 2px solid #0087ff;
        margin-right: 45px;
        &:hover .c-account__navbar--link {
          color: #0087ff;
        }
      }
    }
    &--link {
      color: inherit;
      text-decoration: none;
      &:hover {
        color: rgba(82, 82, 82, 0.8);
      }
    }
  }
  &__wrapper-section {
    width: 100%;
    padding: 25px;
    display: flex;
  }
  &__profile {
    display: flex;
    position: relative;
    padding: 20px;
    padding-bottom: 40px;
    border-radius: 4px;
    background-color: #ffffff;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
    &--edit {
      position: absolute;
      top: 23px;
      right: 23px;
      color: #0087ff;
      font-size: 18px;
      font-weight: 500;
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
  &__right-cont {
    width: 50%;
    margin-left: 12px;
  }
  &__left-cont {
    width: 50%;
    margin-right: 12px;
  }
  &__stats {
    min-height: 367px;
    position: relative;
    padding: 20px;
    display: flex;
    flex-flow: column;
    align-items: flex-end;
    margin-bottom: 25px;
    border-radius: 4px;
    background: linear-gradient(227.33deg, #002e65 0%, #0087ff 100%);
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
    color: #fff;
    &--content {
      display: flex;
      flex-flow: column;
      align-items: flex-end;
    }
    &--total {
      font-size: 44px;
      font-weight: 500;
    }
    &--superindex {
      font-size: 21px;
      padding-right: 6px;
    }
    &--sats {
      color: rgba(255, 255, 255, 0.5);
      font-size: 19px;
      font-weight: 500;
      padding-bottom: 35px;
    }
    &--lastmonth-cont {
      max-width: 90px;
    }
    &--lastmonth.v-text-field > .v-input__control > .v-input__slot:before {
      border-style: none;
    }
    &--lastmonth.v-text-field > .v-input__control > .v-input__slot:after {
      border-style: none;
    }
    &--lastmonth .v-input__control {
      border-style: none;
    }
    &--balance-cont {
      display: flex;
      padding-bottom: 45px;
    }
    &--balance {
      text-align: center;
      padding-right: 50px;
      font-size: 23px;
      font-weight: 500;
      &:last-of-type {
        padding-right: 0;
      }
    }
    &--balance-tit {
      display: block;
      color: rgba(255, 255, 255, 0.5);
      font-size: 15px;
      font-weight: 500;
    }
    &--buttons {
      display: flex;
    }
    &--eye {
      position: absolute;
      bottom: 20px;
      left: 20px;
      cursor: pointer;
    }
    &--link {
      display: flex;
      font-size: 18px;
      font-weight: 500;
      padding-right: 21px;
      &:last-of-type {
        padding-right: 0;
      }
    }
  }
  &__pricing {
    padding: 20px;
    margin-bottom: 25px;
    border-radius: 4px;
    background-color: #fff;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
    text-align: right;
    &-label {
      display: flex;
      justify-content: space-between;
      font-weight: 500;
    }
    &--inner-check {
      padding: 32px 0;
      display: flex;
      justify-content: space-between;
    }
    &--input-cont {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 5px 0;
    }
    &--input {
      max-width: 130px;
      height: 40px;
    }
    &--save-btn {
      margin-top: 25px;
    }
  }
  &__meetings {
    padding: 20px;
    margin-bottom: 25px;
    border-radius: 4px;
    background-color: #fff;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
  }
}
</style>
