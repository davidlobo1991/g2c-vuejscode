<template>
  <div class="c-connections">
    <TopMobile />
    <EmeetingsNavbar active-tab="received" />
    <div class="c-emeetings-requests">
      <div class="c-emeetings-requests--cont">
        <div @click.self="showContact" class="c-emeetings-requests__elem">
          <div class="c-emeetings-requests__elem--info-cont">
            <div class="c-emeetings-requests__elem--time">
              <div class="c-emeetings-requests__elem--time-cont">
                <div class="c-emeetings-requests__elem--time-title">6 Jul</div>
                <div class="c-emeetings-requests__elem--time-description">
                  Mon
                </div>
              </div>
              <div class="c-emeetings-requests__elem--time-cont">
                <div class="c-emeetings-requests__elem--time-title">18:15</div>
                <div class="c-emeetings-requests__elem--time-description">
                  1 hour
                </div>
              </div>
            </div>
            <div
              @click="showContact"
              class="c-emeetings-requests__elem--info-cont"
            >
              <img
                :src="require('~/assets/images/network/users/persona1.png')"
                class="c-emeetings-requests__elem--image"
                alt=""
              />
              <div class="c-emeetings-requests__elem--name-cont">
                <div class="c-emeetings-requests__elem--name">
                  Annabel Amber
                </div>
              </div>
            </div>
          </div>
          <div
            @click.self="showContact"
            class="c-emeetings-requests__elem--progress-buttons-cont"
          >
            <div
              @click="showContact"
              class="c-emeetings-requests__elem--progress-cont"
            >
              <div>
                Initial fee:
                <span class="c-emeetings-requests__elem--progress-cont--bold"
                  >$50</span
                >
              </div>
              <div>
                Price per min:
                <span class="c-emeetings-requests__elem--progress-cont--bold"
                  >$0.2</span
                >
              </div>
            </div>
            <div class="c-emeetings-requests__elem--button-cont">
              <div depressed class="connectbutton__accept">
                <span>100$ - </span>
                Accept
              </div>
              <v-btn text color="#8C8C8C">Cancel</v-btn>
            </div>
          </div>
        </div>
        <div @click.self="showContact" class="c-emeetings-requests__elem">
          <div class="c-emeetings-requests__elem--info-cont">
            <div class="c-emeetings-requests__elem--time">
              <div class="c-emeetings-requests__elem--time-cont">
                <div class="c-emeetings-requests__elem--time-title">6 Jul</div>
                <div class="c-emeetings-requests__elem--time-description">
                  Mon
                </div>
              </div>
              <div class="c-emeetings-requests__elem--time-cont">
                <div class="c-emeetings-requests__elem--time-title">18:15</div>
                <div class="c-emeetings-requests__elem--time-description">
                  1 hour
                </div>
              </div>
            </div>
            <div
              @click="showContact"
              class="c-emeetings-requests__elem--info-cont"
            >
              <img
                :src="require('~/assets/images/network/users/persona1.png')"
                class="c-emeetings-requests__elem--image"
                alt=""
              />
              <div class="c-emeetings-requests__elem--name-cont">
                <div class="c-emeetings-requests__elem--name">
                  Annabel Amber
                </div>
              </div>
            </div>
          </div>
          <div
            @click.self="showContact"
            class="c-emeetings-requests__elem--progress-buttons-cont"
          >
            <div
              @click="showContact"
              class="c-emeetings-requests__elem--progress-cont"
            >
              <div>
                Initial fee:
                <span class="c-emeetings-requests__elem--progress-cont--bold"
                  >$50</span
                >
              </div>
              <div>
                Price per min:
                <span class="c-emeetings-requests__elem--progress-cont--bold"
                  >$0.2</span
                >
              </div>
            </div>
            <div class="c-emeetings-requests__elem--button-cont">
              <div depressed class="connectbutton__accept">
                <span>100$ - </span>
                Accept
              </div>
              <v-btn text color="#8C8C8C">Cancel</v-btn>
            </div>
          </div>
        </div>
        <div @click.self="showContact" class="c-emeetings-requests__elem">
          <div class="c-emeetings-requests__elem--info-cont">
            <div class="c-emeetings-requests__elem--time">
              <div class="c-emeetings-requests__elem--time-cont">
                <div class="c-emeetings-requests__elem--time-title">6 Jul</div>
                <div class="c-emeetings-requests__elem--time-description">
                  Mon
                </div>
              </div>
              <div class="c-emeetings-requests__elem--time-cont">
                <div class="c-emeetings-requests__elem--time-title">18:15</div>
                <div class="c-emeetings-requests__elem--time-description">
                  1 hour
                </div>
              </div>
            </div>
            <div
              @click="showContact"
              class="c-emeetings-requests__elem--info-cont"
            >
              <img
                :src="require('~/assets/images/network/users/persona1.png')"
                class="c-emeetings-requests__elem--image"
                alt=""
              />
              <div class="c-emeetings-requests__elem--name-cont">
                <div class="c-emeetings-requests__elem--name">
                  Annabel Amber
                </div>
              </div>
            </div>
          </div>
          <div
            @click.self="showContact"
            class="c-emeetings-requests__elem--progress-buttons-cont"
          >
            <div
              @click="showContact"
              class="c-emeetings-requests__elem--progress-cont"
            >
              <div>
                Initial fee:
                <span class="c-emeetings-requests__elem--progress-cont--bold"
                  >$50</span
                >
              </div>
              <div>
                Price per min:
                <span class="c-emeetings-requests__elem--progress-cont--bold"
                  >$0.2</span
                >
              </div>
            </div>
            <div class="c-emeetings-requests__elem--button-cont">
              <div depressed class="connectbutton__accept">
                <span>100$ - </span>
                Accept
              </div>
              <v-btn text color="#8C8C8C">Cancel</v-btn>
            </div>
          </div>
        </div>
        <div @click.self="showContact" class="c-emeetings-requests__elem">
          <div class="c-emeetings-requests__elem--info-cont">
            <div class="c-emeetings-requests__elem--time">
              <div class="c-emeetings-requests__elem--time-cont">
                <div class="c-emeetings-requests__elem--time-title">6 Jul</div>
                <div class="c-emeetings-requests__elem--time-description">
                  Mon
                </div>
              </div>
              <div class="c-emeetings-requests__elem--time-cont">
                <div class="c-emeetings-requests__elem--time-title">18:15</div>
                <div class="c-emeetings-requests__elem--time-description">
                  1 hour
                </div>
              </div>
            </div>
            <div
              @click="showContact"
              class="c-emeetings-requests__elem--info-cont"
            >
              <img
                :src="require('~/assets/images/network/users/persona1.png')"
                class="c-emeetings-requests__elem--image"
                alt=""
              />
              <div class="c-emeetings-requests__elem--name-cont">
                <div class="c-emeetings-requests__elem--name">
                  Annabel Amber
                </div>
              </div>
            </div>
          </div>
          <div
            @click.self="showContact"
            class="c-emeetings-requests__elem--progress-buttons-cont"
          >
            <div
              @click="showContact"
              class="c-emeetings-requests__elem--progress-cont"
            >
              <div>
                Initial fee:
                <span class="c-emeetings-requests__elem--progress-cont--bold"
                  >$50</span
                >
              </div>
              <div>
                Price per min:
                <span class="c-emeetings-requests__elem--progress-cont--bold"
                  >$0.2</span
                >
              </div>
            </div>
            <div class="c-emeetings-requests__elem--button-cont">
              <div depressed class="connectbutton__accept">
                <span>100$ - </span>
                Accept
              </div>
              <v-btn text color="#8C8C8C">Cancel</v-btn>
            </div>
          </div>
        </div>
      </div>
    </div>
    <BottomMobile activeTab="emeetings" />
  </div>
