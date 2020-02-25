<template>
  <div>
    <PageTitle page-title="EXTRAS" />
    <div class="row">
      <div v-html="page.body.value" v-if="page" class="col-12" />
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
