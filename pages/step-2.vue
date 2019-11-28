<template>
  <v-layout>
    <!-- <login title="Refineria"></login> -->
    <Step @change="enviarAlPadre"></Step>
  </v-layout>
</template>

<script>
import Step from '~/components/Step.vue'

export default {
  layout: 'default',
  components: {
    Step
  },
  methods: {
    enviarAlPadre(value) {
      console.info(`Hola desde el padre ${value}`)
    }
  }
}
</script>
