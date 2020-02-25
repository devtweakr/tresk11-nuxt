<template>
  <div>
    <PageTitle :pageTitle="lokacija.title" />
    <b-row>
      <b-col md="6">
        <b-img :src="lokacija.field_slika | treskSlika" class="mb-4" fluid />
      </b-col>
      <b-col md="6">
        <p v-html="lokacija.body.value" v-if="lokacija.body" class="text-justify" />
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
    lokacija () {
      return Object.values(this.$store.getters['drupal/get']('node--lokacija'))[0]
    }
  },
  fetch ({ store, params }) {
    const query = {
      include: 'field_slika',
      'filter[field_leto.name][value]': '2020',
      'filter[title]': decodeURIComponent(params.id)
    }
    return store.dispatch('drupal/get', [`node/lokacija`, {
      params: query
    }])
  }
}
</script>

<style scoped>

</style>
