<template>
  <div>
    <PageTitle :page-title="pageTitle" />
    <b-row>
      <b-col>
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
      // Basic page O TRESKU
      const pageId = '0f85ff6c-ee4d-46a4-8477-22ade2861505'

      return this.$store.getters['drupal/get']('node--page')[pageId]
    }
  },
  fetch ({ store, params }) {
    // Basic page O TRESKU
    const pageId = '0f85ff6c-ee4d-46a4-8477-22ade2861505'

    const query = {}
    return store.dispatch('drupal/get', [`node/page/${pageId}`, {
      params: query
    }])
  },
  asyncData (ctx) {
    return { pageTitle: 'O TRESKU' }
  },
  head () {
    return { title: this._data.pageTitle }
  }
}
</script>

<style scoped>

</style>
