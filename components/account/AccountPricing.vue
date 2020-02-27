<template>
  <div class="c-pricing">
    <div class="c-pricing-label">
      <div>
        Pricing Model
        <v-tooltip right color="#25273A" max-width="270px">
          <template v-slot:activator="{ on }">
            <v-icon v-on="on" class="c-pricing--more-info">
              mdi-help-circle
            </v-icon>
          </template>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla id
            rutrum urna, et sodales arcu. Vestibulum at mauris ultrices, posuere
            neque eu, egestas neque. Sed erat neque, euismod vitae faucibus sit
            amet, euismod pharetra dui. Duis vulputate eu est a rutrum.
          </span>
        </v-tooltip>
      </div>
      <v-switch @change="togglePrices" class="mt-0 pt-0" hide-details>
      </v-switch>
    </div>
    <div v-show="IsShowingPrices">
      <div class="c-pricing--inner-check">
        <div>
          Open Prices
          <v-tooltip right color="#25273A" max-width="270px">
            <template v-slot:activator="{ on }">
              <v-icon v-on="on" class="c-pricing--more-info">
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
      <div class="c-pricing--input-cont">
        <div>
          Request Connection
        </div>
        <v-text-field
          v-bind:disabled="IsInputActive ? false : true"
          v-model="connectionPrice"
          class="c-pricing--input"
          filled
          rounded
          dense
          single-line
          suffix="$"
        >
        </v-text-field>
      </div>
      <div class="c-pricing--input-cont">
        <div>
          Message
        </div>
        <v-text-field
          v-bind:disabled="IsInputActive ? false : true"
          v-model="messagePrice"
          class="c-pricing--input"
          filled
          rounded
          dense
          single-line
          suffix="$"
        >
        </v-text-field>
      </div>
      <div class="c-pricing--input-cont">
        <div>
          eMeeting Deposit
        </div>
        <v-text-field
          v-bind:disabled="IsInputActive ? false : true"
          v-model="depositPrice"
          class="c-pricing--input"
          filled
          rounded
          dense
          single-line
          suffix="$"
        >
        </v-text-field>
      </div>
      <div class="c-pricing--input-cont">
        <div>
          eMeeting Price/Minute
        </div>
        <v-text-field
          v-bind:disabled="IsInputActive ? false : true"
          v-model="emeetingPrice"
          class="c-pricing--input"
          filled
          rounded
          dense
          single-line
          suffix="$"
        >
        </v-text-field>
      </div>
      <v-btn
        v-bind:disabled="IsInputActive ? false : true"
        large
        color="primary"
        class="c-pricing--save-btn"
      >
        Save
      </v-btn>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AccountPricing',
  data: () => ({
    IsShowingPrices: false,
    IsInputActive: true,
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
    }
  }
}
</script>

<style lang="scss" scoped>
.c-pricing {
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
    & input {
      text-align: center;
    }
  }
  &--save-btn {
    margin-top: 25px;
  }
  &--more-info {
    color: #e2edfa;
    background-color: #0087ff;
    border-radius: 50px;
    height: 20px;
    width: 20px;
  }
}
</style>
