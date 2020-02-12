<template>
  <div>
    <PageTitle :title="title" />
    <div class="row">
      <div class="col-12">
        <p>Tresk 11 ponovno želi v vpogled dobiti izvirne, odštekane in inovativne oblikovalske rešitve za fizični nosilec glasbenega albuma. Sprejemamo vse od kaset, CD-jev in vinilk do USB ključkov in nenavadnih nosilcev kod za spletni dostop.</p>
        <p>Posameznik oz. posameznica lahko prijavi največ tri podobe albumov, objavljenih med 18. marcem 2019 in 3. aprilom 2020. Izvajalcev oz. izvajalk podobe je lahko tudi več. Datoteke podob albumov naj bodo izvirne velikosti, nekonvencionalne oblikovalske rešitve pa naj bodo še dodatno fotografsko dokumentirane.</p>

        <br>

        <p><a href="https://tresk.si/d/natecaji/album" target="_blank"><strong>PRIJAVNI OBRAZEC </strong><i class="fa fa-external-link-square" /></a></p>

        <br>

        <p>
          Avtori_ica zmagovalne podobe albuma se bo predstavil_a s samostojno razstavo v galeriji DobraVaga.
        </p>

        <br>

        <div class="sponzorji">
          <img src="img/korpo/vaga.svg">
          <img src="img/korpo/outsider.svg">
          <img src="img/korpo/rs.svg">
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
      title: 'ARHIV'
    }
  }
}
</script>

<style scoped>

</style>
