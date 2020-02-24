<template>
  <div class="container-fluid">
    <div class="dropdown ml-auto">
      <button class="btn btn-drop" />
      <div class="dropdown-content">
        <div class="program-sub">
          <nuxt-link to="#" class="program-link">
            <i class="fa fa-caret-left pr-2" />Program
          </nuxt-link>
          <div class="program-content">
            <nuxt-link to="/program/urnik">
              Urnik
            </nuxt-link>
            <nuxt-link to="/program/lineup">
              Lineup
            </nuxt-link>
            <nuxt-link to="/program/sejmisce">
              Sejmišče
            </nuxt-link>
            <nuxt-link to="/program/zalozbe">
              Založbe
            </nuxt-link>
            <nuxt-link to="/program/pogovori">
              Pogovori
            </nuxt-link>
            <nuxt-link to="/program/lokacije">
              Lokacije
            </nuxt-link>
            <nuxt-link to="/program/extras">
              Extras
            </nuxt-link>
          </div>
        </div>
        <nuxt-link to="/natecaji">
          Natečaji
        </nuxt-link>
        <nuxt-link to="/vstopnice">
          Vstopnice
        </nuxt-link>
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

          <a xlink:href="/natecaji">
            <nuxt-link to="/natecaji">
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
          </a>

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
          <a xlink:href="/program">
            <nuxt-link to="/program">
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
          </a>
          <!-- <a xlink:href="#">
            <nuxt-link to="#"> -->
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
          <!-- </nuxt-link>
          </a> -->

        </svg>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  transition: 'default',
  layout: 'home'
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
  border-radius: 0;
}

.dropdown-content {
  display: none;
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
.program-sub a:hover + .program-content {
  display: block;
}
.program-content{
  position:absolute;
  margin-right:auto;
  display: none;
  top:0;
  text-align: left;
}
.program-content:hover, .program-content:active + .program-content{
  display: block;
}
.program-content a:active + .program-content{
  display: none;
}

.dropdown-content a:hover {
  background-color: #1e2b37b0;
  color: #e5332a;
}
.dropdown-content a:focus + .dropdown-content {
  display: none;
}

.dropdown:hover .dropdown-content {
  display: block;
}

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
