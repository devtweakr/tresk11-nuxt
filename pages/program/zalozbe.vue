<template>
  <div>
    <PageTitle :pageTitle="pageTitle" />
    <b-row>
      <b-col
        :key="'zalozba'"
        v-for="zalozba in zalozbe"
        class="mb-4"
        cols="6"
        sm="4"
        md="3"
      >
        <nuxt-link v-if="zalozba.title" :to="$options.filters.getAlias(zalozba, 'zalozba')">
          <div class="logo">
            <b-img :src="zalozba.field_zalozba_logo | treskSlika" fluid center />
          </div>
          <h4 class="text-center mt-3">
            {{ zalozba.title }}
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
  data () {
    return { pageTitle: 'ZALOŽBE' }
  },
  computed: {
    zalozbe () { return this.$store.getters['drupal/get']('node--zalozba') }
  },
  fetch ({ store, params }) {
    const query = {
      'filter[field_leto.name][value]': '2020',
      'filter[pogoj][group][conjunction]': 'OR',
      'filter[skrij_a][condition][path]': 'field_ni_na_sejmiscu',
      'filter[skrij_a][condition][operator]': 'IS NULL',
      'filter[skrij_a][condition][memberOf]': 'pogoj',
      'filter[skrij_b][condition][path]': 'field_ni_na_sejmiscu',
      'filter[skrij_b][condition][operator]': '=',
      'filter[skrij_b][condition][value]': 'false',
      'filter[skrij_b][condition][memberOf]': 'pogoj',
      include: 'field_zalozba_logo'
    }
    return store.dispatch('drupal/get', ['node/zalozba', { params: query }])
  }
}
</script>

<style scoped>
.logo img{
  max-height: 150px;
}
</style>
