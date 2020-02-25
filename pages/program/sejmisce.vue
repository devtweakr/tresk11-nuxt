<template>
  <div>
    <PageTitle :pageTitle="pageTitle" />
    <b-row>
      <div v-html="$options.filters.drupalLinks(page.body.value)" v-if="page" class="col-12" />
    </b-row>
  </div>
  </div>
</template>

<script>
import PageTitle from '@/components/PageTitle'

export default {
  components: {
    PageTitle
  },
  data () {
    return {
      pageTitle: 'SEJMIŠČE'
    }
  },
  computed: {
    page () {
      // Basic page sejmisce
      const pageId = 'fbcfdc36-c420-4089-bd97-c27898f198c1'

      return this.$store.getters['drupal/get']('node--page')[pageId]
    }
  },
  fetch ({ store, params }) {
    // Basic page sejmisce
    const pageId = 'fbcfdc36-c420-4089-bd97-c27898f198c1'

    const query = {}
    return store.dispatch('drupal/get', [`node/page/${pageId}`, {
      params: query
    }])
  }
}
</script>

<style scoped>

</style>
