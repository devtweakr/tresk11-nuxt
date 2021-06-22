<template>
  <div class="container-fluid">
    <div class="home">
      <!--div class="dropdown ml-auto">
        <button @click="dropShow=!dropShow" class="btn btn-drop">
          <span class="burger" />
          <span class="burger" />
          <span class="burger" />
        </button>
        <div v-show="dropShow" class="dropdown-content">
          <div class="program-sub">
            <b-link class="program-link">
              <i class="fa fa-caret-left pr-2" />Program
            </b-link>
            <div @click="dropShow=!dropShow" class="program-content">
              <b-link to="/natecaji" disabled>
                Natečaji
              </b-link>
              <b-link to="/program/sejmisce" disabled>
                Sejmišče
              </b-link>
              <b-link to="/program/zalozbe" disabled>
                Založbe
              </b-link>
              <b-link to="/program/pogovori" disabled>
                Pogovori
              </b-link>
              <b-link to="/program/lokacije" disabled>
                Lokacije
              </b-link>
              <b-link to="/program/extras" disabled>
                Extras
              </b-link>
            </div>
          </div>
          <div @click="dropShow=!dropShow" class="main-drop">
            <nuxt-link to="/natecaji">
              Natečaji
            </nuxt-link>
            <b-link to="https://olaii.com/event/865/festival-tresk-11" target="_blank" disabled>
              Vstopnice
            </b-link>
            <nuxt-link to="/novice">
              Novice
            </nuxt-link>
            <nuxt-link to="/o-tresku">
              O Tresku
            </nuxt-link>
            <nuxt-link to="/arhiv">
              Arhiv
            </nuxt-link>
            <nuxt-link to="/kontakt">
              Kontakt
            </nuxt-link>
            <nuxt-link to="/sponzorji">
              Podporniki
            </nuxt-link>
          </div>
        </div>
      </div-->

      <section class="h1">
        <h1>TRESK #12</h1>
      </section>

      <section class="h2">
        <h2 class="natecaj">
          VIZUALNI NATEČAJ
        </h2>
        <h2 class="puscica">
          ↓
        </h2>
        <a href="/natecaji">
          <h2 @click.prevent="scrollNatecaji" class="prijava">PRIJAVI SE!</h2>
        </a>
      </section>

      <section class="h3">
        <h3 class="obracun">
          <span>OBRAČUN</span>
          <span class="glasbe">GLASBE</span>
        </h3>
        <h3>
          <span class="in">IN</span>
          <span class="zaloznistva">ZALOŽNIŠTVA</span>
        </h3>
      </section>

      <a href="https://radiostudent.si" target="_blank" class="rs-link">
        <img src="/img/global/rs_zelen.svg?inline"></img>
      </a>
      <div class="home-social">
        <a href="https://www.facebook.com/festivaltresk" target="_blank" class="fb-link">
          FACEBOOK
        </a>
        <img src="/img/home/zvezdica12.svg?inline"></img>
        <a href="https://www.instagram.com/festivaltresk" target="_blank" class="ig-link">
          INSTAGRAM
        </a>
      </div>
    </div>

    <div class="natecaji">
      <section class="roll">
        <span>VIZUALNI NATEČAJ</span>
        <span>VIZUALNI NATEČAJ</span>
        <span>VIZUALNI NATEČAJ</span>
        <span>VIZUALNI NATEČAJ</span>
        <span>VIZUALNI NATEČAJ</span>
        <span>VIZUALNI NATEČAJ</span>
        <span>VIZUALNI NATEČAJ</span>
        <span>VIZUALNI NATEČAJ</span>
        <span>VIZUALNI NATEČAJ</span>
      </section>

      <section class="tekst">
        <h2>Odpiramo natečaje festivala Tresk #12!</h2>

        <p>
          Vizualni natečaji, ki nagrajujejo glasbeno založniško in promocijsko oblikovanje, letos z novo karantentsko kategorijo
        </p>

        <p>
          Festival Tresk vsako leto razpiše vizualni natečaj, ki obsega pet kategorij, tako ali drugače povezanih z glasbenim založništvom. Kljub majhnosti trga, slovensko glasbeno založništvo z vsakim letom bolj skrbi za bogat nabor glasbenih izdaj, pestro koncertno dogajanje pa poskrbi, da poslušalci in poslušalke pridejo z novo glasbo v stik tudi v živo. Natečaj festivala Tresk tako prispeva k prepoznavanju pomembnosti kvalitetno oblikovanih fizičnih in digitalnih nosilcev glasbe, spremljevalnega promocijskega materiala in dokumentacije glasbenih dogodkov. Vsako leto natečaji izpostavljajo in nagrajujejo novosti, ki poganjajo in zaznamujejo delovanje domače glasbene scene. Izredno smo ponosni, da ob vse večji in kvalitetnejši produkciji domačih glasbenih videospotov kot edini v Sloveniji s tovrstno kategorijo uveljavljamo to panogo.
        </p>

        <h2>Karantenska kategorija, ki izpostavlja nove pristope</h2>

        <p>
          Izredne okoliščine so od vseh akterjev na glasbeni sceni zahtevale nove, manj uveljavljene pristope k organizaciji in oblikovanju glasbenih dogodkov. Kar naenkrat so se glasbeniki znašli pred praznimi dvoranami, občinstvo pa je njihove nastope spremljalo na ekranih iz udobja domačih naslanjačev. Z novimi oblikami koncertnih izkušenj je prišla tudi potreba po vizualni popestritvi nastopov in novih načinih povezovanja z občinstvom. Zato kategorije letošnjih natečajev dopolnjuje nova, karantenska kategorija, ki pripoznava vse nekonvencionalne načine oblikovanja in izvedbe dogodkov na spletnih platformah.
        </p>

        <p>
          Festival Tresk #12 zato letos išče presežke in podeljuje nagrade v petih kategorijah:
        </p>

        <a href="https://tresk.si/natecaji/videospot" class="kategorija" target="_blank">
          Najboljši videospot
        </a>
        <a href="https://tresk.si/natecaji/album" class="kategorija" target="_blank">
          Najboljša podoba albuma
        </a>
        <a href="https://tresk.si/natecaji/podoba" class="kategorija" target="_blank">
          Najboljša podoba glasbenega dogodka
        </a>
        <a href="https://tresk.si/natecaji/dokumentacija" class="kategorija" target="_blank">
          Najboljša dokumentacija glasbenega dogodka
        </a>
        <a href="https://tresk.si/natecaji/karantena" class="kategorija" target="_blank">
          Karantenska kategorija
        </a>

        <h2>
          Prijave odprte do 11. julija
        </h2>

        <p>
          Ustvarjalci in ustvarjalke lahko na natečaje prijavijo dela, ki so nastala med 9. marcem 2020 in 11. julijem 2021. Prijave potekajo preko spletnega obrazca, ki se nahaja na www.tresk.si. Opise posameznih natečajnih kategorij ter njihovih nagrad prav tako najdete na spletni strani festivala Tresk.
        </p>
      </section>

      <section class="roll">
        <span>VIZUALNI NATEČAJ</span>
        <span>VIZUALNI NATEČAJ</span>
        <span>VIZUALNI NATEČAJ</span>
        <span>VIZUALNI NATEČAJ</span>
        <span>VIZUALNI NATEČAJ</span>
        <span>VIZUALNI NATEČAJ</span>
        <span>VIZUALNI NATEČAJ</span>
        <span>VIZUALNI NATEČAJ</span>
        <span>VIZUALNI NATEČAJ</span>
      </section>
    </div>
  </div>
