<template>
  <span class="c-account__profile--edit">
    <v-btn
      @click.stop="dialog = true"
      color="#1976d2"
      text
      class="c-edit-account--button"
    >
      Edit
    </v-btn>
    <v-dialog v-model="dialog" max-width="65%">
      <v-card>
        <v-card-title class="c-edit-account__modal--title">
          Edit Profile
        </v-card-title>

        <v-card-text>
          <div class="c-edit-account__modal--first-side">
            <div class="c-edit-account__modal--img-cont">
              <nuxt-link
                :src="require('@/assets/images/persona1.png')"
                tag="img"
                to="/"
                class="c-edit-account__modal--img"
              />
              <div class="c-account__profile--status u-status--available"></div>
            </div>
            <div class="c-edit-account__modal--inputs-cont">
              <v-text-field
                v-model="name"
                color="#1976d2"
                label="Name"
                hide-details="true"
                outlined
              ></v-text-field>
              <v-text-field
                v-model="lastName"
                color="#1976d2"
                label="Last Name"
                hide-details="true"
                outlined
              ></v-text-field>
              <v-text-field
                v-model="title"
                color="#1976d2"
                label="Title"
                hide-details="true"
                outlined
              ></v-text-field>
            </div>
          </div>
          <v-textarea
            color="#1976d2"
            label="Summary"
            hide-details="true"
            outlined
          >
            <template v-slot:label>
              <!--              <div>Bio <small>(optional)</small></div>-->
            </template>
          </v-textarea>
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn @click="dialog = false" color="#1976d2" text>
            Cancel
          </v-btn>

          <v-btn @click="dialog = false" color="#1976d2" text>
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </span>
</template>

<script>
export default {
  name: 'EditAccountModal',
  components: {},
  data() {
    return {
      dialog: false
    }
  },
  methods: {}
}
</script>

<style lang="scss">
.c-edit-account {
  &--button {
    position: absolute;
    top: 10px;
    right: 10px;
    font-size: 18px;
    font-weight: 500;
    color: #0087ff !important;
    text-transform: capitalize;
    letter-spacing: normal;
    padding: 0 !important;
  }
  &__modal {
    &--title {
      display: flex !important;
      align-items: center;
      justify-content: center;
    }
    &--first-side {
      width: 100%;
      display: flex;
      align-items: center;
    }
    &--img-cont {
      width: 235px;
      height: 235px;
      border-radius: 50px;
      flex-shrink: 0;
      padding-right: 20px;
    }
    &--img {
      object-fit: cover;
      width: 100%;
      height: 100%;
      border-radius: 50%;
    }
    &--inputs-cont {
      width: 100%;
    }
  }
}
</style>
