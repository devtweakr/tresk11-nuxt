<template>
  <div>
    <PageTitle :title="title" />
    <div class="row">
      <div class="col-12">
        <p>Tresk 11 išče inovativne fotografije glasbenih dogodkov, ki presegajo običajno foto dokumentacijo, najsi bo v okvir ujeta publika ali nastopajoči, koncert ali glasbeni festival, klubski dogodki, rejvi ali intimni nastopi. Fotografija glasbenega dogodka se namreč spreminja skupaj s fotografi_njami, ki skrivajo svoje potenciale za objektivi pametnih telefonov, na filmskih negativih ali za velikimi digitalnimi napravami.</p>
        <p>Posameznik oz. posameznica lahko predloži do največ tri fotografije (ki so lahko zasnovane tudi kot serija), posnete med 18. marcem 2019 in 3. aprilom 2020. Prosimo, da ob prijavi upoštevate spodaj navedene tehnične specifikacije.</p>

        <br>

        <p><a href="https://tresk.si/d/natecaji/fotografija" target="_blank"><strong>PRIJAVNI OBRAZEC </strong><i class="fa fa-external-link-square" /></a></p>

        <br>

        <p>
          Avtor_ica zmagovalne fotografije bo svoja dela razstavil_a v knjigarni Galerije Fotografije.
        </p>

        <br>

        <div class="sponzorji">
          <img src="~/assets/korpo/fotografija.svg">
          <img src="~/assets/korpo/vaga.svg">
          <img src="~/assets/korpo/outsider.svg">
          <img src="~/assets/korpo/rs.svg">
        </div>
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
      title: 'SEJMIŠČE'
    }
  }
}
</script>

<style scoped>

</style>
