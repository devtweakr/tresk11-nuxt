<template>
  <div>
    <PageTitle :pageTitle="pageTitle" />
    <b-row>
      <b-col>
        <p>Kategorija, ki razširjeno vključuje še vse “obplakatne” segmente dogodka, npr. celostno grafično podobo glasbenega dogodka, spletno podobo, promocijo prek družabnih omrežij, letake, promocijsko gradivo, vizualije, scenografijo ipd.</p>
        <p>Posameznik oz. posameznica lahko prijavi največ tri objave glasbenih dogodkov, ki so bile objavljene oz. so se zgodile med 18. marcem 2019 ter 3. aprilom 2020. Snovalcev oz. snovalk dogodka je lahko tudi več. Prijavljeno delo je lahko predstavljeno v obliki fotografij, PDF prezentacije ali videa.</p>
        <br>
        <!--p><a href="https://tresk.si/d/natecaji/inovativno" target="_blank"><strong>PRIJAVNI OBRAZEC </strong><i class="fa fa-external-link-square" /></a></p>
        <br-->
        <p>
          Avtor_ica najbolj inovativnega pristopa k oblikovanju in oglaševanju glasbenega dogodka prejme polno VIP prijavnino na 27. Zlati boben, ki se bo odvil med 7. in 9. oktobrom v Portorožu.
        </p>
        <br>
        <div class="sponzorji">
          <img src="/img/korpo/sof.svg">
          <img src="/img/korpo/drum.svg">
          <img src="/img/korpo/vaga.svg">
          <img src="/img/korpo/outsider.svg">
          <img src="/img/korpo/rs.svg">
        </div>
      </b-col>
    </b-row>
    <h3 class="mt-5 mb-5">
      ŽIRIJA
    </h3>
    <b-row>
      <b-col lg="4" sm="6">
        <b-img fluid class="mb-3" src="/img/zirija/ajda-b.jpg" />
        <p>
          Ajda Bračič je članica uredniškega odbora revije <a href="https://outsider.si " target="blank">Outsider</a> ter nekdanja urednica redakcije za scenske umetnosti spletnega medija Koridor – križišča umetnosti.
        </p>
      </b-col>
      <b-col lg="4" sm="6">
        <b-img fluid class="mb-3" src="/img/zirija/bostjan-napotnik.jpg" />
        <p>
          Boštjan Napotnik - Napo je avdicijo za špikerja na Radiu Študent opravil daljnega leta 1991, še vedno pa enkrat na mesec odfura jutranji program. Leta 1994 se je začelo njegovo agencijsko življenje, ki ga zadnjih ducat let preživlja kot kreativni direktor na Futuri DDB.
        </p>
      </b-col>
      <b-col lg="4" sm="6">
        <b-img fluid class="mb-3" src="/img/zirija/stela-ivsek.jpg" />
        <p>
          Stella Ivšek je oblikovalka, vidžejka, scenografinja in intermedijska umetnica, ki pod aliasom 5237 samostojno nastopa kot VJ in je soustanoviteljica projekcijske dvojice BEAM TEAM (5237 x SMECH). Je tudi lanskoletna zmagovalka kategorije inovativnega pristopa k oblikovanju in oglaševanju dogodka.
        </p>
      </b-col>
      <b-col lg="4" sm="6">
        <b-img fluid class="mb-3" src="/img/zirija/vladimir-m.jpg" />
        <p>
          Vladimir Mićković je interdisciplinarni oblikovalec, pisec in soustanovitelj večkrat nagrajenega oblikovalskega studia <a href="https://www.instagram.com/ljudje/" target="blank">Ljudje</a>. Je tudi soustanovitelj bistroja <a href="https://kucha.co/ " target="blank">Kucha</a> in vodja istoimenske blagovne znamke.
        </p>
      </b-col>
      <b-col lg="4" sm="6">
        <b-img fluid class="mb-3" src="/img/zirija/zala-v.jpg" />
        <p>
          Zala Velkavrh se kot članica urbanističnega kolektiva prostoRož med drugim ukvarja s temami urbane prenove, mestnega brandinga in vključujočega urbanega razvoja.
        </p>
      </b-col>

      <!-- <p><strong>NE SPREGLEJTE: fizični izvodi</strong></p>
        <p>V primeru, da vaše nekonvencionalne rešitve vsebujejo fizične objekte, ki jih je najlažje predstaviti in razumeti v živo, lahko stvari pošljete po pošti ali prinesete osebno na Radio Študent (naslov: Zavod Radio Študent (Natečaji festivala Tresk: inovativni pristop), Svetčeva 9, 1000 Ljubljana). Po zaključku festivala vam bomo fizične objekte vrnili po pošti oziroma jih boste lahko prevzeli na naslovu organizatorja.</p> -->
    </b-row>
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
      pageTitle: '5. INOVATIVEN PRISTOP K OBLIKOVANJU IN OGLAŠEVANJU DOGODKA'
    }
  },
  head () {
    return { title: this._data.pageTitle }
  }
}
</script>

<style scoped>
</style>
