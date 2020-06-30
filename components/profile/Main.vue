<template>
  <section class="c-account">
    <TopMobile />
    <div class="c-account__wrapper-section">
      <Profile />
    </div>
    <BottomMobile />
  </section>
</template>

<script>
import Profile from '~/components/profile/Profile'
import TopMobile from '~/components/site/TopMobile'
import BottomMobile from '~/components/site/BottomMobile'

export default {
  name: 'Network',
  components: {
    Profile,
    TopMobile,
    BottomMobile
  },
  data: () => ({}),
  methods: {}
}
</script>

<style lang="scss" scoped>
.c-account {
  width: 100%;
  height: 100%;
  background-color: #fdfdfd;
  &__wrapper-section {
    width: 100%;
    padding: 25px;
    display: flex;
  }
  &__right-cont {
    width: 40%;
    margin-left: 12px;
  }
  &__left-cont {
    width: 60%;
    margin-right: 12px;
  }
}
@media screen and (max-width: 768px) {
  .c-account {
    &__wrapper-section {
      flex-flow: column;
      padding: 25px 25px 80px 25px;
    }
    &__right-cont {
      width: 100%;
      margin: 0;
    }
    &__left-cont {
      width: 100%;
      margin: 0 0 15px 0;
    }
  }
}
@media screen and (max-width: 400px) {
  .c-account {
    &__wrapper-section {
      padding: 25px;
    }
  }
}
</style>
