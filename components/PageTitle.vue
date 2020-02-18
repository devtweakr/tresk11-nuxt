<template>
  <div>
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
