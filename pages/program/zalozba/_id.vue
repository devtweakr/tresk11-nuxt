<template>
  <div>
    <PageTitle :pageTitle="zalozba.title" />
    <div class="row">
      <div class="col-md-6">
        <img :src="zalozba.field_zalozba_logo | treskSlika" class="node-slika">
      </div>
      {{ $log(zalozba) }}
      <div class="col-md-6">
        <p v-html="zalozba.body.value" v-if="zalozba.body" />
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
  computed: {
    zalozba () { return this.$store.getters['drupal/get']('node--zalozba')[this.$route.params.id] }
  },
  fetch ({ store, params }) {
    const query = {
      include: 'field_zalozba_logo'
    }
    return store.dispatch('drupal/get', [`node/zalozba/${params.id}`, {
      params: query
    }])
  }
}
</script>

<style scoped>

</style>
