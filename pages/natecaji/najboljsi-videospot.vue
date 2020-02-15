<template>
  <div>
    <PageTitle :pageTitle="pageTitle" />
    <div class="row">
      <div class="col-12">
        <p>
          Festival Tresk podeljuje edino nagrado za lokalne video ustvarjalce na
          glasbeni sceni, s čimer se trudi, da bi žanr videospotov postal tako
          širše mišljen kot tudi predvajan v mednarodnem prostoru. Tej
          kategoriji pritiče javna projekcija desetih izbranih finalistov na
          dogodku v Slovenski kinoteki, 28. marca 2020, ki jo bo pospremila
          debata o stanju in možnostih lokalne video produkcije. Predvajani
          finalisti bodo prav tako umeščeni v mednarodno video knjižnico Vienna
          Shorts, ki je dostopna več kot 700 video-profesionalcem. Vienna Shorts
          je mednarodni festival kratkega filma, animacije in videospotov, ki bo
          letos na Dunaju potekal že sedemnajstič. Zmagovalec natečaja bo prejel
          tri akreditacije za festival Vienna Shorts 2020.
        </p>
        <p>
          Pozivamo k prijavi videospotov domačih ustvarjalcev, ki so nastali oz.
          so bili objavljeni med 18. marcem 2019 in 3. aprilom 2020. Posameznik
          oz. posameznica lahko prijavi do največ tri glasbene videe.
        </p>

        <br>

        <p>
          <a
            href="https://tresk.si/d/natecaji/video"
            target="_blank"
          ><strong>PRIJAVNI OBRAZEC </strong><i
            class="fa fa-external-link-square"
          /></a>
        </p>

        <br>

        <p>
          S strani strokovne žirije izbrani finalisti bodo predvajani na javni
          projekciji v Slovenski kinoteki, 28. marca 2020 ob 19.00. Dogodek bo
          pospremila debata z gosti o lokalni sceni video ustvarjanja.
        </p>

        <p>
          Izbrani zmagovalni videospot bo v letu 2020 predstavljen na
          Ljubljanskem mednarodnem filmskem festivalu (Liffe) ter na Mednarodnem
          festivalu kratkega filma (FeKK) v Ljubljani.
        </p>

        <br>

        <div class="sponzorji">
          <img src="/img/korpo/kinoteka.svg">
          <img src="/img/korpo/liffe.svg">
          <img src="/img/korpo/fekk.svg">
          <img src="/img/korpo/vaga.svg">
          <img src="/img/korpo/outsider.svg">
          <img src="/img/korpo/rs.svg">
          <img src="/img/korpo/vis.svg">
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
      pageTitle: '1. NAJBOLJŠI VIDEOSPOT'
    }
  }
}
</script>

<style scoped></style>
