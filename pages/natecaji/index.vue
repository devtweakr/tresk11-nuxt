<template>
  <div>
    <PageTitle :pageTitle="pageTitle" />
    <b-row>
      <b-col>
        <div class="count mb-5 text-center">
          <Countdown deadline="March 9, 2020" />
        </div>
        <p>
          Poleg glasbenega sejmišča festival Tresk vsako leto razpiše vizualni
          natečaj, ki se je ob jubilejni izvedbi leta 2019 razširil v pet
          kategorij, ki so tako ali drugače povezane z glasbenim založništvom.
          Nagrade v sodelovanju s podporniki se podeljuje za:
        </p>
        <ul class="pl-4 mt-4 mb-4" style="list-style-type:decimal;">
          <li>
            <nuxt-link to="/natecaji/najboljsi-videospot">
              najboljši videospot
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/natecaji/najboljsa-fotografija">
              najboljšo fotografijo glasbenega dogodka
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/natecaji/najboljsi-plakat">
              najboljši plakat glasbenega dogodka
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/natecaji/najboljsa-podoba">
              najboljšo podobo albuma
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/natecaji/najbolj-inovativen">
              najbolj inovativen pristop k oglaševanju in oblikovanju dogodka
            </nuxt-link>
          </li>
        </ul>
        <p>
          Prijavite se tako, da izpolnite spletni obrazec za določeno
          kategorijo. Če so vaše datoteke prevelike, nam pošljite spletno
          povezavo do njih oz. nas kontaktirajte.
        </p>
        <p>
          <strong>Prijave zbiramo do 8. marca 2020!</strong>
        </p>
        <p>
          Razglasitev zmagovalcev in finalistov se bo zgodila ob otvoritvi
          razstave nagrajenih del v galeriji DobraVaga 3. aprila 2020.
          Nagrajena dela bodo tudi objavljena v eni izmed naslednjih številk
          revije Outsider.
        </p>
        <p>
          Za vse informacije in vprašanja smo vam na voljo na elektronskem
          naslovu <a href="mailto:info@tresk.si">info@tresk.si</a>.
        </p>
        <br>
        <p>
          <a href="https://tresk.si/doc/tresk_11_pravila_sodelovanja.pdf">
            <strong>PRAVILA SODELOVANJA </strong><i class="fa fa-external-link-square" />
          </a>
        </p>
        <br>
        <div class="sponzorji">
          <img src="/img/korpo/rs.svg">
          <img src="/img/korpo/vaga.svg">
          <img src="/img/korpo/outsider.svg">
          <img src="/img/korpo/fekk.svg">
          <img src="/img/korpo/liffe.svg">
          <img src="/img/korpo/kinoteka.svg">
          <img src="/img/korpo/fotografija.svg">
          <img src="/img/korpo/tamta.svg">
          <img src="/img/korpo/sof.svg">
          <img src="/img/korpo/drum.svg">
          <img src="/img/korpo/vis.svg">
        </div>
        <!-- p>ARHIV lanskoletnih zmagovalcev</p-->
      </b-col>
    </b-row>
  </div>
</template>

<script>
import PageTitle from '@/components/PageTitle'
import Countdown from '@/components/Countdown'

export default {
  components: {
    PageTitle,
    Countdown
  },
  pageTitle: 'NATEČAJI',
  data () {
    return { pageTitle: 'NATEČAJI' }
  },
  head () {
    return { title: this._data.pageTitle }
  }
}
</script>

<style scoped>
ul.vuejs-countdown li p.text {
  content: "DNI" !important;
}

</style>
