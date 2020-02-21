<template>
  <div>
    <PageTitle page-title="LINEUP" />
    <div class="dogodki">
      <div class="dogodek row">
        <div v-for="band in bendi" class="row dogodek">
          <div class="col-12">
            <nuxt-link v-if="band._jv" :to="`/program/artist/${band._jv.id}`">
              <img :src="band.field_slika | treskSlika">
              {{ $log(band) }}

              <p class="datum" v-if="band.field_cas_nastopa">
                {{ band.field_cas_nastopa | dateFormat }}
              </p>
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
    bendi () { return this.$store.getters['drupal/get']('node--band') }
  },
  fetch ({ store, params }) {
    const query = {
      // sort: 'field_datum',
      'filter[field_leto.name][value]': '2020'
      // 'filter[field_tip_dogodka.name][value]': 'koncert'
      // include: 'field_lokacija,field_bendi.field_slika'
    }

    return store.dispatch('drupal/get', ['node/band', { params: query }])
  }
}
</script>

<style scoped>
.dogodek {
    margin-top: 2rem;
}
.dogodek img {
    max-width: 100px;
    margin-right: 2rem;
}
</style>
