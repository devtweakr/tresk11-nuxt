<template>
  <div>
    <PageTitle :pageTitle="pageTitle" />
    <div v-for="zalozba in zalozbe"  class="row zalozba">
      {{ $log(zalozba.field_zalozba_logo.uri) }}
      <div class="nodeContainer">
        <p>{{ zalozba.title }}</p>
        <img :src="zalozba.field_zalozba_logo | treskSlika">
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

</style>
