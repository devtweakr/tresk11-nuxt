<template>
  <div class="node-page">
    <PageTitle :pageTitle="artist.title" />
    <img :src="artist.field_slika | treskSlika" class="node-slika">
    <p v-html="artist.body.value" v-if="artist.body" />
  </div>
</template>

<script>
import PageTitle from '@/components/PageTitle'

export default {
  components: {
    PageTitle
  },
  computed: {
    artist () {
      return Object.values(this.$store.getters['drupal/get']('node--band'))[0]
    }
  },
  fetch ({ store, params }) {
    const query = {
      include: 'field_slika'
    }
    return store.dispatch('drupal/get', [`node/band`, {
      'filter[title]': params.id,
      params: query
    }])
  }
}
</script>

<style scoped>
</style>
