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
          <h2 @click.prevent="scrollNa('.natecaji')" class="prijava">PRIJAVI SE!</h2>
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

      <section v-if="!scrollFooter">
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
      </section>
    </div>

    <Natecaji />

    <section v-if="scrollFooter" class="scrollFooter">
      <span>Tresk #11 © Radio Študent</span>
      <a href="/kontakt" @click.prevent="scrollNa('.kontakt')">KONTAKT</a>
    </section>

    <section class="otresku odsek">
      <section class="roll">
        <span v-for="n in 60" :key="n">TRESK #12</span>
      </section>

      <section v-if="oTresku" v-html="oTresku.body.processed" />

      <section class="roll">
        <span v-for="n in 60" :key="n">TRESK #12</span>
      </section>
    </section>

    <section class="kontakt odsek">
      <section class="roll">
        <span v-for="n in 60" :key="n">KONTAKT</span>
      </section>

      <section v-if="kontakt" v-html="kontakt.body.processed" />

      <section class="roll">
        <span v-for="n in 60" :key="n">KONTAKT</span>
      </section>
    </section>
  </div>
</template>

<script>
import Natecaji from './natecaji12'
import '@/assets/css/style12.css'

export default {
  components: {
    Natecaji
  },
  transition: 'default',
  layout: 'home',
  data () {
    return {
      dropShow: false,
      pageTitle: 'Tresk #12',
      scrollFooter: false
    }
  },
  computed: {
    oTresku () {
      const id = '54920183-7838-4933-8e53-375daeb09743'
      return this.$store.getters['drupal/get']('node--page')[id]
    },
    kontakt () {
      const id = '9de39d84-71bc-4569-98ce-8a65f131c869'
      return this.$store.getters['drupal/get']('node--page')[id]
    }
  },
  head () {
    return { title: this._data.pageTitle }
  },
  mounted () {
    // Kazem scroll footer?
    window.addEventListener('scroll', () => this.kaziScrollFooter())
    this.kaziScrollFooter()

    // Event za prikaz bannerja spodaj
    switch (window.location.pathname) {
      case '/natecaji':
        this.scrollNa('.natecaji')
        break
      case '/kontakt':
        this.scrollNa('.kontakt')
        break
    }

    this.fetch()
  },
  methods: {
    scrollNa (el) {
      const predel = document.querySelector(el)
      if (predel) {
        predel.scrollIntoView()
      }
    },
    kaziScrollFooter () {
      if (document.scrollingElement.scrollTop > 200) {
        this.scrollFooter = true
      } else {
        this.scrollFooter = false
      }
    },
    fetch () {
      const store = this.$store
      const query = {
        'filter[field_leto.name][value]': '2021',
        sort: 'field_weight'
      }

      // Natecaji in sponzorji za page natecaji
      store.dispatch('drupal/get', ['node/natecaj', { params: query }])
      store.dispatch('drupal/get', ['node/sponzor', { params: {
        ...query,
        'filter[field_tip_podpornika.name][value]': 'Sponzorji natečajev',
        include: 'field_slika'
      } }])
      store.dispatch('drupal/get', ['node/page', { params: {
        'filter[field_leto.name][value]': '2021'
      } }])
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
  padding-left: 2rem;
  padding-right: 2rem;
}

h1 {
  margin-top: -1.5rem;
  font-size: 16rem;
  letter-spacing: -3px;
  transform: scaleX(0.3);
  transform-origin: left;
  white-space: nowrap;
  margin-bottom: -2rem;
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
  margin-top: 2rem;
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
  font-family: Migra;
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

/* Scroll footer */
.scrollFooter {
  position: fixed;
  bottom: 0;
  width: 100%;
  font-family: "LexendGiga";
  background-color: var(--rjava);
  color: var(--zelena);
  padding: 1rem 2rem;
  margin: 0 -15px;
  z-index: 100;
}
.scrollFooter a {
  float: right;
}

.otresku {
  background-color: var(--zelena);
  color: var(--temnomodra);
}
.otresku section >>> a {
  color: var(--temnomodra);
}
.otresku section >>> h2 {
  color: var(--zlata);
}
.otresku .roll {
  color: var(--oranzna);
}

.kontakt {
  background-color: var(--temnozelena);
  color: var(--zelena);
}
.kontakt section >>> a {
  color: var(--zelena);
}
.kontakt section >>> h2 {
  color: var(--temnomodra);
}
.kontakt .roll {
  color: var(--modra);
}

/* @media screens */
@media (max-width: 960px) {
  body {
    font-size: 14px;
  }
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
}

@media (max-width: 768px) {
  h1 {
    font-size: 10rem;
  }
  h2.natecaj {
    font-size: 6rem;
    margin-bottom: -1.5rem;
  }
  h2.puscica {
    transform: scaleX(1.5);
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
}

@media (max-width: 576px) {
  .rs-link {
    right: 1.1rem;
    bottom: 1.1rem;
  }

  .rs-link img {
    width: 60px;
    height: 60px;
  }

  /* home social */
  .home-social {
    position: fixed;
    z-index: 1;
    left: 1.5rem;
    bottom: .8rem;
    font-size: 1.5rem;
    white-space: nowrap;
  }
}

@media (max-width: 490px) {
  h3 span.glasbe {
    transform: scale(1.4, 0.3);
  }
  h3 span.zaloznistva {
    transform: scale(2, 2);
  }
  h2.natecaj {
    font-size: 5rem;
  }
}
</style>
