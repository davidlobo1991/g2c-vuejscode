<template>
  <section class="c-home">
    <TopMobile />
    <WelcomeBanner />
    <div class="c-home__wrapper">
      <div class="c-home__search--cont">
        <v-text-field
          :hide-details="true"
          outlined
          placeholder="Who or what are you looking for?"
          append-icon="mdi-magnify"
          class="c-home__search--input"
          height="57px"
          color="#0087FF"
        >
        </v-text-field>
      </div>
      <div class="c-home__navbar">
        <ul class="c-home__navbar--list">
          <li class="c-home__navbar--elem">
            <a href="#" class="c-home__navbar--link">My Connections</a>
          </li>
          <li class="c-home__navbar--elem">
            <a href="#" class="c-home__navbar--link-active">Online</a>
          </li>
          <li class="c-home__navbar--elem">
            <a href="#" class="c-home__navbar--link">Education</a>
          </li>
          <li class="c-home__navbar--elem">
            <a href="#" class="c-home__navbar--link">Bitcoin</a>
          </li>
          <li class="c-home__navbar--elem">
            <a href="#" class="c-home__navbar--link">Startups</a>
          </li>
          <li class="c-home__navbar--elem">
            <a href="#" class="c-home__navbar--link">Finance</a>
          </li>
          <li class="c-home__navbar--elem">
            <a href="#" class="c-home__navbar--link">Legal</a>
          </li>
          <li class="c-home__navbar--elem">
            <a href="#" class="c-home__navbar--link">Health</a>
          </li>
          <li class="c-home__navbar--elem">
            <a href="#" class="c-home__navbar--link">Design</a>
          </li>
          <li class="c-home__navbar--elem">
            <a href="#" class="c-home__navbar--link">Marketing</a>
          </li>
          <li class="c-home__navbar--elem">
            <a href="#" class="c-home__navbar--link">Coding</a>
          </li>
        </ul>
      </div>
      <ProfileCards />
      <!-- <div class="c-home__cards">
        <div class="c-home__cards__wrapper">
          <div class="c-home__cards__card">
            <div class="c-home__cards__card--img-cont">
              <nuxt-link
                :src="require('@/assets/images/persona1.png')"
                tag="img"
                to="/"
                class="c-home__cards__card--img"
              />
              <div
                class="c-home__cards__card--status u-status--available"
              ></div>
            </div>
            <div class="c-home__cards__card--name">
              Gabel Shebera
            </div>
            <div class="c-home__cards__card--username">
              @gabelsh
            </div>
            <div class="c-home__cards__card--description">
              Company’s Legal Advisor & Chess Amateur
            </div>
            <div class="c-home__cards__card--details-cont">
              <div class="c-home__cards__card--details">
                <span class="c-home__cards__card--details-num">210</span>
                Connections
              </div>
              <div class="c-home__cards__card--details">
                <span class="c-home__cards__card--details-num">176</span>
                Recommends
              </div>
            </div>
            <v-btn
              @click="showContact"
              text
              class="c-home__cards__card--button"
              color="#0087FF"
              dark
            >
              View Profile
            </v-btn>
          </div>

          <div class="c-home__cards__card">
            <div class="c-home__cards__card--img-cont">
              <nuxt-link
                :src="require('@/assets/images/persona1.png')"
                tag="img"
                to="/"
                class="c-home__cards__card--img"
              />
              <div
                class="c-home__cards__card--status u-status--available"
              ></div>
            </div>
            <div class="c-home__cards__card--name">
              Gabel Sheber
            </div>
            <div class="c-home__cards__card--username">
              @gabelsh
            </div>
            <div class="c-home__cards__card--description">
              Company’s Legal Advisor & Chess Amateur
            </div>
            <div class="c-home__cards__card--details-cont">
              <div class="c-home__cards__card--details">
                <span class="c-home__cards__card--details-num">210</span>
                Connections
              </div>
              <div class="c-home__cards__card--details">
                <span class="c-home__cards__card--details-num">176</span>
                Recommends
              </div>
            </div>
            <v-btn
              depressed
              class="c-home__cards__card--button"
              color="#0087FF"
              dark
            >
              1$ - Connect
            </v-btn>
          </div>

          <div class="c-home__cards__card">
            <div class="c-home__cards__card--img-cont">
              <nuxt-link
                :src="require('@/assets/images/persona1.png')"
                tag="img"
                to="/"
                class="c-home__cards__card--img"
              />
              <div
                class="c-home__cards__card--status u-status--available"
              ></div>
            </div>
            <div class="c-home__cards__card--name">
              Gabel Sheber
            </div>
            <div class="c-home__cards__card--username">
              @gabelsh
            </div>
            <div class="c-home__cards__card--description">
              Company’s Legal Advisor & Chess Amateur
            </div>
            <div class="c-home__cards__card--details-cont">
              <div class="c-home__cards__card--details">
                <span class="c-home__cards__card--details-num">210</span>
                Connections
              </div>
              <div class="c-home__cards__card--details">
                <span class="c-home__cards__card--details-num">176</span>
                Recommends
              </div>
            </div>
            <v-btn
              depressed
              class="c-home__cards__card--button"
              color="#0087FF"
              dark
            >
              Connect
            </v-btn>
          </div>

          <div class="c-home__cards__card">
            <div class="c-home__cards__card--img-cont">
              <nuxt-link
                :src="require('@/assets/images/persona1.png')"
                tag="img"
                to="/"
                class="c-home__cards__card--img"
              />
              <div
                class="c-home__cards__card--status u-status--available"
              ></div>
            </div>
            <div class="c-home__cards__card--name">
              Gabel Sheber
            </div>
            <div class="c-home__cards__card--username">
              @gabelsh
            </div>
            <div class="c-home__cards__card--description">
              Company’s Legal Advisor & Chess Amateur
            </div>
            <div class="c-home__cards__card--details-cont">
              <div class="c-home__cards__card--details">
                <span class="c-home__cards__card--details-num">210</span>
                Connections
              </div>
              <div class="c-home__cards__card--details">
                <span class="c-home__cards__card--details-num">176</span>
                Recommends
              </div>
            </div>
            <v-btn depressed class="c-home__cards__card--button">
              1$ - Pending
            </v-btn>
          </div>
          <div class="c-home__cards__card">
            <div class="c-home__cards__card--img-cont">
              <nuxt-link
                :src="require('@/assets/images/persona1.png')"
                tag="img"
                to="/"
                class="c-home__cards__card--img"
              />
              <div
                class="c-home__cards__card--status u-status--available"
              ></div>
            </div>
            <div class="c-home__cards__card--name">
              Gabel Sheber
            </div>
            <div class="c-home__cards__card--username">
              @gabelsh
            </div>
            <div class="c-home__cards__card--description">
              Company’s Legal Advisor & Chess Amateur
            </div>
            <div class="c-home__cards__card--details-cont">
              <div class="c-home__cards__card--details">
                <span class="c-home__cards__card--details-num">210</span>
                Connections
              </div>
              <div class="c-home__cards__card--details">
                <span class="c-home__cards__card--details-num">176</span>
                Recommends
              </div>
            </div>
            <v-btn
              depressed
              class="c-home__cards__card--button"
              color="#0087FF"
              dark
            >
              1$ - Connect
            </v-btn>
          </div>

          <div class="c-home__cards__card">
            <div class="c-home__cards__card--img-cont">
              <nuxt-link
                :src="require('@/assets/images/persona1.png')"
                tag="img"
                to="/"
                class="c-home__cards__card--img"
              />
              <div
                class="c-home__cards__card--status u-status--available"
              ></div>
            </div>
            <div class="c-home__cards__card--name">
              Gabel Sheber
            </div>
            <div class="c-home__cards__card--username">
              @gabelsh
            </div>
            <div class="c-home__cards__card--description">
              Company’s Legal Advisor & Chess Amateur
            </div>
            <div class="c-home__cards__card--details-cont">
              <div class="c-home__cards__card--details">
                <span class="c-home__cards__card--details-num">210</span>
                Connections
              </div>
              <div class="c-home__cards__card--details">
                <span class="c-home__cards__card--details-num">176</span>
                Recommends
              </div>
            </div>
            <v-btn
              depressed
              class="c-home__cards__card--button"
              color="#0087FF"
              dark
            >
              1$ - Connect
            </v-btn>
          </div>

          <div class="c-home__cards__card">
            <div class="c-home__cards__card--img-cont">
              <nuxt-link
                :src="require('@/assets/images/persona1.png')"
                tag="img"
                to="/"
                class="c-home__cards__card--img"
              />
              <div
                class="c-home__cards__card--status u-status--available"
              ></div>
            </div>
            <div class="c-home__cards__card--name">
              Gabel Sheber
            </div>
            <div class="c-home__cards__card--username">
              @gabelsh
            </div>
            <div class="c-home__cards__card--description">
              Company’s Legal Advisor & Chess Amateur
            </div>
            <div class="c-home__cards__card--details-cont">
              <div class="c-home__cards__card--details">
                <span class="c-home__cards__card--details-num">210</span>
                Connections
              </div>
              <div class="c-home__cards__card--details">
                <span class="c-home__cards__card--details-num">176</span>
                Recommends
              </div>
            </div>
            <v-btn
              depressed
              class="c-home__cards__card--button"
              color="#0087FF"
              dark
            >
              1$ - Connect
            </v-btn>
          </div>

          <div class="c-home__cards__card">
            <div class="c-home__cards__card--img-cont">
              <nuxt-link
                :src="require('@/assets/images/persona1.png')"
                tag="img"
                to="/"
                class="c-home__cards__card--img"
              />
              <div
                class="c-home__cards__card--status u-status--available"
              ></div>
            </div>
            <div class="c-home__cards__card--name">
              Gabel Sheber
            </div>
            <div class="c-home__cards__card--username">
              @gabelsh
            </div>
            <div class="c-home__cards__card--description">
              Company’s Legal Advisor & Chess Amateur
            </div>
            <div class="c-home__cards__card--details-cont">
              <div class="c-home__cards__card--details">
                <span class="c-home__cards__card--details-num">210</span>
                Connections
              </div>
              <div class="c-home__cards__card--details">
                <span class="c-home__cards__card--details-num">176</span>
                Recommends
              </div>
            </div>
            <v-btn
              depressed
              class="c-home__cards__card--button"
              color="#0087FF"
              dark
            >
              1$ - Connect
            </v-btn>
          </div>

          <div class="c-home__cards__card">
            <div class="c-home__cards__card--img-cont">
              <nuxt-link
                :src="require('@/assets/images/persona1.png')"
                tag="img"
                to="/account"
                class="c-home__cards__card--img"
              />
              <div
                class="c-home__cards__card--status u-status--available"
              ></div>
            </div>
            <div class="c-home__cards__card--name">
              Gabel Sheber
            </div>
            <div class="c-home__cards__card--username">
              @gabelsh
            </div>
            <div class="c-home__cards__card--description">
              Company’s Legal Advisor & Chess Amateur
            </div>
            <div class="c-home__cards__card--details-cont">
              <div class="c-home__cards__card--details">
                <span class="c-home__cards__card--details-num">210</span>
                Connections
              </div>
              <div class="c-home__cards__card--details">
                <span class="c-home__cards__card--details-num">176</span>
                Recommends
              </div>
            </div>
            <v-btn
              depressed
              class="c-home__cards__card--button"
              color="#0087FF"
              dark
            >
              1$ - Connect
            </v-btn>
          </div>

          <div class="c-home__cards__card">
            <div class="c-home__cards__card--img-cont">
              <nuxt-link
                :src="require('@/assets/images/persona1.png')"
                tag="img"
                to="/"
                class="c-home__cards__card--img"
              />
              <div
                class="c-home__cards__card--status u-status--available"
              ></div>
            </div>
            <div class="c-home__cards__card--name">
              Gabel Sheber
            </div>
            <div class="c-home__cards__card--username">
              @gabelsh
            </div>
            <div class="c-home__cards__card--description">
              Company’s Legal Advisor & Chess Amateur
            </div>
            <div class="c-home__cards__card--details-cont">
              <div class="c-home__cards__card--details">
                <span class="c-home__cards__card--details-num">210</span>
                Connections
              </div>
              <div class="c-home__cards__card--details">
                <span class="c-home__cards__card--details-num">176</span>
                Recommends
              </div>
            </div>
            <v-btn
              depressed
              class="c-home__cards__card--button"
              color="#0087FF"
              dark
            >
              1$ - Connect
            </v-btn>
          </div>

          <div class="c-home__cards__card">
            <div class="c-home__cards__card--img-cont">
              <nuxt-link
                :src="require('@/assets/images/persona1.png')"
                tag="img"
                to="/"
                class="c-home__cards__card--img"
              />
              <div
                class="c-home__cards__card--status u-status--available"
              ></div>
            </div>
            <div class="c-home__cards__card--name">
              Gabel Sheber
            </div>
            <div class="c-home__cards__card--username">
              @gabelsh
            </div>
            <div class="c-home__cards__card--description">
              Company’s Legal Advisor & Chess Amateur
            </div>
            <div class="c-home__cards__card--details-cont">
              <div class="c-home__cards__card--details">
                <span class="c-home__cards__card--details-num">210</span>
                Connections
              </div>
              <div class="c-home__cards__card--details">
                <span class="c-home__cards__card--details-num">176</span>
                Recommends
              </div>
            </div>
            <v-btn
              depressed
              class="c-home__cards__card--button"
              color="#0087FF"
              dark
            >
              1$ - Connect
            </v-btn>
          </div>
        </div>
      </div> -->
    </div>
    <!-- <v-dialog v-model="IsShowingContactInfo" width="50%" class="c-contact-card">
      <v-card>
        <v-card-text>
          <div class="c-contact-card__cross--cont">
            <v-icon
              @click="IsShowingContactInfo = false"
              class="c-contact-card__cross"
            >
              mdi-close
            </v-icon>
          </div>
          <div class="c-contact-card__profile">
            <div class="c-contact-card__profile--img-cont">
              <nuxt-link
                :src="require('@/assets/images/persona1.png')"
                tag="img"
                to="/"
                class="c-contact-card__profile--img"
              />
              <div
                class="c-contact-card__profile--status u-status--available"
              ></div>
              <div class="c-contact-card__profile--details-cont">
                <div class="c-contact-card__profile--details">
                  <span class="c-contact-card__profile--details-num">210</span>
                  Connections
                </div>
                <div class="c-contact-card__profile--details">
                  <span class="c-contact-card__profile--details-num">176</span>
                  Recommends
                </div>
              </div>
              <v-btn
                depressed
                class="c-home__cards__card--button"
                color="#0087FF"
                dark
              >
                1$ - Connect
              </v-btn>
            </div>
            <div class="c-contact-card__profile--text-cont">
              <div class="c-contact-card__profile--name">Jessica O'Mallie</div>
              <div class="c-contact-card__profile--username">@jessomallie</div>
              <div class="c-contact-card__profile--description">
                Bitcoin Estrategics, Formation in UX/UI & Animal Lover
              </div>
              <div class="c-contact-card__profile--title">Knowledge</div>
              <div class="c-contact-card__profile--label-cont">
                <v-chip
                  class="c-contact-card__profile--label"
                  color="#EFF1F2"
                  label
                >
                  Design
                </v-chip>
                <v-chip
                  class="c-contact-card__profile--label"
                  color="#EFF1F2"
                  label
                >
                  Bitcoin
                </v-chip>
                <v-chip
                  class="c-contact-card__profile--label"
                  color="#EFF1F2"
                  label
                >
                  Startups
                </v-chip>
              </div>
              <div class="c-contact-card__profile--title">Summary</div>
              <div class="c-contact-card__profile--summary">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                urna, et sodales arcu. Vestibulum at mauris ultrices, posuere,
                egestas neque. Sed erat neque, euismod vitae faucibus sit amet,
                pharetra dui. Duis vulputate eu est rutrum. Cras fermentum
                finibus iaculis lacus vehicula egestas neque. Sed erat neque,
                vita.
              </div>
              <div class="c-contact-card__profile--title">Languages</div>
              <div class="c-contact-card__profile--label-cont">
                <v-chip
                  class="c-contact-card__profile--label"
                  color="#EFF1F2"
                  label
                >
                  English
                </v-chip>
                <v-chip
                  class="c-contact-card__profile--label"
                  color="#EFF1F2"
                  label
                >
                  Spanish
                </v-chip>
              </div>
              <div class="c-contact-card__profile--title">Social Media</div>
              <div class="c-contact-card__profile--username">
                <v-icon color="#8C8C8C">mdi-linkedin-box</v-icon>
                <v-icon color="#8C8C8C">mdi-linkedin-box</v-icon>
                <v-icon color="#8C8C8C">mdi-twitter</v-icon>
                <v-icon color="#8C8C8C">mdi-facebook-box</v-icon>
                <v-icon color="#8C8C8C">mdi-instagram</v-icon>
              </div>
            </div>
          </div>
        </v-card-text>
      </v-card>
    </v-dialog>
    -->
    <BottomMobile />
  </section>
