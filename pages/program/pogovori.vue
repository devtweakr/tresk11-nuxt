<template>
  <div>
    <PageTitle :pageTitle="pageTitle" />
    <div v-for="dogodek in dogodki" class="row dogodek">
      <div class="col-12">
        <h2>{{ dogodek.title }}</h2>
        <p class="datum">
          {{ dogodek.field_datum | dateFormat }}
        </p>
      </div>
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
  }
}
</script>

<style scoped>
  .dogodek {
    margin-top: 2rem;
  }
</style>
