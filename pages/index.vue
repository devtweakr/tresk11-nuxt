<template>
  <div class="container-fluid">
    <div>
      <b-modal
        id="tresk-news"
        ref="tresk-news"
        :no-close-on-backdrop="true"
        size="lg"
        hide-footer
        scrollable
        hide-backdrop
        content-class="shadow"
        centered
      >
        <!-- <template v-slot:modal-title>
          <nuxt-link to="/novice">
            Tresk #11 Novice
          </nuxt-link>
        </template> -->

        <b-row>
          <b-col
            :key="novica.id"
            v-for="novica in novice"
            class="novica"
            cols="12"
          >
            <!-- <nuxt-link v-if="novica.title" :to="$options.filters.getAlias(novica, 'pogovor')"> -->
            <h4>
              {{ novica.title }}
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
            <nuxt-link to="/program/urnik">
              Urnik
            </nuxt-link>
            <b-link to="/program/lineup" disabled>
              Lineup
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
    </div>
    <a href="https://radiostudent.si" target="_blank" class="rs-link">
      <img src="/img/home/rs_logo_black.svg?inline"></img>
    </a>
    <div class="home-social">
      <a id="tresk-news-btn" v-on:click="toggleModal()" class="news-btn">
        <!-- <b-tooltip target="tresk-news-btn" placement="left" show triggers="hover blur">
          Novice!
        </b-tooltip> -->
        <NewsBtn />
      </a>
      <a href="https://www.youtube.com/watch?v=sPgr_XWa2VE&list=PLoMK-mIEi8qTg9svcy5U-SLUOOhWgcokZ" target="_blank" class="yt-link">
        <YtLogo />
      </a>
      <a href="https://www.instagram.com/festivaltresk" target="_blank" class="ig-link">
        <IgLogo />
      </a>
      <a href="https://www.facebook.com/festivaltresk" target="_blank" class="fb-link">
        <FbLogo />
      </a>
    </div>

    <a class="datum">
      <img src="/img/home/datum.svg"></img>
    </a>
    <div class="home-content row">
      <div class="tabla overflow-hidden col">
        <img class="img-tabla" src="/img/home/signs.svg">
        <!-- <TablaLinki class="img-tabla" /> -->
        <svg id="svg211" class="img-tabla" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1080 1920" version="1.1">
          <nuxt-link tag="a" to="/natecaji">
            <ellipse
              id="natecaji-link"
              cx="245.6"
              cy="747.9"
              rx="121.9"
              ry="123"
              opacity="1"
              vector-effect="none"
              fill="white"
              fill-opacity="0"
              stroke="none"
              stroke-width="3.5"
              stroke-linecap="butt"
              stroke-linejoin="miter"
              stroke-miterlimit="4"
              stroke-dasharray="none"
              stroke-dashoffset="0"
              stroke-opacity="1"
            />
          </nuxt-link>

          <path
            id="tresk-fb-link"
            opacity="1"
            vector-effect="none"
            fill="white"
            fill-opacity="0"
            stroke="none"
            stroke-width="1"
            stroke-linecap="butt"
            stroke-linejoin="miter"
            stroke-miterlimit="4"
            stroke-dasharray="none"
            stroke-dashoffset="0"
            stroke-opacity="1"
            d="M286.29999
              256.39999H672v112.4H286.29999z"
          />

          <path
            id="festival-instagram-link"
            opacity="1"
            vector-effect="none"
            fill="white"
            fill-opacity="0"
            stroke="none"
            stroke-width="1"
            stroke-linecap="butt"
            stroke-linejoin="miter"
            stroke-miterlimit="4"
            stroke-dasharray="none"
            stroke-dashoffset="0"
            stroke-opacity="1"
            d="M130.39999
              96.5h209.7v129.7h-209.7z"
          />

          <nuxt-link tag="a" to="/program/urnik">
            <path
              id="program-link"
              d="M235.932 373.22L108.814 603.05l263.703-5.902z"
              opacity="1"
              vector-effect="none"
              fill="gray"
              fill-opacity="0"
              stroke="none"
              stroke-width="7.559"
              stroke-linecap="butt"
              stroke-linejoin="miter"
              stroke-miterlimit="4"
              stroke-dasharray="none"
              stroke-dashoffset="0"
              stroke-opacity="1"
            />
          </nuxt-link>
          <!--a xlink:href="https://olaii.com/event/865/festival-tresk-11" target="_blank"-->
            <path
              id="vstopnice-link"
              d="M131.186 893.898l252.204-8.135 2.034 81.356-253.22 9.152z"
              opacity="1"
              vector-effect="none"
              fill="gray"
              fill-opacity="0"
              stroke="none"
              stroke-width="7.559"
              stroke-linecap="butt"
              stroke-linejoin="miter"
              stroke-miterlimit="4"
              stroke-dasharray="none"
              stroke-dashoffset="0"
              stroke-opacity="1"
            />
          <!--/a-->
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
// import TablaLinki from '@/static/img/home/signs-link.svg'
import NewsBtn from '@/static/img/icons/exclamation-triangle-solid.svg'
import FbLogo from '@/static/img/icons/facebook-square-brands.svg'
import IgLogo from '@/static/img/icons/instagram-brands.svg'
import YtLogo from '@/static/img/icons/note.svg'

export default {
  components: {
    // TablaLinki,
    NewsBtn,
    FbLogo,
    IgLogo,
    YtLogo
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
    if (window.innerWidth >= 768) {
      this.toggleModal()
    }
  },
  methods: {
    toggleModal () {
      const novice = this.$refs['tresk-news']
      if (novice.isVisible) {
        novice.hide()
      } else {
        novice.show()
      }
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

.news-btn {
  cursor: pointer;
}

.news-btn svg{
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
  right: 2rem;
  bottom: 2rem;
  z-index: 1;
}

.rs-link img {
  width: 110px;
  height: 110px;
}

.datum {
  display: none;
  position: fixed;
  bottom: 1.8rem;
  right: 1.8rem;
}

/* home social */

.home-social{
  position: fixed;
  z-index: 1;
  right: 10rem;
  bottom: 4.2rem;
  opacity: 0.6;
}

.news-btn,
.fb-link,
.ig-link,
.yt-link {
  margin-right: 0.8rem;
}

.news-btn svg,
.fb-link svg,
.ig-link svg,
.yt-link svg {
  width: 40px;
  height: 40px;
  color: #ffffff99
}

  .news-btn{
    display: none;
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
  z-index: 10000;
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
  .news-btn{
    display: inline;
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

  .datum {
    bottom: 1rem;
    right: 1rem;
  }

  .datum img {
    width: 70px;
    height: 70px;
  }

  /* home social */

  .home-social{
    position: fixed;
    z-index: 1;
    right: 5.5rem;
    bottom: 2.4rem;
    opacity: 0.6;
  }

  .news-btn,
  .fb-link,
  .ig-link,
  .yt-link {
    margin-right: 0.6rem;
  }
  .news-btn svg,
  .fb-link svg,
  .ig-link svg,
  .yt-link svg {
    width: 25px;
    height: 25px;
  }

}
</style>
