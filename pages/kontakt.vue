<template>
  <div>
    <PageTitle :title="title" />
    <div class="row">
      <div class="col-12">
        <p>Kategorija, ki se osredotoča na medij glasbenega plakata. Dobrodošle in zaželene so vse njegove variacije, kot tudi prikaz njihove uporabe v praksi.</p>
        <p>Posameznik oz. posameznica lahko prijavi največ tri plakate glasbenih dogodkov, objavljene med 18. marcem 2019 in 3. aprilom 2020. Oblikovalcev oz. oblikovalk plakata je lahko tudi več. Datoteke plakatov naj bodo izvirne velikosti, nekonvencionalne oblikovalske rešitve pa naj bodo še dodatno fotografsko dokumentirane.</p>

        <br>

        <p><a href="https://tresk.si/d/natecaji/plakat" target="_blank"><strong>PRIJAVNI OBRAZEC </strong><i class="fa fa-external-link-square" /></a></p>

        <br>

        <p>
          Avtori_ica zmagovalnega plakata prejme bon za 20 plakatnih mest, vključno s tiskom, ki ga podeljuje TAM-TAM Inštitut.
        </p>

        <br>

        <div class="sponzorji">
          <img src="~/assets/korpo/tamta.svg">
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
      title: 'KONTAKT'
    }
  }
}
</script>

<style scoped>

</style>
