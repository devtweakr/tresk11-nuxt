<template>
  <div>
    <PageTitle :pageTitle="pageTitle" class="mb-4" />
    <b-card-group columns>
      <b-card :key="'novica'" v-for="novica in novice" class="novica bg-transparent border-0" no-body>
        <b-card-title title-tag="h3">
          {{ novica.title }}
        </b-card-title>
        <b-card-sub-title sub-title-text-variant="black" sub-title-tag="h5">
          {{ novica.field_datum | dateFormat }}
        </b-card-sub-title>
        <b-card-img v-if="novica.field_slika" :src="novica.field_slika | treskSlika" class="mt-2" />
        <b-card-text v-html="novica.body.value" class="mt-3" />
        </b-card-text>
      </b-card>
    </b-card-group>
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
      pageTitle: 'NOVICE'
    }
  },
  computed: {
    novice () {
      return this.$store.state.drupal['node--novica']
    }
  },
  fetch ({ store, params }) {
    const zdaj = new Date()

    const query = {
      sort: '-field_datum',
      'filter[field_leto.name][value]': '2020',
      'filter[datefilter][condition][path]': 'field_datum',
      'filter[datefilter][condition][operator]': '<',
      'filter[datefilter][condition][value]': zdaj,
      include: 'field_slika'
    }

    return store.dispatch('drupal/get', ['node/novica', { params: query }])
  }
}
</script>

<style scoped>

</style>
