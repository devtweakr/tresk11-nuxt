<template>
  <div class="container-fluid">
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
            <b-link to="/program/extras">
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
      <img src="/img/home/rs_logo_black.svg"></img>
    </a>
    <a class="datum">
      <img src="/img/home/datum.svg"></img>
    </a>
    <div class="home-content row">
      <div class="tabla overflow-hidden col">
        <img class="img-tabla" src="/img/home/signs.svg">
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
          <a xlink:href="https://www.facebook.com/festivaltresk" target="_blank">
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
          </a>
          <a xlink:href="https://www.instagram.com/festivaltresk" target="_blank">
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
          </a>
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
          <a xlink:href="https://olaii.com/event/865/festival-tresk-11" target="_blank">
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
          </a>
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  transition: 'default',
  layout: 'home',
  data () {
    return {
      dropShow: false
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

/* logo, date */
.rs-link {
  position: absolute;
  left: 2rem;
  bottom: 2rem;
  z-index: 1;
}

.rs-link img {
  width: 70px;
  height: 70px;
}

.datum {
  position: absolute;
  bottom: 2rem;
  right: 2rem;
}

/* tabla styles */

.tabla{
  height: 100vh;
}

.img-tabla{
  position: absolute;
  height: 140vh;
}

/* dropdown menu */

.dropdown {
  position: absolute;
  z-index: 1;
  right: 1rem;
  top: 1rem;
}

.btn-drop {
  width: 80px;
  height: 80px;
  border-radius: 0;
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
  width: 170px;
}

.dropdown-content a {
  color: white;
  padding: 8px 10px;
  text-decoration: none;
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

/* .dropdown:hover .dropdown-content {
  display: block;
} */

/* @media screens */

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
    position: absolute;
    bottom: 1rem;
    right: 1rem;
  }

  .datum img {
    width: 100px;
    height: 100px;
  }
}
</style>
