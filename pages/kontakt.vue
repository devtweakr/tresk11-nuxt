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
  data () {
    return { pageTitle: 'KONTAKT' }
  },
  computed: {
    page () {
      // Basic page kontakt
      const pageId = '69ae2ee0-c951-46b0-bb35-47494aab1f59'

      return this.$store.getters['drupal/get']('node--page')[pageId]
    }
  },
  fetch ({ store, params }) {
    // Basic page kontakt
    const pageId = '69ae2ee0-c951-46b0-bb35-47494aab1f59'

    const query = {}
    return store.dispatch('drupal/get', [`node/page/${pageId}`, {
      params: query
    }])
  },
  head () {
    return { title: this._data.pageTitle }
  }
}
</script>

<style scoped>

</style>
