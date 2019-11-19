<template>
  <div class="o-wrapper o-wrapper--l">
    <h1>{{ title }}</h1>
  </div>
</template>

<script>
export default {
  name: 'Login',
  props: {
    title: {
      type: String,
      default: 'caracol'
    }
  }
}
</script>
