<template>
  <div class="container-fluid">
    <a href="https://radiostudent.si" target="_blank" class="rs-link">
      <img src="~assets/rs_logo_black.svg"></img>
    </a>
    <a class="datum">
      <img src="~assets/datum.svg"></img>
    </a>
    <div class="home-content row">
      <div class="tabla overflow-hidden col-12">
        <img class="img-tabla" src="~assets/signs.svg">
        <svg id="svg211" class="img-tabla" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1080 1920" version="1.1">
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

.rs-link {
  position: absolute;
  top: 2rem;
  right: 2rem;
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

/* @media screens */

@media (max-width: 576px) {
  .rs-link {
    position: absolute;
    top: 1rem;
    right: 1rem;
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
