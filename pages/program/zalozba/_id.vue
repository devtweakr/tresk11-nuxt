<template>
  <div>
    <PageTitle :pageTitle="zalozba.title" />
    <b-row>
      <b-col md="4" sm="3">
        <b-img :src="zalozba.field_zalozba_logo | treskSlika" fluid class="mb-3" />
        <div class="ikoneContainer">
          <a
            v-for="link in zalozba.field_link"
            v-html="$options.filters.logoPick(link)"
            :class="($options.filters.logoPick(link).indexOf('<img') > -1) ? 'imgLink' : ''"
            :href="link.uri"
            class="artistLink"
            target="_blank"
          />
        </div>
      </b-col>
      {{ $log(zalozba ) }}
      <b-col md="8" sm="9">
        <p v-html="$options.filters.drupalLinks(zalozba.body.processed)" v-if="zalozba.body" />
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
  computed: {
    zalozba () {
      return Object.values(this.$store.getters['drupal/get']('node--zalozba'))[0]
    }
  },
  fetch ({ store, params }) {
    const id = decodeURIComponent(params.id)
    // Poskusi tudi drupalov path alias
    const alias = `/zalozba/${id}`

    const query = {
      include: 'field_zalozba_logo',
      'filter[field_path]': alias
    }
    return store.dispatch('drupal/get', [`node/zalozba`, {
      params: query
    }])
  },
  head () {
    return { title: this.zalozba.title }
  }
}
</script>

<style scoped>

</style>
