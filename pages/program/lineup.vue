<template>
  <div>
    <PageTitle page-title="LINEUP" />

    <div v-for="dan in dnevi">
      <h2>{{ dan.cas }}</h2>

      {{ $log(dan) }}
      <div class="row">
        <div v-for="lokacija in dan.lokacije" class="col-md-6">
          <h3>{{ lokacija.ime }}</h3>

          {{ $log(lokacija) }}

          <b-row>
            <b-col
              key="band._jv.id"
              v-for="band in lokacija.nastopi"
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
            lokacije: []
          }
        }

        const lokacija = bend.field_lokacija ? bend.field_lokacija.title : ''
        if (!dnevi[cas].lokacije[lokacija]) {
          dnevi[cas].lokacije[lokacija] = {
            ime: lokacija,
            id: 'ne', // lokacija._jv.id,
            nastopi: []
          }
        }

        dnevi[cas].lokacije[lokacija].nastopi.push(bend)

        return dnevi
      }, {})

      return Object.values(hierarhija).map(dan => ({
        ...dan,
        lokacije: Object.values(dan.lokacije)
      }))
    }
  },
  fetch ({ store, params }) {
    const query = ({
      sort: 'field_cas_nastopa,field_lokacija.title',
      'filter[field_leto.name][value]': '2020',
      include: 'field_lokacija,field_slika'
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
