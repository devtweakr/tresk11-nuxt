<template>
  <div>
    <PageTitle :pageTitle="pageTitle" />
    <div class="row">
      <div class="col-12">
        <pre>{{ zalozbe }}</pre>
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
      pageTitle: 'ZALOŽBE'
    }
  },
  async asyncData ({ $axios }) {
    const zalozbe = await $axios.$get('node/zalozba')
    return {
      zalozbe: zalozbe.data[0].attributes.title
    }
  }
}

</script>

<style scoped>

</style>
