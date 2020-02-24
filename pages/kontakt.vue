<template>
  <div>
    <PageTitle page-title="KONTAKT" />
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
      // Basic page kontakt
      const pageId = '69ae2ee0-c951-46b0-bb35-47494aab1f59'

      return this.$store.getters['drupal/get']('node--page')[pageId].body.value
    }
  },
  fetch ({ store, params }) {
    // Basic page kontakt
    const pageId = '69ae2ee0-c951-46b0-bb35-47494aab1f59'

    const query = {}
    return store.dispatch('drupal/get', [`node/page/${pageId}`, {
      params: query
    }])
  }
}
</script>

<style scoped>

</style>
