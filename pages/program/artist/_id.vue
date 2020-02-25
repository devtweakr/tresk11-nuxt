<template>
  <div class="node-page">
    <PageTitle :pageTitle="artist.title" />
    <div>
      <p v-for="link in artist.field_povezave">
        <a :href="link.uri" target="blank">link</a>
      </p>
    </div>
    <img :src="artist.field_slika | treskSlika" class="node-slika">
    <p>{{ artist.field_cas_nastopa }}</p>
    <p v-html="$options.filters.drupalLinks(artist.body.value)" v-if="artist.body" />
    {{ $log(artist) }}
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
    const id = decodeURIComponent(params.id)
    // Poskusi tudi drupalov path alias
    const alias = `/artist/${id}`

    const query = {
      include: 'field_slika',
      'filter[field_leto.name][value]': '2020',
      'filter[id-group][group][conjunction]': 'OR',
      'filter[title][condition][path]': 'title',
      'filter[title][condition][operator]': '=',
      'filter[title][condition][value]': id,
      'filter[title][condition][memberOf]': 'id-group',
      'filter[alias][condition][path]': 'field_path',
      'filter[alias][condition][operator]': '=',
      'filter[alias][condition][value]': alias,
      'filter[alias][condition][memberOf]': 'id-group'
    }
    return store.dispatch('drupal/get', [`node/band`, {
      params: query
    }])
  }
}
</script>

<style scoped>

</style>
