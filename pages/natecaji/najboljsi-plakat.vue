<template>
  <div>
    <PageTitle :pageTitle="pageTitle" />
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
          <img src="/img/korpo/tamta.svg">
          <img src="/img/korpo/vaga.svg">

          <img src="/img/korpo/outsider.svg">
          <img src="/img/korpo/rs.svg">
        </div>
        <h3 class="mt-3 mb-5">ŽIRIJA</h3>
        <img class="slikaZirija" src="/img/zirija/jan-kmet.jpg">
        <p class="odstavekZirija">Jan Kmet goji strast do analogne fotografije in ima oko za detajle, kar v dobi vsakdana, prenasičenega z informacijami, zahteva precejšnji fokus. Je lanskoletni zmagovalec natečajev Tresk v kategoriji plakata.
        </p>
        <img class="slikaZirija" src="/img/zirija/marusa-racic.jpg">
        <p class="odstavekZirija"><a href="http://www.marusaracic.com/" target="blank">Maruša Račič</a> je grafična oblikovalka, ki je doštudirala v Pragi, od leta 2015 pa kot samozaposlena v kulturi deluje večinoma na lokalnem terenu. Aktivna je na področju ilustracije in risbe, poleg tega pa se ukvarja tudi z analogno fotografijo.
        </p>
        <img class="slikaZirija" src="/img/zirija/nejc-prah.jpg">
        <p class="odstavekZirija"><a href="https://nejcprah.com" target="blank">Nejc Prah</a> je oblikovalec, ki deluje med New Yorkom in Ljubljano. Prejel je Prešernovo nagrado 2020 za izjemne oblikovalske dosežke preteklih treh let. Zaradi varstva osebnih podatkov in nevarnih mehanizmov prepoznave obraza izpostavljamo le fragment vizualne podobe, ki jo je oblikoval za osmo edicijo festivala Tresk.
        </p>
        <img class="slikaZirija" src="/img/zirija/rina-b.jpg">
        <p class="odstavekZirija"><a href="https://www.instagram.com/rina_malac/?hl=en" target="blank">Rina Barbarić</a> je grafična oblikovalka in ilustratorka, ki deluje med Zagrebom, Ljubljano in Reko. Z avtorskimi projekti je sodelovala na številnih razstavah. Redno sodeluje z ekipo Vox Feminae.
        </p>
        <img class="slikaZirija" src="/img/zirija/tamara-m.jpg">
        <p class="odstavekZirija">Tamara Mateša je umetnostna zgodovinarka in hispanistka ter sodelavka Inštituta TAM-TAM, kjer goji ljubezen do plakatov vseh sort in oblik.
        </p>
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
      pageTitle: '3. NAJBOLJŠI PLAKAT GLASBENEGA DOGODKA'
    }
  }
}
</script>

<style scoped>

</style>
