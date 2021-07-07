<template>
  <div>
    <PageTitle :pageTitle="pageTitle" />

    <b-row>
      <b-col
        :key="'novica'"
        v-for="novica in novice"
        class="novica mb-5"
        sm="6"
      >
        <!-- <nuxt-link v-if="novica.title" :to="$options.filters.getAlias(novica, 'pogovor')"> -->
        <h4>
          {{ novica.title }}
        </h4>
        <b-img v-if="novica.field_slika" :src="novica.field_slika | treskSlika" fluid />
        <!-- </nuxt-link> -->
        <h5>{{ novica.field_datum | dateFormat }}</h5>
        <p v-html="$options.filters.drupalLinks(novica.body.processed)" class="text-justify" />
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
    return { pageTitle: 'NOVICE' }
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
      'filter[field_tip_novice.name][value]': 'novica',
      'filter[datefilter][condition][path]': 'field_datum',
      'filter[datefilter][condition][operator]': '<',
      'filter[datefilter][condition][value]': zdaj,
      include: 'field_slika'
    }

    return store.dispatch('drupal/get', ['node/novica', { params: query }])
  },
  head () {
    return { title: this._data.pageTitle }
  }
}
</script>

<style scoped>

</style>
