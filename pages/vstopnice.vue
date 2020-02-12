<template>
  <div>
    <PageTitle :title="title" />
    <div class="row">
      <div class="col-12">
        <p>Kategorija, ki razširjeno vključuje še vse “obplakatne” segmente dogodka, npr. celostno grafično podobo glasbenega dogodka, spletno podobo, promocijo prek družabnih omrežij, letake, promocijsko gradivo, vizualije, scenografijo ipd.</p>
        <p>Posameznik oz. posameznica lahko prijavi največ tri objave glasbenih dogodkov, ki so bile objavljene oz. so se zgodile med 18. marcem 2019 ter 3. aprilom 2020. Snovalcev oz. snovalk dogodka je lahko tudi več. Prijavljeno delo je lahko predstavljeno v obliki fotografij, PDF prezentacije ali videa.</p>

        <br>

        <p><a href="https://tresk.si/d/natecaji/inovativno" target="_blank"><strong>PRIJAVNI OBRAZEC </strong><i class="fa fa-external-link-square" /></a></p>

        <br>

        <p>
          Avtor_ica najbolj inovativnega pristopa k oblikovanju in oglaševanju glasbenega dogodka prejme polno VIP prijavnino na 27. Zlati boben, ki se bo odvil med 7. in 9. oktobrom v Portorožu.
        </p>

        <br>

        <div class="sponzorji">
          <img src="~/assets/korpo/sof.svg">
          <img src="~/assets/korpo/drum.svg">
          <img src="~/assets/korpo/vaga.svg">
          <img src="~/assets/korpo/outsider.svg">
          <img src="~/assets/korpo/rs.svg">
        </div>

        <!-- <p><strong>NE SPREGLEJTE: fizični izvodi</strong></p>
        <p>V primeru, da vaše nekonvencionalne rešitve vsebujejo fizične objekte, ki jih je najlažje predstaviti in razumeti v živo, lahko stvari pošljete po pošti ali prinesete osebno na Radio Študent (naslov: Zavod Radio Študent (Natečaji festivala Tresk: inovativni pristop), Svetčeva 9, 1000 Ljubljana). Po zaključku festivala vam bomo fizične objekte vrnili po pošti oziroma jih boste lahko prevzeli na naslovu organizatorja.</p> -->
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
      title: 'VSTOPNICE'
    }
  }
}
</script>

<style scoped>

</style>
