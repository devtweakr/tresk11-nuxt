<template>
  <div>
    <PageTitle :title="title" />
    <div class="row">
      <div class="col-12">
        <p>
          Poleg glasbenega sejmišča festival Tresk vsako leto razpiše vizualni
          natečaj, ki se je ob jubilejni izvedbi leta 2019 razširil v pet
          kategorij, ki so tako ali drugače povezane z glasbenim založništvom.
          Nagrade v sodelovanju s podporniki se podeljuje za:
        </p>

        <ul class="pl-4 mt-4 mb-4">
          <li>
            <nuxt-link to="/natecaji/najboljsi-videospot">
              najboljši videospot <i class="fa fa-external-link-square" />
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/natecaji/najboljsa-fotografija">
              najboljšo fotografijo glasbenega dogodka
              <i class="fa fa-external-link-square" />
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/natecaji/najboljsi-plakat">
              najboljši plakat glasbenega dogodka
              <i class="fa fa-external-link-square" />
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/natecaji/najboljsa-podoba">
              najboljšo podobo albuma <i class="fa fa-external-link-square" />
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/natecaji/najbolj-inovativen">
              najbolj inovativen pristop k oglaševanju in oblikovanju dogodka
              <i class="fa fa-external-link-square" />
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
          <img src="~/assets/korpo/rs.svg">
          <img src="~/assets/korpo/vaga.svg">
          <img src="~/assets/korpo/outsider.svg">
          <img src="~/assets/korpo/fekk.svg">
          <img src="~/assets/korpo/liffe.svg">
          <img src="~/assets/korpo/kinoteka.svg">
          <img src="~/assets/korpo/fotografija.svg">
          <img src="~/assets/korpo/tamta.svg">
          <img src="~/assets/korpo/sof.svg">
          <img src="~/assets/korpo/drum.svg">
        </div>

        <!-- p>ARHIV lanskoletnih zmagovalcev</p-->
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
      title: 'PROGRAM'
    }
  }
}
</script>

<style scoped>

</style>
