<template>
  <div>
    <PageTitle :pageTitle="pageTitle" />
    <div v-for="lokacija in lokacije"  class="row zalozba">
      <div class="nodeContainer">
        <p>{{ lokacija.title }}</p>
        <img :src="lokacija.field_slika | treskSlika">
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
    return {
      pageTitle: 'LOKACIJE'
    }
  },
  computed: {
    lokacije () { return this.$store.getters['drupal/get']('node--lokacija') }
  },
  fetch ({ store, params }) {
    const query = {
      'filter[field_leto.name][value]': '2020',
      include: ''
    }

    return store.dispatch('drupal/get', ['node/lokacija', { params: query }])
  }
}
</script>

<style scoped>

</style>
