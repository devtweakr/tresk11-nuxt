<template>
  <div>
    <PageTitle :pageTitle="dogodek.title" />
    <b-row>
      <b-col class="pogovorContainer">
        <p v-html="$options.filters.drupalLinks(dogodek.body.processed)" v-if="dogodek.body" class="text-justify" />
      </b-col>
    </b-row>
  </div>
</template>

<script>
import PageTitle from '@/components/PageTitle'

export default {
  components: {
    PageTitle
  },
  computed: {
    dogodek () {
      return Object.values(this.$store.getters['drupal/get']('node--koncert'))[0]
    }
  },
  fetch ({ store, params }) {
    const id = decodeURIComponent(params.id)
    // Poskusi tudi drupalov path alias
    const alias = `/dogodek/${id}`

    const query = {
      'filter[field_leto.name][value]': '2020',
      'filter[field_path]': alias
    }
    return store.dispatch('drupal/get', [`node/koncert`, {
      params: query
    }])
  }
}
</script>

<style scoped>

</style>
