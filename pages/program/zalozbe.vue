<template>
  <div>
    <PageTitle :pageTitle="pageTitle" />
    <b-row>
      <b-col
        :key="'zalozba'"
        v-for="zalozba in zalozbe"
        class="zalozba mb-5"
        cols="6"
        sm="4"
        md="3"
      >
        <b-img :src="zalozba.field_zalozba_logo | treskSlika" class="zalozba-logo mt-3" fluid center />
        <h4 mt-3 class="text-center mt-3">
          {{ zalozba.title }}
        </h4>
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
      // 'filter[field_leto.name][value]': '2020',
      // 'filter[field_leto.name][value]': '2019',
      include: 'field_zalozba_logo'
    }
    return store.dispatch('drupal/get', ['node/zalozba', { params: query }])
  }
}
</script>

<style scoped>
.zalozba-logo{
  max-height: 150px;
}
</style>
