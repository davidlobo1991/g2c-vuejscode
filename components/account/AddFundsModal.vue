<template>
  <div>
    <div @click.stop="addFundsModal = true" class="addFunds__link">
      ADD FUNDS
    </div>
    <v-dialog v-model="addFundsModal" content-class="addFunds__modal">
      <v-card>
        <v-card-title class="addFunds__modal--title-cont">
          <div class="addFunds__modal--cross">
            <v-icon @click="addFundsModal = false">
              mdi-close
            </v-icon>
          </div>
          <div class="addFunds__modal--title">Add Funds</div>
          <div class="addFunds__modal--description">
            Select how to add funds, by paymail or credit card.
          </div>
        </v-card-title>

        <v-card-text class="addFunds__modal--button-cont">
          <div
            ref="copyButton"
            @click="copyEmail()"
            class="addFunds__modal--button "
          >
            <div class="addFunds__modal--button-title">
              Copy Paymail
              <v-tooltip right color="#25273A" max-width="270px">
                <template v-slot:activator="{ on }">
                  <v-icon v-on="on" class="addFunds__modal--button-more-info">
                    mdi-help-circle
                  </v-icon>
                </template>
                <span>
                  Lorem ipsum dolor sit amet, consectetur asipiscing elit
                </span>
              </v-tooltip>
            </div>
            <div class="addFunds__modal--button-description">
              jessomaile@networksv.com
            </div>
            <div class="addFunds__modal--button-copied">
              Copied
              <v-icon class="addFunds__modal--button-copied-icon">
                mdi-check
              </v-icon>
            </div>
          </div>
          <div class="addFunds__modal--button">
            <div class="addFunds__modal--button-title">Credit Card</div>
            <v-icon class="addFunds__modal--icon">
              mdi-credit-card-multiple-outline
            </v-icon>
          </div>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  name: 'AddFundsModal',
  data() {
    return {
      addFundsModal: false
    }
  },
  methods: {
    copyEmail() {
      const copyButton = this.$refs.copyButton
      copyButton.classList.add('addFunds__modal--button-active')
      setTimeout(function() {
        copyButton.classList.remove('addFunds__modal--button-active')
      }, 2000)
    }
  }
}
</script>
<style lang="scss">
.addFunds__modal {
  max-width: 40%;
  @media screen and (max-width: 1800px) {
    max-width: 65%;
    margin: 0;
  }
  @media screen and (max-width: 992px) {
    max-width: 90%;
    margin: 0;
  }
  @media screen and (max-width: 400px) {
    max-width: 100%;
  }
}
</style>
<style lang="scss" scoped>
.addFunds {
  &__link {
    display: flex;
    font-size: 18px;
    font-weight: 500;
    margin-right: 21px;
    padding: 0;
    cursor: pointer;
  }
  &__modal {
    .v-card {
      padding: 33px 47px 83px 47px;
      @media screen and (max-width: 768px) {
        padding: 15px;
        box-sizing: border-box;
      }
    }
    &--cross {
      position: absolute;
      right: 20px;
      top: 20px;
    }
    &--title-cont {
      display: flex;
      flex-flow: column;
      align-items: center;
      padding-bottom: 50px !important;
    }
    &--title {
      font-size: 19px;
      font-weight: 500;
      color: #29363d;
    }
    &--description {
      font-size: 16px;
      color: #8c8c8c;
      font-weight: normal;
    }
    &--button-cont {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-column-gap: 30px;
      @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
        grid-column-gap: 30px;
        grid-row-gap: 30px;
        padding: 0 !important;
      }
    }
    &--button {
      border: 1px solid #d2d1d1;
      border-radius: 4px;
      height: 200px;
      padding: 25px 15px 0 15px;
      display: flex;
      flex-flow: column;
      align-items: center;
      position: relative;
      cursor: pointer;
      transition: all 0.25s;
      &:hover {
        background-color: #f7f7f7;
        transition: all 0.25s;
      }
      &-active {
        border: 1px solid #0087ff;
        .addFunds__modal--button-description {
          color: #0087ff;
          font-weight: 500;
        }
        .addFunds__modal--button-copied {
          display: block;
        }
      }
      &-title {
        font-size: 19px;
        font-weight: 500;
        color: #29363d;
        padding-bottom: 50px;
      }
      &-description {
        font-size: 18px;
        color: #8c8c8c;
      }
      &-more-info {
        color: #e2edfa !important;
        background-color: #0087ff !important;
        border-radius: 50px !important;
        height: 20px !important;
        width: 20px !important;
      }
      &-copied {
        display: none;
        position: absolute;
        bottom: 10px;
        color: #0087ff;
        font-size: 12px;
        font-weight: 500;
        &-icon {
          color: #0087ff !important;
          font-size: 16px !important;
        }
      }
    }
    &--icon {
      font-size: 60px !important;
      color: #8c8c8c !important;
      transform: translate(0, -13px);
    }
  }
}
</style>
