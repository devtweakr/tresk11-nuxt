<template>
  <div>
    <PageTitle :pageTitle="pageTitle" class="mb-4" />
    <b-row :key="'novica'" v-for="novica in novice" class="novica">
      <b-col>
        <h3 class="mt-1">
          {{ novica.title }}
        </h3>
        <p class="datum">
          {{ novica.field_datum | dateFormat }}
        </p>
        <p v-html="novica.body.value" class="body" />
        <hr>
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
    return {
      pageTitle: 'NOVICE'
    }
  },
  computed: {
    novice () {
      return this.$store.state.drupal['node--novica']
    }
  },
  fetch ({ store, params }) {
    const zdaj = new Date()

    const query = {
      sort: '-field_datum',
      'filter[field_leto.name][value]': '2020',
      'filter[datefilter][condition][path]': 'field_datum',
      'filter[datefilter][condition][operator]': '<',
      'filter[datefilter][condition][value]': zdaj
    }

    return store.dispatch('drupal/get', ['node/novica', { params: query }])
  }
}
</script>

<style scoped>
.novica {
}
</style>
