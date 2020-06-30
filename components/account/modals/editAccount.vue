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
    <v-dialog v-model="dialog" content-class="c-edit-account__modal">
      <v-card>
        <div class="c-edit-account__modal--cross">
          <v-icon @click="dialog = false">
            mdi-close
          </v-icon>
        </div>
        <v-card-title class="c-edit-account__modal--title">
          Edit Profile
        </v-card-title>

        <v-card-text>
          <div class="c-edit-account__modal--first-side">
            <div class="c-edit-account__modal--avatar-cont">
              <v-avatar size="215">
                <img
                  :src="require('@/assets/images/persona1.png')"
                  alt="John"
                />
                <div class="c-edit-account__modal--avatar-edit">
                  <v-icon class="c-bottom-mobile__icon">
                    mdi-pencil
                  </v-icon>
                </div>
              </v-avatar>
            </div>
            <!--            <div class="c-edit-account__modal&#45;&#45;img-cont">-->
            <!--              <nuxt-link-->
            <!--                :src="require('@/assets/images/persona1.png')"-->
            <!--                tag="img"-->
            <!--                to="/"-->
            <!--                class="c-edit-account__modal&#45;&#45;img"-->
            <!--              />-->
            <!--              <div class="c-account__profile&#45;&#45;status u-status&#45;&#45;available"></div>-->
            <!--            </div>-->
            <div class="c-edit-account__modal--inputs-cont">
              <v-text-field
                color="#1976d2"
                label="Name"
                class="c-edit-account__modal--input"
                hide-details="auto"
                outlined
              ></v-text-field>
              <v-text-field
                color="#1976d2"
                label="Last Name"
                class="c-edit-account__modal--input"
                hide-details="auto"
                outlined
              ></v-text-field>
              <v-text-field
                color="#1976d2"
                label="Title"
                class="c-edit-account__modal--input"
                hide-details="auto"
                outlined
              ></v-text-field>
            </div>
          </div>
          <v-textarea
            color="#1976d2"
            label="Summary"
            class="c-edit-account__modal--textarea"
            hide-details="true"
            outlined
          >
            <template v-slot:label>
              <!--              <div>Bio <small>(optional)</small></div>-->
            </template>
          </v-textarea>
          <v-select
            v-model="knowledgeValue"
            :items="knowledgeItems"
            chips
            label="Knowledge"
            multiple
            outlined
          ></v-select>
          <v-select
            v-model="langValue"
            :items="langItems"
            chips
            label="Knowledge"
            multiple
            outlined
          ></v-select>
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
      dialog: false,
      langItems: ['foo', 'bar', 'fizz', 'buzz'],
      langValue: ['foo', 'bar', 'fizz', 'buzz'],
      knowledgeItems: ['foo', 'bar', 'fizz', 'buzz'],
      knowledgeValue: ['foo', 'bar', 'fizz', 'buzz']
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
    max-width: 65%;
    &--cross {
      position: absolute;
      right: 15px;
      top: 15px;
    }
    &--title {
      display: flex !important;
      align-items: center;
      justify-content: center;
      padding-bottom: 33px !important;
    }
    &--first-side {
      width: 100%;
      display: flex;
      /*align-items: center;*/
      justify-content: space-between;
    }
    &--img-cont {
      width: 235px;
      height: 235px;
      border-radius: 50px;
      flex-shrink: 0;
      margin-right: 20px;
    }
    &--avatar-cont {
      /*background-color: #18de82;*/
    }
    &--avatar-edit {
      width: 35px;
      height: 35px;
      position: absolute;
      background-color: #fff;
      bottom: 15px;
      right: 15px;
      box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.11);
      border-radius: 25px;
      cursor: pointer;
    }
    &--img {
      object-fit: cover;
      width: 100%;
      height: 100%;
      border-radius: 50%;
    }
    &--inputs-cont {
      width: 100%;
      display: flex;
      flex-flow: column;
      justify-content: space-between;
      padding-left: 30px;
    }
    &--input {
      margin-bottom: 22px !important;
    }
    &--textarea {
      margin-bottom: 22px !important;
    }
  }
}

@media screen and (max-width: 992px) {
  .c-edit-account {
    &__modal {
      max-width: 90%;
      &--first-side {
        flex-flow: column;
      }
      &--avatar-cont {
        display: flex;
        justify-content: center;
        padding-bottom: 30px;
      }
      &--inputs-cont {
        padding-left: 0;
      }
    }
  }
}
@media screen and (max-width: 400px) {
  .c-edit-account {
    &__modal {
      max-width: 100%;
      margin: 0;
    }
  }
}
</style>
