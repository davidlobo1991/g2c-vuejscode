<template>
  <section class="c-contentside">
    <div class="c-contentside__wrapper">
      <div class="c-video">
        <div class="c-video__title">
          Trade your knowledge anywhere and everywhere.
        </div>
        <div class="c-video__video">
          <video
            autoplay="true"
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
}
.c-video {
  &__title {
    width: 60%;
    color: #29363d;
    font-family: Roboto;
    font-size: 50px;
    font-weight: bold;
    letter-spacing: 0.35px;
    line-height: 60px;
    padding-left: 100px;
  }
  &__video {
    padding-top: 70px;
  }
  &__video video {
    width: 100%;
  }
}
@media screen and (max-width: 899px) {
  .c-video {
    &__title {
      height: auto;
      width: auto;
      font-size: 33px;
      padding-left: 30px;
      padding-right: 30px;
      padding-bottom: 0;
      margin-top: 0;
    }
    &__video {
      padding-top: 26px;
    }
  }
}
</style>
