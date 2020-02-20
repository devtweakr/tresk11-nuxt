<template>
  <div>
    <PageTitle page-title="LINEUP" />
    <div v-for="dogodek in dogodki" class="row dogodek">
      <div class="col-12">
        <h2>{{ dogodek.title }}</h2>

        <p class="datum">
          {{ dogodek.field_datum | dateFormat }}
        </p>

        <div class="koncerti">
          <div v-for="band in dogodek.field_bendi" class="koncert">
            <nuxt-link v-if="band._jv" :to="'/program/artist/' + band._jv.id">
              <img :src="band.field_slika | treskSlika">
              {{ $log(band) }}
              <p>{{ band.title }}</p>
            </nuxt-link>
          </div>
        </div>
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
  computed: {
    dogodki () { return this.$store.getters['drupal/get']('node--koncert') }
  },
  fetch ({ store, params }) {
    const query = {
      sort: 'field_datum',
      // 'filter[field_leto.name][value]': '2020',
      'filter[field_leto.name][value]': '2019',
      'filter[field_tip_dogodka.name][value]': 'koncert'
      // include: 'field_lokacija,field_bendi.field_slika'
    }

    return store.dispatch('drupal/get', ['node/koncert', { params: query }])
  }
}
</script>

<style scoped>
.dogodek {
    margin-top: 2rem;
}
.koncert img {
    max-width: 100px;
    margin-right: 2rem;
}
</style>
