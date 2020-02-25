<template>
  <div>
    <PageTitle page-title="URNIK" />
    <div class="row">
      {{ $log($options.filters) }}
      <div v-html="$options.filters.drupalLinks(page.body.value)" v-if="page" class="col-12" />
    </div>
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
  }
}
</script>

<style scoped>

</style>
