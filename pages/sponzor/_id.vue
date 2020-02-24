<template>
  <div>
    <PageTitle :pageTitle="sponzor.title" />
    <img :src="sponzor.field_slika | treskSlika" class="node-slika">
    <p v-html="sponzor.body.value" v-if="sponzor.body" />
  </div>
</template>

<script>
import PageTitle from '@/components/PageTitle'

export default {
  components: {
    PageTitle
  },
  computed: {
    sponzor () { return this.$store.getters['drupal/get']('node--sponzor')[this.$route.params.id] }
  },
  fetch ({ store, params }) {
    const query = {
      include: 'field_slika'
    }
    return store.dispatch('drupal/get', [`node/sponzor/${params.id}`, {
      params: query
    }])
  }
}
</script>

<style scoped>

</style>
