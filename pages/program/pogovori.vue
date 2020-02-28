<template>
  <div>
    <PageTitle :pageTitle="pageTitle" />
    <b-row>
      <b-col
        :key="'dogodek'"
        v-for="dogodek in dogodki"
        class="dogodek mb-5"
        sm="6"
      >
        <nuxt-link v-if="dogodek.title" :to="$options.filters.getAlias(dogodek, 'pogovor')">
          <h4>
            {{ dogodek.title }}
          </h4>
        </nuxt-link>
        <h5>{{ dogodek.field_datum | dateTimeFormat }}</h5>
        <p v-html="$options.filters.drupalLinks($options.filters.summary(dogodek.body.processed))" v-if="dogodek.body" class="text-justify" />
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
    return { pageTitle: 'POGOVORI' }
  },
  computed: {
    dogodki () { return this.$store.getters['drupal/get']('node--koncert') }
  },
  fetch ({ store, params }) {
    const query = {
      sort: 'field_datum',
      'filter[field_leto.name][value]': '2020',
      'filter[field_tip_dogodka.name][value]': 'pogovor'
    }

    return store.dispatch('drupal/get', ['node/koncert', { params: query }])
  },
  head () {
    return { title: this._data.pageTitle }
  }
}
</script>

<style scoped>

</style>
