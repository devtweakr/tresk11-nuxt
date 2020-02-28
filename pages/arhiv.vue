<template>
  <div>
    <PageTitle :pageTitle="pageTitle" />
    <b-row>
      <b-col>
        {{ $log(page) }}
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
    return { pageTitle: 'ARHIV' }
  },
  computed: {
    page () {
      // Basic page arhiv
      const pageId = '39915467-0a85-4d5c-a14c-ac37962be3cf'

      return this.$store.getters['drupal/get']('node--page')[pageId]
    }
  },
  fetch ({ store, params }) {
    // Basic page arhiv
    const pageId = '39915467-0a85-4d5c-a14c-ac37962be3cf'

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

<style>
  h2 {
    display: none;
  }

  li {
    font-size: 1.2rem;
  }

</style>
