<template>
  <div>
    <PageTitle :pageTitle="pageTitle" />
    <b-row>
      <b-col
        :key="'zalozba'"
        v-for="zalozba in zalozbe"
        class="mb-5"
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
