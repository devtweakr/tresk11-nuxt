<template>
  <div>
    <PageTitle :pageTitle="pageTitle" />
    <div class="row">
      <div class="col-12">
        <p>Tresk 11 išče inovativne fotografije glasbenih dogodkov, ki presegajo običajno foto dokumentacijo, najsi bo v okvir ujeta publika ali nastopajoči, koncert ali glasbeni festival, klubski dogodki, rejvi ali intimni nastopi. Fotografija glasbenega dogodka se namreč spreminja skupaj s fotografi_njami, ki skrivajo svoje potenciale za objektivi pametnih telefonov, na filmskih negativih ali za velikimi digitalnimi napravami.</p>
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
  }
}
</script>

<style scoped>

</style>
