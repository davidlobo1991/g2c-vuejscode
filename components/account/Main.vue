<template>
  <section class="c-account">
    <TopMobile />
    <AccountNavbar active-tab="Account" />
    <div class="c-account__wrapper-section">
      <div class="c-account__left-cont">
        <AccountProfile />
      </div>
      <div class="c-account__right-cont">
        <AccountStats />
        <AccountPricing />
        <AccountMeetings />
      </div>
    </div>
    <BottomMobile />
  </section>
</template>

<script>
import { firebase } from '~/plugins/firebase'
import AccountNavbar from '~/components/account/AccountNavbar'
import AccountProfile from '~/components/account/AccountProfile'
import AccountStats from '~/components/account/AccountStats'
import AccountPricing from '~/components/account/AccountPricing'
import AccountMeetings from '~/components/account/AccountMeetings'
import TopMobile from '~/components/site/TopMobile'
import BottomMobile from '~/components/site/BottomMobile'

export default {
  name: 'Network',
  components: {
    AccountNavbar,
    AccountProfile,
    AccountStats,
    AccountPricing,
    AccountMeetings,
    TopMobile,
    BottomMobile
  },
  data: () => ({}),
  mounted() {
    const postData = {
      author: 'me',
      uid: 'uid1',
      body: 'body1',
      title: 'title1',
      starCount: 0
    }
    const newPostKey = firebase
      .database()
      .ref()
      .child('posts')
      .push().key
    const uid = 'ubc9fiKjZacO1SbmFNmYzBylGIT2' // user id
    const updates = {}
    updates['/posts/' + newPostKey] = postData
    updates['/user-posts/' + uid + '/' + newPostKey] = postData
    // Update database
    // firebase
    //   .database()
    //   .ref()
    //   .update(updates)
  },
  methods: {
    /* async createUser() {
      try {
        await this.$fireAuth.createUserWithEmailAndPassword(
          'foo@foo.foo',
          'test'
        )
      } catch (e) {
        console.log(e)
      }
      return false;
      var postData = {
        author: username,
        uid: uid,
        body: body,
        title: title,
        starCount: 0,
        authorPic: picture
      };
      // Get a key for a new Post.
      var newPostKey = this.$firebase.database().ref().child('posts').push().key;
      // Write the new post's data simultaneously in the posts list and the user's post list.
      var updates = {};
      updates['/posts/' + newPostKey] = postData;
      updates['/user-posts/' + uid + '/' + newPostKey] = postData;
      await this.$firebase.database().ref().update(updates);
    } */
  }
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
</style>
