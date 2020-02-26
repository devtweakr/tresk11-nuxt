<template>
  <div>
    <PageTitle page-title="EXTRAS" />
    <b-row>
      <div v-html="$options.filters.drupalLinks(page.body.processed)" v-if="page" class="col-12" />
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
      // Basic page extras
      const pageId = '27f572f8-feb8-4a3f-b0d5-e98c9c784a2e'

      return this.$store.getters['drupal/get']('node--page')[pageId]
    }
  },
  fetch ({ store, params }) {
    // Basic page extras
    const pageId = '27f572f8-feb8-4a3f-b0d5-e98c9c784a2e'

    const query = {}
    return store.dispatch('drupal/get', [`node/page/${pageId}`, {
      params: query
    }])
  }
}
</script>

<style scoped>

</style>
