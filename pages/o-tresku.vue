<template>
  <div>
    <PageTitle page-title="O TRESKU" />
    <div class="row">
      <div v-html="body" v-if="body" class="col-12" />
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
    body () {
      // Basic page O TRESKU
      const pageId = '0f85ff6c-ee4d-46a4-8477-22ade2861505'

      return this.$store.getters['drupal/get']('node--page')[pageId].body.value
    }
  },
  fetch ({ store, params }) {
    // Basic page O TRESKU
    const pageId = '0f85ff6c-ee4d-46a4-8477-22ade2861505'

    const query = {}
    return store.dispatch('drupal/get', [`node/page/${pageId}`, {
      params: query
    }])
  }
}
</script>

<style scoped>

</style>