</template>

<script>
// import TablaLinki from '@/static/img/home/signs-link.svg'
// import NewsBtn from '@/static/img/icons/exclamation-triangle-solid.svg'

export default {
  components: {
    // TablaLinki,
    // NewsBtn,
  },
  transition: 'default',
  layout: 'home',
  data () {
    return {
      dropShow: false,
      pageTitle: 'Tresk #12'
    }
  },
  computed: {
    novice () {
      return this.$store.state.drupal['node--novica']
    }
  },
  fetch ({ store, params }) {
    const zdaj = new Date()

    const query = {
      sort: '-field_datum',
      'filter[field_leto.name][value]': '2020',
      'filter[field_tip_novice.name][value]': 'novica',
      'filter[datefilter][condition][path]': 'field_datum',
      'filter[datefilter][condition][operator]': '<',
      'filter[datefilter][condition][value]': zdaj,
      include: 'field_slika'
    }
    return store.dispatch('drupal/get', ['node/novica', { params: query }])
  },
  head () {
    return { title: this._data.pageTitle }
  },
  mounted () {
  },
  methods: {
    scrollNatecaji () {
      const natecaji = document.querySelector('.natecaji')
      natecaji.scrollIntoView()
    }
  }
}
</script>

<style scoped>

.home {
  overflow: hidden;
  min-height: 100vh;
  background-image: url(/img/home/ozadje12.jpg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  margin-left: -15px;
  margin-right: -15px;
  padding-left: 15px;
  padding-right: 15px;
}

h1 {
  margin-top: -1.5rem;
  font-size: 16rem;
  letter-spacing: -3px;
  transform: scaleX(0.3);
  transform-origin: left;
  white-space: nowrap;
}

.h2 {
  text-align: center;
  overflow: hidden;
}
.h2 h2 {
  margin-left: -100%;
  margin-right: -100%;
}

.h2, .h3 {
  display: flex;
  flex-direction: column;
}
.h3 h3 {
  white-space: nowrap;
}
h2.natecaj {
  font-size: 9rem;
  letter-spacing: 0px;
  transform: scaleX(0.35);
  transform-origin: center;
  white-space: nowrap;
  font-weight: 400;
  margin-bottom: -2.4rem;
}
h2.puscica {
  transform: scaleX(2.5);
  margin-bottom: -.1rem;
}
h2.prijava {
  font-size: 3rem;
  letter-spacing: -2px;
  transform: scaleX(1.75);
  transform-origin: center;
}

.h3 {
  margin-top: 3rem;
}
h3.obracun {
  font-size: 11rem;
  transform: scaleX(0.35);
  transform-origin: left;
  white-space: nowrap;
  margin-bottom: -1rem;
  float: left;
}
h3 span.glasbe {
  transform: scale(2.2, 0.3);
  display: inline-block;
  transform-origin: bottom left;
  letter-spacing: -7px;
  position: relative;
  bottom: 2.6rem;
  left: -1.5rem;
}
h3 span.in {
  display: inline-block;
  font-size: 2rem;
  transform: scale(1, 2);
}
h3 span.zaloznistva {
  display: inline-block;
  font-size: 2rem;
  transform: scale(4, 2);
  transform-origin: left;
}

/* logo, date, social */

.rs-link {
  position: fixed;
  right: 2rem;
  bottom: 3rem;
  z-index: 1;
}

.rs-link img {
  width: 110px;
  height: 110px;
}

.home-social {
  position: fixed;
  z-index: 1;
  right: 8rem;
  bottom: 2.3rem;
  font-size: 2rem;
  vertical-align: middle;
  transform: scaleX(0.7);
  display: inline-block;
}

/* dropdown menu */

.dropdown {
  position: absolute;
  z-index: 10000;
  right: 1rem;
  top: 1rem;
}

.btn-drop {
  border-radius: 0;
  width: 120px;
  height: 45px;
  overflow: visible;
  border: none;

  display: flex;
  justify-content: space-between;
  flex-direction: column;
}
.btn-drop > .burger {
  width: 100%;
  height: 4px;
  background-color: var(--zelena);
}

.btn-drop:focus {
  box-shadow: none;
}

.dropdown-content {
  position: absolute;
  text-align: right;
  background-color: #2c3e50b0;
  box-shadow: 0px 3px 3px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  right: 0;
  width: 200px;
}

.dropdown-content a {
  color: white;
  padding: 8px 10px;
  text-decoration: none;
  font-size: 1.2em;
  display: block;
  white-space: nowrap;
}

.program-content{
  position: absolute;
  margin-right: auto;
  display: none;
  top:0;
  text-align: left;
}

.program-sub a:hover + .program-content {
  display: block;
}

.program-content:hover, .program-content:active + .program-content{
  display: block;
}

.dropdown-content a:hover {
  background-color: #1e2b37b0;
  color: #e5332a;
}

.natecaji {
  padding: 2rem 25px;

  background-color: var(--modra);
  min-height: 100vh;
  margin-left: -15px;
  margin-right: -15px;
  color: var(--rumena);
  font-family: "LexendGiga";
}

.natecaji .tekst {
  margin-top: 3rem;
}
.natecaji .tekst h2 {
  margin-top: 3rem;
}
.natecaji .tekst p {
  letter-spacing: -1.5px;
  max-width: 900px;
  margin-bottom: 2rem;
}

.natecaji .kategorija {
  display: block;
  color: var(--temnomodra);
  font-family: "Migra";
  font-size: 3rem;
}

.natecaji .kategorija:before {
  content: '→';
}

.roll {
  font-family: "Migra";
  color: var(--rdeca);
}
.roll span {
  font-size: 1rem;
  transform: scale(1, 2);
  display: inline-block;
  margin-right: .5rem;
}

/* @media screens */
@media (max-width: 960px) {
  h3.obracun {
    font-size: 8rem;
  }
  h3 span.glasbe {
    bottom: 2rem;
  }
  h3 span.in {
    font-size: 1.45rem;
  }
  h3 span.zaloznistva {
    font-size: 1.45rem;
  }
  .natecaji .kategorija {
    font-size: 2rem;
  }
}

@media (max-width: 768px) {
  h1 {
    font-size: 10rem;
  }
  h2.natecaj {
    font-size: 6rem;
  }
  h2.puscicaa {
    font-size: 0.67rem;
  }
  h2.prijava {
    font-size: 2rem;
  }
  h3.obracun {
    font-size: 5.5rem;
  }
  h3 span.glasbe {
    bottom: 1.3rem;
  }
  h3 span.in {
    font-size: 1rem;
  }
  h3 span.zaloznistva {
    font-size: 1rem;
  }
  .natecaji .kategorija {
    font-size: 1.5rem;
  }
}

@media (max-width: 576px) {
  .rs-link {
    left: 1.1rem;
    bottom: 1.1rem;
  }

  .rs-link img {
    width: 60px;
    height: 60px;
  }

  /* home social */

  .home-social{
    position: fixed;
    z-index: 1;
    right: 5.5rem;
    bottom: 2.4rem;
  }
}
</style>
