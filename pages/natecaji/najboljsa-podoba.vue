<template>
  <div>
    <PageTitle :pageTitle="pageTitle" />
    <b-row>
      <b-col>
        <p>Tresk 11 ponovno želi v vpogled dobiti izvirne, odštekane in inovativne oblikovalske rešitve za fizični nosilec glasbenega albuma. Sprejemamo vse od kaset, CD-jev in vinilk do USB ključkov in nenavadnih nosilcev kod za spletni dostop.</p>
        <p>Posameznik oz. posameznica lahko prijavi največ tri podobe albumov, objavljenih med 18. marcem 2019 in 3. aprilom 2020. Izvajalcev oz. izvajalk podobe je lahko tudi več. Datoteke podob albumov naj bodo izvirne velikosti, nekonvencionalne oblikovalske rešitve pa naj bodo še dodatno fotografsko dokumentirane.</p>

        <br>

        <!--p><a href="https://tresk.si/d/natecaji/album" target="_blank"><strong>PRIJAVNI OBRAZEC </strong><i class="fa fa-external-link-square" /></a></p>

        <br-->

        <p>
          Avtori_ica zmagovalne podobe albuma se bo predstavil_a s samostojno razstavo v galeriji DobraVaga.
        </p>

        <br>

        <div class="sponzorji">
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
        <b-img fluid class="mb-3" src="/img/zirija/dora-trcek.jpg" />
        <p>
          Dora Trček je kuratorka cikla mesečnih razstav v galeriji DobraVaga. Kot del ekipe festivala MENT Ljubljana pa vsako leto organizira in (so)kurira razstavni projekt glasbenih plakatov appointMENT.
        </p>
      </b-col>
      <b-col lg="4" sm="6">
        <b-img fluid class="mb-3" src="/img/zirija/primoz-z.jpg" />
        <p>
          <a href="https://primozzorko.tumblr.com/" target="blank">Primož Zorko</a> je med študijem arhitekture pričel flirtati z ilustracijo in dizajnom. Danes je samostojni umetnik, fotograf in oblikovalec z dolgim seznamom samostojnih in skupinskih razstav doma in po svetu. Avtorica fotografije: Urša Premik
        </p>
      </b-col>
      <b-col lg="4" sm="6">
        <b-img fluid class="mb-3" src="/img/zirija/hanna-juta.jpg" />
        <p>
          Hanna Juta Kozar se je med študijem arhitekture prepisala na program grafičnega oblikovanja in ilustracije na ALUO. Deluje na področju vizualnih komunikacij. Je lanskoletna zmagovalka kategorije za najboljšo podobo albuma.
        </p>
      </b-col>
      <b-col lg="4" sm="6">
        <b-img fluid class="mb-3" src="/img/zirija/jaka-spiler.jpg" />
        <p>
          Jaka Špiler je dolgoletni in praktično bivši sodelavec tehniške službe in glasbene redakcije Radia Študent, pa tudi večletni vodja radijske fonoteke in prav festivala Tresk. Oboje je bilo v resnici razlog za incestuozno povabilo v vrste žirije podobe albuma.
        </p>
      </b-col>
      <b-col lg="4" sm="6">
        <b-img fluid class="mb-3" src="/img/zirija/nina-vrhovec.jpg" />
        <p>
          <a href="http://www.multipraktik.com/" target="blank">Nina Vrhovec</a> se je po študiju na ALUO pet let urila v okolju DIY Kluba K4, kjer sta glasba in oblikovanje postala pomemben in nerazdružljiv par v njenem delu. Je soustanoviteljica multidisciplinarnega studia Multipraktik.
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
      pageTitle: '4. NAJBOLJŠA PODOBA ALBUMA'
    }
  },
  head () {
    return { title: this._data.pageTitle }
  }
}
</script>

<style scoped>

</style>
