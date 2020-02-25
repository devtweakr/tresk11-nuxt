<template>
  <div>
    <PageTitle :pageTitle="pageTitle" />
    <b-row>
      <b-col
        :key="'lokacija'"
        v-for="lokacija in lokacije"
        class="lokacija mb-5"
        cols="6"
        sm="4"
        md="3"
      >
        <nuxt-link v-if="lokacija.title" :to="`/program/lokacija/${encodeURIComponent(lokacija.title)}`">
          <b-img :src="lokacija.field_slika | treskSlika" class="lokacija-logo mt-3" fluid center />
          <h4 mt-3 class="text-center mt-3">
            {{ lokacija.title }}
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
      include: 'field_slika'
    }

    return store.dispatch('drupal/get', ['node/lokacija', { params: query }])
  }
}
</script>

<style scoped>
.lokacija-logo{
  max-height: 150px;
  width: 150px;
  object-fit: contain;
}

</style>
