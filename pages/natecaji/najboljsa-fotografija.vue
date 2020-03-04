<template>
  <div>
    <PageTitle :pageTitle="pageTitle" />
    <b-row>
      <b-col>
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
          <img src="/img/korpo/fotografija.svg">
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
        <b-img fluid class="mb-3" src="/img/zirija/barbara-ceferin.jpg" />
        <p>
          Barbara Čeferin je svojo fotografsko pot začela kot fotoreporterka pri časopisih Delo in Mladina od leta 2003 pa je lastnica in vodja prve zasebne galerije za avtorsko fotografijo pri nas, to je Galerija Fotografija. Avtor fotografije: Miran Juršič
        </p>
      </b-col>
      <b-col lg="4" sm="6">
        <b-img fluid class="mb-3" src="/img/zirija/jasna-jernejsek.jpg" />
        <p>
          Jasna Jernejšek deluje kot samostojna kuratorka, vodja projektov, raziskovalka in tekstopiska na področju sodobnih vizualnih umetnosti. Je bivša sodelavka Radia Študent, trenutno pa predavateljica in programska vodja Oddelka za fotografijo na Visoki šoli za storitve (VIST) v Ljubljani.
        </p>
      </b-col>
      <b-col lg="4" sm="6">
        <b-img fluid class="mb-3" src="/img/zirija/matej-pocervina.jpg" />
        <p>
          Matej Počervina je rolkar po duši in praksi, strune ubira v večih bendih, goji pa tudi ljubezen do fotografiranja. Je lanskoletni zmagovalec vizualnih natečajev Tresk v kategoriji koncertne fotografije.
        </p>
      </b-col>
      <b-col lg="4" sm="6">
        <b-img fluid class="mb-3" src="/img/zirija/matjaz-rust.jpg" />
        <p>
          <a href="http://www.matjazrust.com" target="blank">Matjaž Rušt</a> je dokumentarni fotograf in prejemnik večih nagrad. Njegova dela so del stalne zbirke Moderne galerije v Ljubljani. Skupaj z Robertom Marinom od leta 2014 ustvarjata <a href="https://najlepsemestonasvetu.tumblr.com" target="blank">Najlepše mesto na svetu</a>.
        </p>
      </b-col>
      <b-col lg="4" sm="6">
        <b-img fluid class="mb-3" src="/img/zirija/petra-svajger.jpg" />
        <p>
          <a href="http://www.gifgifachance.com/" target="blank">Petra Švajger</a> je oblikovalka in fotografinja, ki je zorala ledino animacije GIF na lokalni sceni in kot prva v Sloveniji definirala pojem modne animacije. Poznamo jo iz Kluba K4, kjer je bila vrsto let uradna fotografinja.
        </p>
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
  data () {
    return {
      pageTitle: '2. NAJBOLJŠA FOTOGRAFIJA GLASBENEGA DOGODKA'
    }
  },
  head () {
    return { title: this._data.pageTitle }
  }
}
</script>

<style scoped>

</style>
