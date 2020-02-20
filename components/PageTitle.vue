<template>
  <div class="mt-3 mb-5">
    <h1>{{ pageTitle }}</h1>
  </div>
</template>

<script>
export default {
  name: 'PageTitle',
  props: {
    pageTitle: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>

</style>
