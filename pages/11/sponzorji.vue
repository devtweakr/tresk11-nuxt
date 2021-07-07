<template>
  <div>
    <PageTitle :pageTitle="pageTitle" />

    <div v-for="kategorija in kategorije">
      <h3>{{ kategorija.name }}</h3>
      <b-row>
        <b-col
          :key="'sponzor'"
          v-for="sponzor in kategorija.sponzorji"
          class="sponzor mb-4"
          cols="6"
          sm="4"
          md="3"
        >
          <a :href="sponzor.field_link[0] ? sponzor.field_link[0].uri : '#'" target="_blank">
            <b-img :src="sponzor.field_slika | treskSlika" class="sponzor-logo mt-3" fluid center />
            <h4 class="text-center mt-3">
              {{ sponzor.title }}
            </h4>
          </a>
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
  data () {
    return { pageTitle: 'PODPORNIKI' }
  },
  computed: {
    kategorije () {
      const vsiSponzorji = Object.values(this.$store.getters['drupal/get']('node--sponzor'))

      return vsiSponzorji.reduce((kat, sponzor) => {
        const kategorija = sponzor.field_tip_podpornika.name

        if (!kat[kategorija]) {
          kat[kategorija] = {
            name: kategorija,
            sponzorji: []
          }
        }

        kat[kategorija].sponzorji.push(sponzor)

        return kat
      }, {})
    }
  },
  fetch ({ store, params }) {
    const query = {
      'filter[field_leto.name][value]': '2020',
      include: 'field_slika,field_tip_podpornika',
      sort: 'field_weight'
    }

    return store.dispatch('drupal/get', ['node/sponzor', { params: query }])
  },
  head () {
    return { title: this._data.pageTitle }
  }
}
</script>
<style scoped>
.sponzor-logo{
  max-height: 150px;
}
</style>
