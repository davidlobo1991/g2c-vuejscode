<template>
  <v-layout>
    <CreateAccountSteps />
  </v-layout>
</template>

<script>
import CreateAccountSteps from '~/components/CreateAccountSteps.vue'

export default {
  name: 'CreateAccount',
  components: {
    CreateAccountSteps
  }
}
</script>
