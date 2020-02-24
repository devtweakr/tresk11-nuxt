<template>
  <div>
    <PageTitle :pageTitle="artist.title" />
    <img :src="artist.field_slika | treskSlika" class="node-slika">
    <p v-html="artist.body.value" v-if="artist.body" class="nodeParagraph"/>
  </div>
</template>

<script>
import PageTitle from '@/components/PageTitle'

export default {
  components: {
    PageTitle
  },
  computed: {
    artist () { return this.$store.getters['drupal/get']('node--band')[this.$route.params.id] }
  },
  fetch ({ store, params }) {
    const query = {
      include: 'field_slika'
    }
    return store.dispatch('drupal/get', [`node/band/${params.id}`, {
      params: query
    }])
  }
}
</script>

<style scoped>

</style>
