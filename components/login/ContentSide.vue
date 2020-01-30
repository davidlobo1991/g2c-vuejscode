<template>
  <section class="c-contentside">
    <div class="c-contentside__wrapper">
      <div class="c-contentside__video">
        <div class="c-contentside__video--title">
          Trade your knowledge
          <br />
          anywhere and everywhere.
        </div>
        <div class="c-contentside__video--video">
          <video
            autoplay="true"
            playsinline
            loop="true"
            src="@/assets/video/1024093451.mp4"
          ></video>
        </div>
      </div>
    </div>
  </section>
</template>

<script></script>

<style lang="scss" scoped>
.c-contentside {
  &__wrapper {
    padding-top: 80px;
  }
  &__video {
    &--title {
      /*width: 60%;*/
      color: #29363d;
      font-family: Roboto;
      font-size: 50px;
      font-weight: bold;
      letter-spacing: 0.35px;
      line-height: 60px;
      padding-left: 100px;
    }
    &--video {
      padding-top: 70px;
    }
    &--video video {
      width: 100%;
    }
  }
}
@media screen and (max-width: 1500px) {
  .c-contentside {
    &__video {
      &--title {
        font-size: 40px;
        line-height: 45px;
      }
    }
  }
}
@media screen and (max-width: 992px) {
  .c-contentside {
    &__video {
      &--title {
        font-size: 34px;
        line-height: 36px;
        padding-left: 60px;
      }
    }
  }
}
@media screen and (max-width: 768px) {
  .c-contentside {
    &__wrapper {
      padding-top: 25px;
    }
    &__video {
      &--title {
        padding-left: 30px;
      }
      &--video {
        padding-top: 25px;
      }
    }
  }
}
</style>
