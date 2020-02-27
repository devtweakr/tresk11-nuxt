<template>
  <div id="app">
    <div class="content-page">
      <b-container>
        <header>
          <b-navbar class="px-0 text-right">
            <b-link
              to="/"
              class="btn btn-primary btn-home"
            >
              <i class="fa fa-home" />
            </b-link>
            <b-link
              onclick="history.go(-1)"
              class="btn btn-primary btn-back ml-1"
            >
              <i class="fa fa-arrow-left" />
            </b-link>
            <div class="ml-auto">
              <!-- <b-link
                to="#"
                class="btn btn-primary btn-lang"
              >
                EN
              </b-link> -->
              <div class="dropdown">
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
                      <b-link to="/program/pogovori" disabled>
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
                    <b-link to="/arhiv" disabled>
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
            </div>
          </b-navbar>
        </header>
        <div class="content">
          <nuxt />
          <footer class="pt-3 pb-5">
            <hr>
            <div class="float-left">
              <b-link href="/o-tresku">
                Tresk #11
              </b-link> &copy; <a href="https://radiostudent.si/" target="_blank">Radio Študent</a>
            </div>
            <div class="float-right">
              <b-link to="/kontakt" class="mr-2">
                Kontakt
              </b-link>
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
      dropShow: false
    }
  },
  head () {
    return {
      title: 'Tresk #11'
    }
  }
}

</script>

<style scoped>
/* dropdown menu */

.dropdown {
  position: relative;
  margin: -18px -15px -15px 0;
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
