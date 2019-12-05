<template>
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
</template>

<script>
export default {
  name: 'AccountMeetings'
}
</script>

<style lang="scss" scoped>
.c-account {
  &__meetings {
    padding: 20px;
    margin-bottom: 25px;
    border-radius: 4px;
    background-color: #fff;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
  }
  &__pricing {
    &-label {
      display: flex;
      justify-content: space-between;
      font-weight: 500;
    }
  }
}
</style>
