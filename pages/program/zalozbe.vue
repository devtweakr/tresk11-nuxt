<template>
  <div>
    <PageTitle :pageTitle="pageTitle" />
    <!-- <b-card-group columns>
      <b-card
        :key="'zalozba'"
        v-for="zalozba in zalozbe"
        class="dogodek bg-transparent border-0"
        no-body
      >
        <b-card-img :src="zalozba.field_zalozba_logo | treskSlika" />
        <b-card-title class="mt-3">
          {{ zalozba.title }}
        </b-card-title>
      </b-card>
    </b-card-group> -->
    <b-row>
      <b-col
        :key="'zalozba'"
        v-for="zalozba in zalozbe"
        cols="6"
        sm="4"
        md="3"
        lg="2"
        class="dogodek bg-transparent border-0"
      >
        <b-img :src="zalozba.field_zalozba_logo | treskSlika" fluid height="200" />
        <h5 class="mt-3 b-0">
          {{ zalozba.title }}
        </h5>
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

</style>
