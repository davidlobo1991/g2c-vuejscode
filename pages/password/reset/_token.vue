<template>
  <v-layout>
    <PasswordReset :token="tokenForm" />
  </v-layout>
</template>

<script>
import PasswordReset from '~/components/PasswordReset.vue'

export default {
  name: 'PasswordResetToken',
  components: {
    PasswordReset
  },
  data() {
    return {
      tokenForm: null
    }
  },

  validate({ params }) {
    return /^[a-z0-9]+$/.test(params.token)
  },

  mounted() {
    this.tokenForm = this.$route.params.token
    console.log(this.tokenForm)
  }
}
</script>
