<template>
  <div>
    <PageTitle page-title="LINEUP" />
    <b-row>
      <b-col
        :key="band._jv.id"
        v-for="band in bandi"
        class="mb-3"
        cols="6"
        sm="4"
        md="3"
      >
        <nuxt-link v-if="band.title" :to="$options.filters.getAlias(band, 'artist')">
          <div class="logo">
            <b-img :src="band.field_slika | treskSlika" fluid center />
          </div>
          <h4 class="text-center mt-3">
            {{ band.title }}
          </h4>
        </nuxt-link>
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
    bandi () {
      return this.$store.getters['drupal/get']('node--band')
    }
  },
  fetch ({ store, params }) {
    const query = ({
      sort: 'title',
      'filter[field_leto.name][value]': '2020',
      include: 'field_slika'
    })

    return store.dispatch('drupal/get', ['node/band', { params: query }])
  }
}
</script>

<style scoped>
.logo img{
  max-height: 250px;
}
</style>
