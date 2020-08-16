<template>
  <div class="sendfunds">
    <div class="sendfunds__info">
      <div class="sendfunds__info--title">Send Funds</div>
      <div class="sendfunds__info--wrapper">
        <div class="sendfunds__info--input-cont">
          <v-text-field label="$" maxlength="3"></v-text-field>
        </div>
        <div class="sendfunds__info--sats-cont">
          1,376,036 SATS
        </div>
        <div class="sendfunds__info--advice-cont">
          Minimum amount is $20 <br />
          Maximum amount is $200 per day
          <v-tooltip right color="#25273A" max-width="270px">
            <template v-slot:activator="{ on }">
              <v-icon v-on="on" class="sendfunds__info--more-info">
                mdi-help-circle
              </v-icon>
            </template>
            <span>
              Lorem ipsum dolor sit amet, consectetur asipiscing elit
            </span>
          </v-tooltip>
        </div>
        <hr class="sendfunds__info--line" />
        <div class="sendfunds__info--fees-cont">
          <div>
            Fees (5%)
            <v-tooltip right color="#25273A" max-width="270px">
              <template v-slot:activator="{ on }">
                <v-icon v-on="on" class="sendfunds__info--more-info">
                  mdi-help-circle
                </v-icon>
              </template>
              <span>
                Lorem ipsum dolor sit amet, consectetur asipiscing elit
              </span>
            </v-tooltip>
          </div>
          <div>5$</div>
        </div>
        <div class="sendfunds__info--total-cont">
          <div>Total</div>
          <div>105$</div>
        </div>
      </div>
    </div>
    <div class="sendfunds__invoice">
      <div class="sendfunds__invoice--title">INVOICE INFORMATION</div>
      <form class="sendfunds__invoice--form">
        <label for="inv-name" class="sendfunds__invoice--input-cont">
          <span class="sendfunds__invoice--label">Name</span>
          <input id="inv-name" type="text" placeholder="Jenny Rosen" />
        </label>
        <label for="inv-email" class="sendfunds__invoice--input-cont">
          <span class="sendfunds__invoice--label">Email</span>
          <input id="inv-email" type="text" placeholder="jenny@example.com" />
        </label>
        <label for="inv-address" class="sendfunds__invoice--input-cont">
          <span class="sendfunds__invoice--label">Address</span>
          <input
            id="inv-address"
            type="text"
            placeholder="185 Berry Street Suite 550"
          />
        </label>
        <label for="inv-city" class="sendfunds__invoice--input-cont">
          <span class="sendfunds__invoice--label">City</span>
          <input id="inv-city" type="text" placeholder="San Francisco" />
        </label>
        <div class="sendfunds__invoice--double-input">
          <label
            for="inv-state"
            class="sendfunds__invoice--double-input-big sendfunds__invoice--input-cont"
          >
            <span class="sendfunds__invoice--label">State</span>
            <input id="inv-state" type="text" placeholder="CA" />
          </label>
          <label
            for="inv-zip"
            class="sendfunds__invoice--input-cont sendfunds__invoice--double-input-small"
          >
            <span class="sendfunds__invoice--label">Zip</span>
            <input id="inv-zip" type="text" placeholder="94107" />
          </label>
        </div>
        <label for="inv-country" class="sendfunds__invoice--input-cont">
          <span class="sendfunds__invoice--label">Country</span>
          <input id="inv-country" type="text" placeholder="United States" />
        </label>
        <label for="inv-vat" class="sendfunds__invoice--input-cont">
          <span class="sendfunds__invoice--label">VAT</span>
          <input id="inv-vat" type="text" placeholder="000000000" />
        </label>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SendFundsVue',
  created() {
    this.$mixpanel.track('Account Send Funds Page View')
  }
}
</script>

<style lang="scss" scoped>
.sendfunds {
  height: 100%;
  display: flex;
  &__info {
    width: 50%;
    height: 100%;
    background-color: #ffffff;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
    z-index: 1;
    display: flex;
    flex-flow: column;
    /*justify-content: center;*/
    align-items: center;
    padding: 40px;
    &--title {
      color: #4d4d4d;
      font-size: 15px;
      font-weight: 500;
      padding-bottom: 126px;
    }
    &--wrapper {
      width: 29.5%;
      display: flex;
      flex-flow: column;
      justify-content: center;
      /*text-align: center;*/
      align-items: center;
    }
    &--input-cont {
      width: 100px;
      ::v-deep {
        .v-input__control .v-input__slot {
          color: #4d4d4d;
          font-size: 44px;
          font-weight: 500;
          letter-spacing: 0;
          line-height: 20px;
          box-sizing: initial;
          text-align: center;
          & .v-text-field__slot {
            .v-label {
              font-size: 26px;
              top: 19px !important;
              height: auto;
              line-height: 26px;
            }
            & .v-label--active {
              transform: translateY(-14px) scale(0.75) !important;
            }
          }
          & input {
            text-align: center;
          }
        }
      }
    }
    &--sats-cont {
      color: #8c8c8c;
      font-size: 18px;
      font-weight: 500;
      padding-bottom: 70px;
    }
    &--advice-cont {
      color: #8c8c8c;
      font-size: 14px;
      line-height: 20px;
      text-align: center;
    }
    &--more-info {
      color: #e2edfa !important;
      background-color: #0087ff !important;
      border-radius: 50px !important;
      height: 20px !important;
      width: 20px !important;
    }
    &--line {
      margin: 40px 0;
      border-bottom: 1px solid #eff1f2;
      width: 100%;
    }
    &--fees-cont {
      color: #8c8c8c;
      font-size: 15px;
      font-weight: 500;
      display: flex;
      justify-content: space-between;
      padding-bottom: 20px;
      width: 100%;
    }
    &--total-cont {
      color: #4d4d4d;
      font-size: 20px;
      font-weight: 500;
      display: flex;
      justify-content: space-between;
      width: 100%;
    }
  }
  &__invoice {
    width: 50%;
    height: 100%;
    background-color: #f8fbfd;
    padding: 90px 85px;
    &--title {
      padding-bottom: 20px;
    }
    &--form {
      background-color: #fff;
      padding: 4px 0;
      box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
      border-radius: 4px;
    }
    &--double-input {
      display: flex;
      justify-content: space-between;
      border-bottom: 1px solid #eff1f2;
      &-big {
        border-bottom: none !important;
        width: 60%;
        padding-right: 0 !important;
      }
      &-small {
        width: 40%;
      }
    }
    &--label {
      min-width: 54px;
    }
    &--input-cont {
      background-color: #fff;
      display: flex;
      align-items: center;
      padding: 0 44px;
      height: 47px;
      color: #525252;
      font-size: 15px;
      font-weight: bold;
      border-bottom: 1px solid #eff1f2;
      &:last-of-type {
        border-bottom: none;
      }
      & input {
        height: 100%;
        width: 100%;
        padding: 0 25px;
        box-sizing: border-box;
        outline: none;
        &::placeholder {
          color: #d2d1d1;
          font-size: 15px;
          font-weight: normal;
        }
      }
    }
  }
}
</style>
