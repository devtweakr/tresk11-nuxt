<template>
  <div>
    <PageTitle page-title="LINEUP" />

    <div v-for="dan in dnevi">
      <h2>{{ dan.cas }}</h2>

      <b-row>
        <b-col
          :key="band._jv.id"
          v-for="band in dan.nastopi"
          class="dogodek mb-5"
          cols="6"
          sm="4"
          md="3"
        >
          <nuxt-link v-if="band._jv" :to="`/program/artist/${band._jv.id}`">
            <img :src="band.field_slika | treskSlika">
            <p>{{ band.title }}</p>
          </nuxt-link>
        </b-col>
      </b-row>
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
    dnevi () {
      const raw = this.$store.getters['drupal/get']('node--band')

      const filters = this.$options.filters

      const hierarhija = Object.values(raw).reduce(function (dnevi, bend) {
        const cas = filters.dateFormat(bend.field_cas_nastopa)

        if (!dnevi[cas]) {
          dnevi[cas] = {
            cas,
            nastopi: []
          }
        }

        dnevi[cas].nastopi.push(bend)

        return dnevi
      }, {})

      return hierarhija
    }
  },
  fetch ({ store, params }) {
    const query = ({
      sort: 'field_cas_nastopa,field_lokacija.title',
      'filter[field_leto.name][value]': '2020',
      include: 'field_slika'
    })

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
