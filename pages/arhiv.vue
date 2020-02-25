<template>
  <div>
    <PageTitle :pageTitle="pageTitle" />
    <b-row>
      <b-col>
        <p>
          Še pride
        </p>
      </b-col>
    </b-row>
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
      pageTitle: 'ARHIV'
    }
  }
}
</script>

<style scoped>

</style>
