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
        class="zalozba mb-5"
        cols="6"
        sm="4"
        md="3"
        lg="2"
      >
        <h6 mt-3 class="text-center">
          {{ zalozba.title }}
        </h6>
        <b-img :src="zalozba.field_zalozba_logo | treskSlika" class="zalozba-logo" fluid center />
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
/* .zalozba{
  height: 200px;
} */

.zalozba-logo{
  max-height: 150px;
  vertical-align: middle;
}

h5{
  /* position: absolute;*/
  top: 50%;
}

</style>
