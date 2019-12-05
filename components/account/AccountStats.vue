<template>
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
</template>

<script>
export default {
  name: 'AccountStats',
  data: () => ({
    items: ['Today', 'Last week', 'Last month', 'Last year'],
    AreStatsVisible: true
  }),
  methods: {
    toggleStats() {
      this.AreStatsVisible = !this.AreStatsVisible
    }
  }
}
</script>

<style lang="scss" scoped>
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
}
</style>
