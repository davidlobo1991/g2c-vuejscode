<template>
  <div class="c-meetings">
    <div class="c-meetings__pricing-label">
      <div>
        Available for eMeetings
        <v-tooltip right color="#25273A" max-width="270px">
          <template v-slot:activator="{ on }">
            <v-icon v-on="on" class="c-meetings__more-info">
              mdi-help-circle
            </v-icon>
          </template>
          <span>
            Lorem ipsum dolor sit amet, consectetur asipiscing elit
          </span>
        </v-tooltip>
      </div>
      <v-switch @change="toggleMeetings" class="mt-0 pt-0" hide-details>
      </v-switch>
    </div>
    <div v-show="IseMeetingActive" class="c-meetings--inner-check-cont">
      <div class="c-meetings--inner-check">
        <div>
          Open Availability
          <v-tooltip right color="#25273A" max-width="270px">
            <template v-slot:activator="{ on }">
              <v-icon v-on="on" class="c-meetings__more-info">
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
      <div class="c-meetings--inner-check">
        Setup when you're available on your Calendar
        <span>
          <nuxt-link to="#" class="c-meetings--link" disabled>
            Set Availability
          </nuxt-link>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AccountMeetings',
  data: () => ({
    IseMeetingActive: false
  }),
  methods: {
    toggleMeetings() {
      this.IseMeetingActive = !this.IseMeetingActive
    }
  }
}
</script>

<style lang="scss" scoped>
.c-meetings {
  padding: 20px;
  margin-bottom: 25px;
  border-radius: 4px;
  background-color: #fff;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
  &__pricing-label {
    display: flex;
    justify-content: space-between;
    font-weight: 500;
  }
  &__more-info {
    color: #e2edfa;
    background-color: #0087ff;
    border-radius: 50px;
    height: 20px;
    width: 20px;
  }
  &--inner-check {
    &-cont {
      padding-bottom: 32px 0;
    }
    padding-top: 32px;
    display: flex;
    justify-content: space-between;
  }
  &--link {
    color: #0087ff;
    font-size: 18px;
    font-weight: 500;
  }
}
</style>
