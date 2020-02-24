<template>
  <div class="node-page">
    <PageTitle :pageTitle="artist.title" />
    <img :src="artist.field_slika | treskSlika" class="node-slika">
    <p v-html="$options.filters.drupalLinks(artist.body.value)" v-if="artist.body" />
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
      include: 'field_slika',
      'filter[field_leto.name][value]': '2020',
      'filter[title]': decodeURIComponent(params.id)
      /*
      'filter[path.alias][operator]': 'CONTAINS',
      'filter[path.alias][value]': decodeURIComponent(params.id)
*/
    }
    return store.dispatch('drupal/get', [`node/band`, {
      params: query
    }])
  }
}
</script>

<style scoped>

</style>
