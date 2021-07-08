<template>
  <div class="natecaji odsek">
    <section class="roll">
      <span v-for="n in 20" :key="n">VIZUALNI NATEČAJ</span>
    </section>

    <section class="tekst">
      <div v-if="intro" v-html="intro.body.processed" />
      <div v-for="natecaj in natecaji" class="kategorija">
        <a v-b-toggle="natecaj._jv.id" class="naslov">
          {{ natecaj.field_display_title }}
        </a>
        <b-collapse :id="natecaj._jv.id">
          <p v-if="natecaj.body" v-html="natecaj.body.processed" />
          <a v-if="natecaj.field_link.length > 0" :href="natecaj.field_link[0].uri" target="_blank" class="prijava">Prijavni obrazec</a>
        </b-collapse>
      </div>

      <h2>
        Prijave odprte do 11. julija
      </h2>

      <p>Za vsa vprašanja smo na voljo na info@tresk.si</p>
    </section>

    <h4 style="margin-top: 3rem">
      Podporniki natečajev Tresk #12:
    </h4>
    <div class="sponzorji">
      <a v-for="sponzor in sponzorjiNatecajev" :href="sponzor.field_link.length > 0 ? sponzor.field_link[0].uri : ''" target="_blank">
        <span>{{ sponzor.field_display_title }}</span>
        <img :src="sponzor.field_slika | treskSlika">
      </a>
    </div>

    <section class="roll">
      <span v-for="n in 20" :key="n">VIZUALNI NATEČAJ</span>
    </section>
  </div>
</template>

<script>
export default {
  data () {
    return {
      odprtaKategorija: null
    }
  },
  computed: {
    natecaji () {
      return this.$store.getters['drupal/get']('node--natecaj')
    },
    sponzorjiNatecajev () {
      const sponzorji = this.$store.getters['drupal/get']('node--sponzor')
      return Object.values(sponzorji).filter((sponzor) => {
        return sponzor.field_tip_podpornika.name === 'Sponzorji natečajev'
      })
    },
    intro () {
      const id = 'ea8bb0df-cecc-40b6-a846-a05d22973880'
      return this.$store.getters['drupal/get']('node--page')[id]
    }
  },
  methods: {
    prikaziKategorijo (id) {
      this.odprtaKategorija = id
    }
  }
}
</script>

<style scoped>
.natecaji {
  background-color: var(--modra);
  color: var(--rumena);
}

.natecaji .tekst h2 {
  margin-top: 3rem;
}
.natecaji .tekst p {
  letter-spacing: -1.5px;
  max-width: 900px;
  margin-bottom: 2rem;
}

.natecaji .kategorija a.naslov {
  display: block;
  cursor: pointer;
  color: var(--temnomodra);
  font-family: "Migra";
  font-size: 3rem;
  text-transform: uppercase;
  position: relative;
  transform: scaleX(0.8);
  transform-origin: left;
}
.natecaji .kategorija a.naslov:before {
  content: '→ ';
  position: absolute;
  top: -.25rem;
  left: 0rem;
  transition: transform .35s;
}
.natecaji .kategorija.not-collapsed + div a.naslov:before {
  transform: rotate(90deg);
}

.natecaji .kategorija a.prijava {
  display: block;
  font-family: "Migra";
  color: var(--rdeca);
  font-size: 2rem;
  text-transform: uppercase;
  transform: scaleX(0.8);
  transform-origin: left;
  margin-bottom: 1rem;
}
.natecaji .kategorija a.prijava:hover {
  text-decoration: none;
}
.natecaji .kategorija a.prijava:before {
  content: '→ ';
  position: relative;
  top: -.25rem;
}
.natecaji .kategorija a.prijava:after {
  content: ' ←';
  position: relative;
  top: -.25rem;
}

.natecaji .kategorija > * {
  padding-left: 2.5rem;
}

.sponzorji {
  margin: 3rem 0;
  overflow: auto;
}
.sponzorji a {
  float: left;
  display: flex;
  flex-direction: column;
  margin-right: 1rem;
  margin-bottom: 1rem;
}
.sponzorji a span {
  display: none;
}
.sponzorji img {
  max-width: 70px;
  max-height: 70px;
  width: auto;
  height: auto;
}

@media (max-width: 960px) {
  .sponzorji img {
    max-width: 50px;
    max-height: 50px;
  }

  .natecaji .kategorija a.naslov {
    font-size: 2rem;
  }
}

@media (max-width: 576px) {
  .natecaji .kategorija > * {
    padding-left: 0;
  }
}
</style>
