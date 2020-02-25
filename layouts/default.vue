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
                <button class="btn btn-primary btn-drop">
                  <i class="fa fa-bars" />
                </button>
                <div class="dropdown-content">
                  <div class="program-sub">
                    <b-link to="#" class="program-link">
                      <i class="fa fa-caret-left pr-2" />Program
                    </b-link>
                    <div class="program-content">
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
          </b-navbar>
        </header>
        <div class="content">
          <nuxt />
        </div>
        <footer class="my-5">
          <hr>
          <div class="float-left">
            Tresk #11 &copy; <a href="https://radiostudent.si/" target="_blank">Radio Študent</a>
          </div>
          <div class="float-right">
            <b-link to="/kontakt">
              Kontakt
            </b-link> |
            <a href="https://www.facebook.com/festivaltresk" target="_blank" class="mr-1"><i class="fa fa-facebook" /></a>
            <a href="https://www.instagram.com/festivaltresk/" target="_blank"><i class="fa fa-instagram" /></a>
          </div>
        </footer>
      </b-container>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
/* dropdown menu */

.dropdown {
  position: relative;
  display: inline-block;
}

.btn-drop {
  border-radius: 0;
}

.dropdown-content {
  display: none;
  position: absolute;
  right: 0;
  background-color: #2c3e50b0;
  box-shadow: 0px 3px 3px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
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

</style>
