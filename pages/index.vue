<template>
  <div class="container-fluid">
    <div>
      <b-button id="tresk-news-btn" v-b-modal.tresk-news variant="primary" class="btn-news position-absolute">
        <i class="fa fa-bullhorn" />
      </b-button>
      <b-tooltip target="tresk-news-btn" placement="left" show triggers="hover blur">
        Tresk 11# Novice!
      </b-tooltip>
      <b-modal
        id="tresk-news"
        ref="tresk-news"
        size="lg"
        hide-header
        hide-footer
        scrollable
        hide-backdrop
        content-class="shadow"
        centered
      >
        <!-- <template v-slot:modal-title>
          <b-link
            to="/novice"
          >
            Tresk #11 Novice
          </b-link>
        </template> -->

        <b-row>
          <b-col
            :key="'novica'"
            v-for="novica in novice"
            class="novica"
            cols="12"
          >
            <!-- <nuxt-link v-if="novica.title" :to="$options.filters.getAlias(novica, 'pogovor')"> -->
            <h4>
              {{ novica.title }} 1
            </h4>
            <b-img v-if="novica.field_slika" :src="novica.field_slika | treskSlika" fluid />
            <!-- </nuxt-link> -->
            <h5>{{ novica.field_datum | dateFormat }}</h5>
            <p v-html="$options.filters.drupalLinks(novica.body.processed)" class="text-justify mt-4" />
          </b-col>
        </b-row>
      </b-modal>
    </div>
    <div class="dropdown ml-auto">
      <button @click="dropShow=!dropShow" class="btn btn-drop" />
      <div v-show="dropShow" class="dropdown-content">
        <div class="program-sub">
          <b-link class="program-link">
            <i class="fa fa-caret-left pr-2" />Program
          </b-link>
          <div @click="dropShow=!dropShow" class="program-content">
            <b-link to="/program/urnik">
              Urnik
            </b-link>
            <b-link to="/program/lineup">
              Lineup
            </b-link>
            <b-link to="/program/sejmisce">
              Sejmišče
            </b-link>
            <b-link to="/program/zalozbe">
              Založbe
            </b-link>
            <b-link to="/program/pogovori">
              Pogovori
            </b-link>
            <b-link to="/program/lokacije">
              Lokacije
            </b-link>
            <b-link to="/program/extras" disabled>
              Extras
            </b-link>
          </div>
        </div>
        <div @click="dropShow=!dropShow" class="main-drop">
          <b-link to="/natecaji">
            Natečaji
          </b-link>
          <a href="https://olaii.com/event/865/festival-tresk-11" target="_blank">
            Vstopnice
          </a>
          <b-link to="/novice">
            Novice
          </b-link>
          <b-link to="/o-tresku">
            O Tresku
          </b-link>
          <b-link to="/arhiv">
            Arhiv
          </b-link>
          <b-link to="/kontakt">
            Kontakt
          </b-link>
          <b-link to="/sponzorji">
            Podporniki
          </b-link>
        </div>
      </div>
    </div>
    <a href="https://radiostudent.si" target="_blank" class="rs-link">
      <img src="/img/home/rs_logo_black.svg?inline"></img>
    </a>
    <a href="https://www.instagram.com/festivaltresk" target="_blank" class="ig-link">
      <IgLogo />
    </a>
    <a href="https://www.facebook.com/festivaltresk" target="_blank" class="fb-link">
      <FbLogo />
    </a>
    <a class="datum">
      <img src="/img/home/datum.svg"></img>
    </a>
    <div class="home-content row">
      <div class="tabla overflow-hidden col">
        <img class="img-tabla" src="/img/home/signs.svg">
        <TablaLinki class="img-tabla" />
      </div>
    </div>
  </div>
</template>

<script>
import TablaLinki from '@/static/img/home/signs-link.svg'
import FbLogo from '@/static/img/icons/facebook-square-brands.svg'
import IgLogo from '@/static/img/icons/instagram-brands.svg'

export default {
  components: {
    FbLogo,
    IgLogo,
    TablaLinki
  },
  transition: 'default',
  layout: 'home',
  data () {
    return {
      dropShow: false,
      pageTitle: 'Tresk #11'
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
    if (window.innerWidth >= 768) {
      this.showModal()
    } else {

    }
  },
  methods: {
    showModal () {
      this.$refs['tresk-news'].show()
    }
  }
}
</script>

<style scoped>

.container {
  margin: 0 auto;
  min-height: 100vh;
}

.home-content {
  height: 100vh;
}

/* home news button */

.btn-news{
  display: none;
  position: absolute;
  top: 45%;
  right: 2rem;
  z-index: 3;
  border-radius: 0;
}

.btn-news i{
  animation: blinker 5s linear infinite;
}

@keyframes blinker {
  0%    { transform: scaleX(-1) translate(0 , 0); }
  3%    { transform: scaleX(-1) translate(0 , -8px); }
  6%    { transform: scaleX(-1) translate(0 , 0); }
  9%    { transform: scaleX(-1) translate(0 , -5px); }
  12%   { transform: scaleX(-1) translate(0 , 0); }
  15%   { transform: scaleX(-1) translate(0 , -3px); }
  18%   { transform: scaleX(-1) translate(0 , 0); }
  21%   { transform: scaleX(-1) translate(0 , -2px); }
  24%   { transform: scaleX(-1) translate(0 , 0); }
  100%  { transform: scaleX(-1) translate(0 , 0); }
}

/* logo, date, social */

.rs-link {
  position: fixed;
  left: 2rem;
  bottom: 2rem;
  z-index: 1;
}

.rs-link img {
  width: 110px;
  height: 110px;
}

.datum {
  position: fixed;
  bottom: 1.8rem;
  right: 1.8rem;
}

.fb-link,
.ig-link {
  position: fixed;
  z-index: 1;
  right: 14rem;
  bottom: 4.5rem;
  opacity: 0.6;
}

.ig-link {
  right: 10.6rem;
}

.fb-link svg,
.ig-link svg {
  width: 40px;
  height: 40px;

  color: white;
}

/* tabla styles */

.tabla {
  height: 100vh;
}

.img-tabla {
  position: absolute;
  height: 140vh;

  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

/* dropdown menu */

.dropdown {
  position: absolute;
  z-index: 1;
  right: 1rem;
  top: 1rem;
}

.btn-drop {
  border-radius: 0;
  width: 80px;
  height: 80px;
  overflow: visible;
  background-image: url(/img/home/hamburger.svg);
  background-repeat: no-repeat;
  background-position: center;
  border: none;
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

/* @media screens */
@media (max-width: 768px) {
  .btn-news{
    display: block;
  }
}

@media (max-width: 576px) {

  .btn-news{
    right: 1.3rem;
  }

  .rs-link {
    left: 1.1rem;
    bottom: 1.1rem;
  }

  .rs-link img {
    width: 60px;
    height: 60px;
  }

  .ig-link,
  .fb-link {
    right: 6.1rem;
    bottom: 1.6rem;
  }

  .fb-link {
    right: 9.5rem;
  }

  .datum {
    bottom: 1rem;
    right: 1rem;
  }

  .datum img {
    width: 70px;
    height: 70px;
  }
}
</style>
