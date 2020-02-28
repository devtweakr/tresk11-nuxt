<template>
  <div>
    <PageTitle :page-title="pageTitle" />
    <b-row>
      <b-col>
        {{ $log($options.filters) }}
        <div v-html="$options.filters.drupalLinks(page.body.processed)" v-if="page" />
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
    page () {
      // Basic page urnik
      const pageId = 'c5ac728f-e8f2-4b1b-8af1-8f67d8338709'

      return this.$store.getters['drupal/get']('node--page')[pageId]
    }
  },
  fetch ({ store, params }) {
    // Basic page urnik
    const pageId = 'c5ac728f-e8f2-4b1b-8af1-8f67d8338709'

    const query = {}
    return store.dispatch('drupal/get', [`node/page/${pageId}`, {
      params: query
    }])
  },
  data () {
    return { pageTitle: 'URNIK' }
  },
  head () {
    return { title: this._data.pageTitle }
  }
}
</script>

<style scoped>

</style>
