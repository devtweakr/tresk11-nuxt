<template>
  <div>
    <PageTitle :title="title" />
    <div v-for="novica in novice" class="row novica">
      <div class="col-12">
        <h2>{{ novica.title }}</h2>
        <p class="datum">{{ novica.field_datum | dateFormat }}</p>
        <p class="body" v-html="novica.body.value" />
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
    return {
      title: 'NOVICE'
    }
  },
  computed: {
    novice () {
      return this.$store.state.drupal['node--novica']
    }
  },
  fetch ({ store, params }) {
    return store.dispatch('drupal/get', 'node/novica')
  }
}
</script>

<style scoped>
.novica {
  margin-top: 3rem;
}
</style>
