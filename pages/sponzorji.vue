<template>
  <div>
    <PageTitle :pageTitle="pageTitle" />
    <b-row>
      <b-col
        :key="'sponzor'"
        v-for="sponzor in sponzorji"
        class="sponzor mb-4"
        cols="6"
        sm="4"
        md="3"
      >
        <a v-if="sponzor.field_link[0]" :href="sponzor.field_link[0].uri" target="_blank">
          <b-img :src="sponzor.field_slika | treskSlika" class="sponzor-logo mt-3" fluid center />
          <h4 class="text-center mt-3">
            {{ sponzor.title }}
          </h4>
        </a>
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
    return { pageTitle: 'SPONZORJI' }
  },
  computed: {
    sponzorji () { return this.$store.getters['drupal/get']('node--sponzor') }
  },
  fetch ({ store, params }) {
    const query = {
      'filter[field_leto.name][value]': '2020',
      include: 'field_slika',
      sort: 'field_weight'
    }

    return store.dispatch('drupal/get', ['node/sponzor', { params: query }])
  }
}
</script>
<style scoped>
.sponzor-logo{
  max-height: 150px;
}
</style>
