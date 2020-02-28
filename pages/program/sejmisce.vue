<template>
  <div>
    <PageTitle :pageTitle="pageTitle" />
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
  },
  head () {
    return { title: this._data.pageTitle }
  }
}
</script>

<style scoped>

</style>
