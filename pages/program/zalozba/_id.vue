<template>
  <div>
    <PageTitle :pageTitle="zalozba.title" />
    <b-row>
      <b-col md="4" sm="3">
        <b-img :src="zalozba.field_zalozba_logo | treskSlika" fluid class="mb-3" />
      </b-col>
      <b-col md="8" sm="9">
        <p v-html="$options.filters.drupalLinks(zalozba.body.value)" v-if="zalozba.body" />
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
    zalozba () {
      return Object.values(this.$store.getters['drupal/get']('node--zalozba'))[0]
    }
  },
  fetch ({ store, params }) {
    const id = decodeURIComponent(params.id)
    // Poskusi tudi drupalov path alias
    const alias = `/zalozba/${id}`

    const query = {
      include: 'field_zalozba_logo',
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
    return store.dispatch('drupal/get', [`node/zalozba`, {
      params: query
    }])
  }
}
</script>

<style scoped>

</style>
