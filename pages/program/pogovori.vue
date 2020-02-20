<template>
  <div>
    <PageTitle :pageTitle="pageTitle" />
    <b-card-group columns>
      <b-card :key="'dogodek'" v-for="dogodek in dogodki" class="dogodek bg-transparent border-0" no-body>
        <b-card-title title-tag="h3">
          {{ dogodek.title }}
        </b-card-title>
        <b-card-sub-title sub-title-text-variant="black" sub-title-tag="h5">
          {{ dogodek.field_datum | dateFormat }}
        </b-card-sub-title>
        <b-card-text class="mt-3">
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </b-card-text>
      </b-card>
    </b-card-group>
  </div>
</template>

<script>
import PageTitle from '@/components/PageTitle'

export default {
  components: {
    PageTitle
  },
  data () {
    return { pageTitle: 'POGOVORI' }
  },
  computed: {
    dogodki () { return this.$store.getters['drupal/get']('node--koncert') }
  },
  fetch ({ store, params }) {
    const query = {
      sort: 'field_datum',
      'filter[field_leto.name][value]': '2020',
      'filter[field_tip_dogodka.name][value]': 'pogovor'
    }

    return store.dispatch('drupal/get', ['node/koncert', { params: query }])
  }
}
</script>

<style scoped>

</style>