</template>

<script>
import EmeetingsNavbar from '~/components/emeetings/EmeetingsNavbar'
import TopMobile from '~/components/site/TopMobile'
import BottomMobile from '~/components/site/BottomMobile'

export default {
  name: 'EmeetingsMain',
  components: {
    EmeetingsNavbar,
    TopMobile,
    BottomMobile
  }
}
</script>

<style lang="scss" scoped>
.c-connections {
  width: 100%;
}
.connectbutton {
  width: 100%;

  &__accept {
    margin-right: 15px;
    padding: 25px;
    width: 100%;
    height: 40px;
    border: 2px solid #4dd695;
    background-image: linear-gradient(to left, #00db73, #08d5b9, #00db73);
    background-size: 200%;
    transition: 0.8s;
    border-radius: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    cursor: pointer;

    &:hover {
      background-position: right;
    }
  }
}
.c-emeetings-requests {
  padding: 25px;
  &--cont {
    box-sizing: border-box;
  }
  &__elem {
    border: 1px solid #eff1f2;
    border-radius: 4px;
    background-color: #ffffff;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
    padding: 20px;
    margin-bottom: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    &:last-of-type {
      border-bottom: none;
    }
    &--info-cont {
      display: flex;
      align-items: center;
    }
    &--time {
      display: flex;
    }
    &--time-cont {
      flex-shrink: 0;
      margin-right: 30px;
    }
    &--time-title {
      color: #29363d;
      font-size: 18px;
      font-weight: 500;
    }
    &--time-description {
      color: #8c8c8c;
      font-size: 15px;
    }
    &--info-cont {
      display: flex;
      align-items: center;
      width: 35%;
    }
    &--image {
      width: 67px;
      height: 67px;
      border-radius: 50px;
    }
    &--name-cont {
      padding-left: 15px;
      flex-shrink: 0;
    }
    &--name {
      color: #29363d;
      font-size: 18px;
      font-weight: 500;
    }
    &--description {
      color: #8c8c8c;
      font-size: 15px;
    }
    &--progress-buttons-cont {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 60%;
    }
    &--progress-cont {
      display: flex;
      flex-flow: column;
      justify-content: center;
      align-items: flex-start;
      color: #8c8c8c;
      font-size: 16px;
      width: 48%;
      &--bold {
        color: #29363d;
        font-size: 18px;
        font-weight: 500;
      }
    }
    &--progress {
      width: 100%;
      ::v-deep {
        .v-progress-linear__background {
          border: solid 1px #d1d1d2 !important;
        }
      }
    }
    &--button-cont {
      display: flex;
      align-items: center;
    }
  }
}
@media screen and (max-width: 1200px) {
  .c-emeetings-requests {
    &__elem {
      flex-flow: column;
      &--info-cont {
        width: 100%;
      }
      &--progress-buttons-cont {
        /*flex-flow: column;*/
        align-items: flex-end;
        width: 100%;
      }
      &--progress-cont {
        width: auto;
        padding-bottom: 0;
      }
    }
  }
}
@media screen and (max-width: 992px) {
  .connectbutton {
    &__accept {
      padding: 17px;
    }
  }
  .c-emeetings-requests {
    &__elem {
      flex-flow: column;
      &--info-cont {
        width: 100%;
        padding-bottom: 20px;
      }
      &--progress-buttons-cont {
        width: 100%;
      }
      &--button-cont {
        display: flex;
        align-items: center;
      }
    }
  }
}
@media screen and (max-width: 500px) {
  .c-emeetings-requests {
    &__elem {
      &--info-cont {
        flex-flow: column;
        padding: 0;
      }
      &--time {
        flex-flow: row;
        width: 100%;
        justify-content: space-between;
      }
      &--time-cont {
        margin-right: 0;
      }
      &--image {
        margin-bottom: 15px;
      }
      &--progress-cont {
        width: 100%;
        align-items: center;
        margin-bottom: 20px;
      }
      &--progress-buttons-cont {
        flex-flow: column;
      }
      &--button-cont {
        flex-flow: column;
        width: 100%;
      }
    }
  }
}
</style>
