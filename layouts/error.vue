<template>
  <v-app dark>
    <div class="notfound">
      <div class="notfound__header">
        <img
          @click="showMenu"
          src="@/assets/svg/networksv_logo.svg"
          alt="Logo"
        />
      </div>
      <div class="notfound__wrapper">
        <div class="notfound__text-cont">
          <div
            class="notfound__text-cont--title"
            v-if="error.statusCode === 404"
          >
            {{ pageNotFound }}
          </div>
          <div v-else class="notfound__text-cont--title">
            {{ otherError }}
          </div>
          <div class="notfound__text-cont--description">
            But the information you're looking for is somewhere out there!
          </div>
          <v-btn large color="#0086FF" dark href="/">
            Back to Network
          </v-btn>
        </div>
        <div class="notfound__info-bottom">
          Do you have any problem? Please check out our
          <a href="#">Help Center.</a>
        </div>
      </div>
    </div>
  </v-app>
</template>

<script>
export default {
  layout: 'empty',
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  head() {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError
    return {
      title
    }
  },
  data() {
    return {
      pageNotFound: "Sorry! The page you're looking for doesn't exist...",
      otherError: 'An error occurred'
    }
  }
}
</script>

<style lang="scss" scoped>
.notfound {
  background-color: #fdfdfd;
  width: 100%;
  height: 100%;
  color: #29363d;
  padding: 30px 20px;
  &__header {
    margin: 0 20%;
  }
  &__wrapper {
    margin-top: 30px;
    height: 85%;
    display: flex;
    flex-flow: column;
    justify-content: space-between;
  }
  &__text-cont {
    width: 100%;
    text-align: center;
    &--title {
      font-size: 20px;
      font-weight: bold;
      padding-bottom: 10px;
    }
    &--description {
      font-weight: 300;
      padding-bottom: 50px;
    }
  }
  &__info-bottom {
    text-align: center;
  }
}
</style>
