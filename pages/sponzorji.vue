<template>
  <div>
    <PageTitle :pageTitle="pageTitle" />
    <div v-for="sponzor in sponzorji" class="row sponzor">
      {{ $log(sponzor.field_slika) }}
      <div class="col-12">
        <p>{{ sponzor.title }}</p>
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
    return { pageTitle: 'SPONZORJI' }
  },
  computed: {
    sponzorji () { return this.$store.getters['drupal/get']('node--sponzor') }
  },
  fetch ({ store, params }) {
    const query = {
      'filter[field_leto.name][value]': '2019',
      include: 'field_slika'
    }

    return store.dispatch('drupal/get', ['node/sponzor', { params: query }])
  }
}
</script>

<style scoped>

</style>
