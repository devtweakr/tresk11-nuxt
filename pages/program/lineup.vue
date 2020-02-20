<template>
  <div>
    <PageTitle :title="title" />
    <div v-for="dogodek in dogodki" class="row dogodek">
      <div class="col-12">
        <h2>{{ dogodek.title }}</h2>
        <p class="datum">
          {{ dogodek.field_datum | dateFormat }}
        </p>

        <div class="koncerti">
          <div v-for="band in dogodek.field_bendi" class="koncert">
            <img :src="band.field_slika | treskSlika">
            <p>{{ band.title }}</p>
          </div>
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
  data () {
    return { title: 'LINEUP' }
  },
  computed: {
    dogodki () { return this.$store.getters['drupal/get']('node--koncert') }
  },
  fetch ({ store, params }) {
    const query = {
      sort: 'field_datum',
      // 'filter[field_leto.name][value]': '2020',
      'filter[field_leto.name][value]': '2019',
      'filter[field_tip_dogodka.name][value]': 'koncert',
      include: 'field_lokacija,field_bendi.field_slika'
    }

    return store.dispatch('drupal/get', ['node/koncert', { params: query }])
  }
}
</script>

<style scoped>
  .dogodek {
    margin-top: 2rem;
  }
</style>
