<template>
  <div class="c-conversation">
    <div class="c-conversation__time-separator">
      <span class="c-conversation__time-separator--lines">1/3/2020</span>
    </div>
    <div
      class="c-conversation__notification c-conversation__notification--blue"
    >
      Requested Connection
    </div>
    <div class="c-conversation__send-message">
      Hi Gabel!<br />
      I would like to connect with you. I have some questions about a Legal
      issue and I would like to know your opinion.
      <br />
      Thanks,<br />
      Jess
    </div>
    <div class="c-conversation__time-separator">
      <span class="c-conversation__time-separator--lines">Monday</span>
    </div>
    <div
      class="c-conversation__notification c-conversation__notification--white"
    >
      Gabel has accepted your connection
    </div>
    <div class="c-conversation__send-message">
      Hi Gabel! Thanks for accepting my request. I would like to speack to you
      about a legal issue with my startup.
    </div>
    <div class="c-conversation__request">
      <div>
        <div class="c-conversation__request--title">
          Gabel has send you a new message. Accept to read.
        </div>
        <div class="c-conversation__request--time-left">
          Time left to accept the message: 99h 58m 12s
        </div>
      </div>
      <div class="c-conversation__request--button-cont">
        <div depressed class="c-conversation__request--accept">
          <span>100$ - </span>
          Accept
        </div>
        <v-btn icon color="#8C8C8C">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </div>
      <v-progress-linear
        value="25"
        rounded="true"
        color="#0186FF"
        background-color="transparent"
        height="3"
        class="c-conversation__request--progress"
      ></v-progress-linear>
    </div>
    <div class="c-conversation__receive-message">
      Hi Jessica, nice to meet you!<br />
      Sure, I would be happy to help you! Please let me know what is it about or
      book and eMeeting with me. This week I have some available slots
    </div>
    <div class="c-conversation__receive-message">
      Hi Jessica, nice to meet you!<br />
      Sure, I would be happy to help you! Please let me know what is it about or
      book and eMeeting with me. This week I have some available slots
    </div>
    <div class="c-conversation__receive-message">
      Hi Jessica, nice to meet you!<br />
      Sure, I would be happy to help you! Please let me know what is it about or
      book and eMeeting with me. This week I have some available slots
    </div>
    <div class="c-conversation__receive-message">
      Hi Jessica, nice to meet you!<br />
      Sure, I would be happy to help you! Please let me know what is it about or
      book and eMeeting with me. This week I have some available slots
    </div>
    <div class="c-conversation__receive-message">
      Hi Jessica, nice to meet you!<br />
      Sure, I would be happy to help you! Please let me know what is it about or
      book and eMeeting with me. This week I have some available slots
    </div>
    <div class="c-conversation__receive-message">
      Hi Jessica, nice to meet you!<br />
      Sure, I would be happy to help you! Please let me know what is it about or
      book and eMeeting with me. This week I have some available slots
    </div>
    <div class="c-conversation__receive-message">
      Hi Jessica, nice to meet you!<br />
      Sure, I would be happy to help you! Please let me know what is it about or
      book and eMeeting with me. This week I have some available slots
    </div>
    <div class="c-conversation__receive-message">
      Hi Jessica, nice to meet you!<br />
      Sure, I would be happy to help you! Please let me know what is it about or
      book and eMeeting with me. This week I have some available slots
    </div>
  </div>
</template>

<script>
export default {
  name: 'MessagesConversation.vue'
}
</script>

<style lang="scss" scoped>
.c-conversation {
  background-color: #f6f9fc;
  padding: 25px;
  overflow-y: scroll;
  height: calc(100vh - 76px);
  &__time-separator {
    color: #d2d1d1;
    font-size: 12px;
    width: 100%;
    text-align: center;
    border-bottom: 1px solid #eff1f2;
    line-height: 0;
    margin: 25px 0 30px;
    background-color: #f6f9fc;
    text-transform: uppercase;
    & .c-conversation__time-separator--lines {
      background: inherit;
      padding: 0 10px;
    }
  }
  &__notification {
    border-radius: 6px;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.2);
    margin: 0 auto 8px auto;
    width: fit-content;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 11px 22px;
    box-sizing: border-box;
    color: #4d4d4d;
    font-size: 15px;
    font-weight: 500;
    &--blue {
      background-color: #daefff;
    }
    &--white {
      background-color: #fff;
    }
  }
  &__send-message {
    background-color: #dff1ff;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.2);
    padding: 20px;
    box-sizing: border-box;
    max-width: 62.5%;
    margin: auto 0 8px auto;
    position: relative;
    &:after {
      content: '';
      position: absolute;
      border-style: solid;
      border-width: 7px 0 7px 23px;
      border-color: transparent #dff1ff;
      display: block;
      z-index: 1;
      margin-top: -4px;
      right: -20px;
      top: 0;
      transform: rotate(-16deg);
    }
  }
  &__receive-message {
    background-color: #fff;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.2);
    padding: 20px;
    box-sizing: border-box;
    max-width: 62.5%;
    margin: auto auto 8px 0;
    position: relative;
    &:after {
      content: '';
      position: absolute;
      border-style: solid;
      border-width: 7px 23px 7px 0;
      border-color: transparent #fff;
      display: block;
      z-index: 1;
      margin-top: -4px;
      left: -20px;
      top: 0;
      transform: rotate(16deg);
    }
  }
  &__request {
    border-radius: 6px;
    background-color: #ffffff;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.2);
    margin-bottom: 8px;
    padding: 20px;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    &--title {
      color: #4d4d4d;
      font-size: 15px;
      font-weight: 500;
    }
    &--time-left {
      color: #8c8c8c;
      font-size: 12px;
    }
    &--button-cont {
      display: flex;
      align-items: center;
    }
    &--accept {
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
    &--progress {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      ::v-deep {
        .v-progress-linear__background {
          /*border: solid 1px #d1d1d2 !important;*/
        }
      }
    }
  }
}
</style>
