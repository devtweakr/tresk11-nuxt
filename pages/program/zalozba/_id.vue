<template>
  <div>
    <PageTitle :pageTitle="zalozba.title" />
    <b-row>
      <b-col md="4" sm="3">
        <b-img :src="zalozba.field_zalozba_logo | treskSlika" fluid class="mb-3" />
      </b-col>
      <b-col md="8" sm="9">
        <p v-html="zalozba.body.value" v-if="zalozba.body" />
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
    zalozba () {
      return Object.values(this.$store.getters['drupal/get']('node--zalozba'))[0]
    }
  },
  fetch ({ store, params }) {
    const query = {
      include: 'field_zalozba_logo',
      'filter[title]': decodeURIComponent(params.id)
    }
    return store.dispatch('drupal/get', [`node/zalozba`, {
      params: query
    }])
  }
}
</script>

<style scoped>

</style>
