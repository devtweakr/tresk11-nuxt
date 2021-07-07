<template>
  <div id="app">
    <div class="content-page">
      <b-container>
        <header>
          <b-navbar class="px-0 text-right">
            <nuxt-link
              to="/11/"
              class="btn btn-primary btn-home"
            >
              <i class="fa fa-home" />
            </nuxt-link>
            <b-link
              onclick="history.go(-1)"
              class="btn btn-primary btn-back ml-1"
            >
              <i class="fa fa-arrow-left" />
            </b-link>
            <div class="ml-auto">
              <!-- <nuxt-link
                to="#"
                class="btn btn-primary btn-lang"
              >
                EN
              </nuxt-link> -->
              <div class="dropdown">
                <button @click="dropShow=!dropShow" class="btn btn-drop" />
                <div v-show="dropShow" class="dropdown-content">
                  <div class="program-sub">
                    <b-link class="program-link">
                      <i class="fa fa-caret-left pr-2" />Program
                    </b-link>
                    <div @click="dropShow=!dropShow" class="program-content">
                      <nuxt-link to="/11/program/urnik">
                        Urnik
                      </nuxt-link>
                      <b-link to="/11/program/lineup" disabled>
                        Lineup
                      </b-link>
                      <b-link to="/11/program/sejmisce" disabled>
                        Sejmišče
                      </b-link>
                      <b-link to="/11/program/zalozbe" disabled>
                        Založbe
                      </b-link>
                      <b-link to="/11/program/pogovori" disabled>
                        Pogovori
                      </b-link>
                      <b-link to="/11/program/lokacije" disabled>
                        Lokacije
                      </b-link>
                      <b-link to="/11/program/extras" disabled>
                        Extras
                      </b-link>
                    </div>
                  </div>
                  <div @click="dropShow=!dropShow" class="main-drop">
                    <nuxt-link to="/11/natecaji">
                      Natečaji
                    </nuxt-link>
                    <b-link disabled>
                      Vstopnice
                    </b-link>
                    <nuxt-link to="/11/novice">
                      Novice
                    </nuxt-link>
                    <nuxt-link to="/11/o-tresku">
                      O Tresku
                    </nuxt-link>
                    <nuxt-link to="/11/arhiv">
                      Arhiv
                    </nuxt-link>
                    <nuxt-link to="/11/kontakt">
                      Kontakt
                    </nuxt-link>
                    <nuxt-link to="/11/sponzorji">
                      Podporniki
                    </nuxt-link>
                  </div>
                </div>
              </div>
            </div>
          </b-navbar>
        </header>
        <div class="content">
          <nuxt />
          <footer class="pt-3 pb-5">
            <hr>
            <div class="float-left">
              <nuxt-link to="/11/o-tresku">
                Tresk #11
              </nuxt-link> &copy; <a href="https://radiostudent.si/" target="_blank">Radio Študent</a>
            </div>
            <div class="float-right">
              <nuxt-link to="/11/kontakt" class="mr-2">
                Kontakt
              </nuxt-link>
              <a href="https://www.facebook.com/festivaltresk" target="_blank" class="mr-2"><i class="fa fa-facebook" /></a>
              <a href="https://www.instagram.com/festivaltresk/" target="_blank"><i class="fa fa-instagram" /></a>
            </div>
          </footer>
        </div>
      </b-container>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      dropShow: false,
      siteTitle: 'Tresk #11'
    }
  },
  head () {
    return {
      titleTemplate (title) {
        return title ? `${title} | ${this.$store.state.app.siteTitle}` : this.$store.siteTitle
      }
    }
  }
}

</script>

<style scoped>
/* dropdown menu */

.dropdown {
  position: relative;
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
  right: 15px;
  background-color: #2c3e50b0;
  box-shadow: 0px 3px 3px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
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

</style>
