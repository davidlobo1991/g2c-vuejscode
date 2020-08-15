<template>
  <span class="c-account__profile--edit">
    <v-btn
      @click.stop="open"
      color="#1976d2"
      text
      class="c-edit-account--button"
    >
      Edit
    </v-btn>
    <v-dialog v-model="dialog" content-class="c-edit-account__modal">
      <v-card>
        <div class="c-edit-account__modal--cross">
          <v-icon @click="close">
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
                  :src="
                    $auth.user.data.profile_image
                      ? `_nuxt/assets/images/network/users/${$auth.user.data.profile_image}`
                      : require('~/assets/images/default.png')
                  "
                  alt="Image"
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
                :value="userName"
                @input="updateName"
                :hide-details="true"
                color="#1976d2"
                label="Name"
                class="c-edit-account__modal--input"
                outlined
              ></v-text-field>
              <v-text-field
                :value="userLastName"
                @input="updateLastName"
                :hide-details="true"
                color="#1976d2"
                label="Last Name"
                class="c-edit-account__modal--input"
                outlined
              ></v-text-field>
              <v-text-field
                :value="userTitle"
                @input="updateTitle"
                :hide-details="true"
                color="#1976d2"
                label="Title"
                class="c-edit-account__modal--input"
                outlined
              ></v-text-field>
            </div>
          </div>
          <v-textarea
            :value="userSummary"
            @input="updateSummary"
            :hide-details="true"
            color="#1976d2"
            label="Summary"
            class="c-edit-account__modal--textarea"
            outlined
          >
            <template v-slot:label>
              <!--              <div>Bio <small>(optional)</small></div>-->
            </template>
          </v-textarea>
          <v-select
            v-model="knowledgeValue"
            :items="knowledgeArray"
            @input="updateKnowledges"
            chips
            label="Knowledge"
            multiple
            outlined
          ></v-select>
          <v-select
            v-model="langValue"
            :items="langsArray"
            @input="updateLanguages"
            chips
            label="Languages"
            multiple
            outlined
          ></v-select>
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn @click="dialog = false" color="#1976d2" text>
            Cancel
          </v-btn>

          <v-btn @click="saveUser()" color="#1976d2" text>
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </span>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'EditAccountModal',
  components: {},
  computed: {
    ...mapState({
      userName: (state) => state.users.name,
      userLastName: (state) => state.users.last_name,
      userTitle: (state) => state.users.title,
      userSummary: (state) => state.users.summary,
      userKnowledges: (state) => state.users.knowledges,
      userLanguages: (state) => state.users.languages
    })
  },
  data() {
    return {
      dialog: false,
      langItems: [],
      langValue: [],
      langsArray: [],
      knowledgeItems: [],
      knowledgeValue: [],
      knowledgeArray: []
    }
  },
  async mounted() {
    this.knowledgeItems = await this.getKnowledges()
    this.langItems = await this.getLanguages()

    this.parsedLanguagesToSelect()
    this.parsedKnowledgesToSelect()

    // @TODO: Select stored languages

    // @TODO: Select stored knowledges
  },
  methods: {
    open() {
      this.dialog = true

      // @TODO Force set params
      this.getUserInfo()
    },
    close() {
      this.dialog = false
    },
    async getUserInfo() {
      await this.$auth.fetchUser()

      // Update store.
      this.updateName(this.$auth.user.data.name)
      this.updateLastName(this.$auth.user.data.surname)
      this.updateTitle(this.$auth.user.data.title)
      this.updateSummary(this.$auth.user.data.summary)
      this.updateKnowledges(this.$auth.user.data.knowledges)
      this.updateLanguages(this.$auth.user.data.languages)
    },
    parsedLanguagesToSelect() {
      const languages = this.langItems
      this.langsArray = []
      if (languages) {
        for (const key in languages) {
          this.langsArray.push({
            text: `${languages[key].en}`,
            value: key
          })
        }
      }
    },
    parsedKnowledgesToSelect() {
      const knowledges = this.knowledgeItems
      this.knowledgeArray = []
      if (knowledges) {
        for (const key in knowledges) {
          this.knowledgeArray.push({
            text: `${knowledges[key].en}`,
            value: key
          })
        }
      }
    },
    updateName(value) {
      this.$store.commit('users/SET_NAME', value)
    },
    updateLastName(value) {
      this.$store.commit('users/SET_LAST_NAME', value)
    },
    updateTitle(value) {
      this.$store.commit('users/SET_TITLE', value)
    },
    updateSummary(value) {
      this.$store.commit('users/SET_SUMMARY', value)
    },
    updateKnowledges(value) {
      this.$store.commit('users/SET_KNOWLEDGES', value)
    },
    updateLanguages(value) {
      this.$store.commit('users/SET_LANGUAGES', value)
    },
    async saveUser() {
      try {
        const editUser = await this.editUserApi()

        if (!editUser.error) {
          this.dialog = false

          // Upate auth user info
          await this.$auth.fetchUser()
        }
      } catch (error) {
        this.handleError(error)
      }
    }
  }
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
