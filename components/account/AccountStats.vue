<template>
  <div class="c-account__stats">
    <div v-show="AreStatsVisible" class="c-account__stats--content">
      <div>
        <div class="c-account__stats--total">
          <sup class="c-account__stats--superindex">$</sup>0
        </div>
        <div class="c-account__stats--sats">0 SATS</div>
      </div>
      <!--      <div class="c-account__stats&#45;&#45;lastmonth-cont">-->
      <!--        <v-select-->
      <!--          :items="items"-->
      <!--          class="c-account__stats&#45;&#45;lastmonth"-->
      <!--          color="#fff"-->
      <!--          item-color="#fff"-->
      <!--          dark-->
      <!--        >-->
      <!--        </v-select>-->
      <!--      </div>-->
      <!--      <div class="c-account__stats&#45;&#45;balance-cont">-->
      <!--        <div class="c-account__stats&#45;&#45;balance u-color-green">-->
      <!--          <span class="c-account__stats&#45;&#45;balance-tit">Ins</span>$0-->
      <!--        </div>-->
      <!--        <div class="c-account__stats&#45;&#45;balance u-color-blue">-->
      <!--          <span class="c-account__stats&#45;&#45;balance-tit">-->
      <!--            Outs-->
      <!--          </span>-->
      <!--          $0-->
      <!--        </div>-->
      <!--      </div>-->
      <div class="c-account__stats--buttons">
        <AddFundsModal />
        <SendFundsModal />
        <!--        <div class="c-account__stats&#45;&#45;link">ADD FUNDS</div>-->
        <!--        <div class="c-account__stats&#45;&#45;link">SEND</div>-->
      </div>
    </div>
    <div @click="toggleStats" class="c-account__stats--eye">
      <v-icon v-if="AreStatsVisible" color="#fff">mdi-eye-off</v-icon>
      <v-icon v-if="!AreStatsVisible" color="#fff">mdi-eye</v-icon>
    </div>
  </div>
</template>

<script>
import AddFundsModal from '~/components/account/AddFundsModal'
import SendFundsModal from '~/components/account/SendFundsModal'

export default {
  name: 'AccountStats',
  components: {
    AddFundsModal,
    SendFundsModal
  },
  data: () => ({
    items: ['Today', 'Last week', 'Last month', 'Last year'],
    AreStatsVisible: true,
    userBalanceUSD: null,
    userBalanceSAT: null
  }),
  mounted() {
    this.getBalance()
  },
  methods: {
    toggleStats() {
      this.AreStatsVisible = !this.AreStatsVisible
    },
    async getBalance() {
      const test = await this.getUserBalance()

      if (!test.error) {
        // eslint-disable-next-line no-console
        console.log(test)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.u-color-blue {
  color: #0bbadc;
}
.u-color-green {
  color: #1dff96;
}
.c-account {
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
    box-sizing: border-box;
    &--content {
      position: absolute;
      height: 91%;
      display: flex;
      flex-flow: column;
      align-items: flex-end;
      /*align-items: space-between;*/
      justify-content: space-between;
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
    &--lastmonth {
      max-width: 130px;
    }
    &--lastmonth.v-text-field > .v-input__control > .v-input__slot:before {
      border-style: none;
    }
    &--lastmonth.v-text-field > .v-input__control > .v-input__slot:after {
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
  }
}

@media screen and (max-width: 992px) {
  .c-account {
    &__stats {
      &--eye {
        top: 20px;
        bottom: auto;
      }
    }
  }
}

@media screen and (max-width: 768px) {
  .c-account {
    &__stats {
      &--eye {
        bottom: 20px;
        top: auto;
      }
    }
  }
}
</style>
