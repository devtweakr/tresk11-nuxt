<template>
  <div id="app">
    <div class="content-page">
      <b-container>
        <header>
          <b-navbar class="px-0 text-right">
            <nuxt-link
              to="/"
              class="btn btn-primary btn-home"
            >
              <i class="fa fa-home" />
            </nuxt-link>
            <div class="dropdown ml-auto">
              <button class="btn btn-primary btn-drop">
                <i class="fa fa-bars" />
              </button>
              <div class="dropdown-content">
                <div class="program-sub">
                  <nuxt-link to="#" class="program-link">
                    <i class="fa fa-caret-left pr-2" />Program
                  </nuxt-link>
                  <div class="program-content">
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
                  O tresku
                </nuxt-link>
                <nuxt-link to="/arhiv">
                  Arhiv
                </nuxt-link>
                <nuxt-link to="/kontakt">
                  Kontakt
                </nuxt-link>
                <nuxt-link to="/sponzorji">
                  Sponzorji & podporniki
                </nuxt-link>
              </div>
            </div>
          </b-navbar>
        </header>
        <div class="content">
          <nuxt />
        </div>
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
