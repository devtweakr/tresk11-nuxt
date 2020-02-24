<template>
  <div>
    <PageTitle :pageTitle="lokacija.title" />
    <img :src="lokacija.field_slika | treskSlika" class="node-slika">
    <p v-html="lokacija.body.value" v-if="lokacija.body" />
  </div>
</template>

<script>
import PageTitle from '@/components/PageTitle'

export default {
  components: {
    PageTitle
  },
  computed: {
    lokacija () { return this.$store.getters['drupal/get']('node--lokacija')[this.$route.params.id] }
  },
  fetch ({ store, params }) {
    const query = {
      include: 'field_slika'
    }
    return store.dispatch('drupal/get', [`node/lokacija/${params.id}`, {
      params: query
    }])
  }
}
</script>

<style scoped>

</style>