</template>

<script>
import WelcomeBanner from '~/components/banners/WelcomeBanner'
import ProfileCards from '~/components/home/network/ProfileCards'
import TopMobile from '~/components/site/TopMobile'
import BottomMobile from '~/components/site/BottomMobile'

export default {
  name: 'Network',
  components: {
    WelcomeBanner,
    ProfileCards,
    TopMobile,
    BottomMobile
  },
  data() {
    return {
      IsShowingContactInfo: false
    }
  },
  methods: {
    showContact() {
      // Llamada AJAX al endpoint
      this.IsShowingContactInfo = true
    }
  }
}
</script>

<style lang="scss" scoped>
/* Clase repetida en componente Sidebar. Buescar manera de ponerla global */
.u-status {
  &--available {
    background-color: #18de82;
  }
  &--bussy {
    background-color: #dd183c;
  }
  &--absent {
    background-color: #dbdb18;
  }
  &--invisible {
    background-color: #d6d6d6;
  }
}
.c-home {
  background-color: #fdfdfd;
  width: 100%;
  &__wrapper {
    display: flex;
    flex-flow: column;
    align-items: center;
    padding: 36px 25px;
  }
  &__search {
    &--cont {
      // background-color: red;
      display: flex;
      min-width: 576px;
    }
    &--input {
    }
  }
  &__navbar {
    // background-color: blue;
    width: 100%;
    padding: 36px 0;
    color: #8c8c8c;
    font-size: 18px;
    font-weight: 500;
    &--list {
      padding: 0;
      display: flex;
      justify-content: space-around;
    }
    &--elem {
      display: inline-block;
      &-active {
        display: inline-block;
        color: #0087ff;
      }
    }
    &--link {
      color: #8c8c8c;
      &:hover {
        color: #545454;
      }
    }
  }
}

@media screen and (max-width: 1500px) {
  .c-home {
    &__navbar {
      font-size: 15px;
    }
    &__search {
      &--cont {
        min-width: 436px;
      }
      &--input {
        // max-width: 436px;
      }
    }
  }
}
@media screen and (max-width: 768px) {
  .c-home {
    &__wrapper {
      padding: 22px 12px;
    }
    &__navbar--list {
      flex-wrap: wrap;
    }
    &__search {
      &--cont {
        min-width: 100%;
      }
    }
  }
}
</style>
