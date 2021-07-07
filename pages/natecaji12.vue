<template>
  <div class="natecaji">
    <section class="roll">
      <span>VIZUALNI NATEČAJ</span>
      <span>VIZUALNI NATEČAJ</span>
      <span>VIZUALNI NATEČAJ</span>
      <span>VIZUALNI NATEČAJ</span>
      <span>VIZUALNI NATEČAJ</span>
      <span>VIZUALNI NATEČAJ</span>
      <span>VIZUALNI NATEČAJ</span>
      <span>VIZUALNI NATEČAJ</span>
      <span>VIZUALNI NATEČAJ</span>
      <span>VIZUALNI NATEČAJ</span>
    </section>

    <section class="tekst">
      <h2>Odpiramo natečaje festivala Tresk #12!</h2>

      <p>
        Festival Tresk vsako leto razpiše vizualni natečaj, ki obsega 5 kategorij, tako ali drugače povezanih z glasbenim založništvom. Nagrade v sodelovanju s podporniki se podeljuje za:
      </p>

      <div v-for="natecaj in natecaji" :class="{ odprta: (natecaj._jv.id === odprtaKategorija) }" class="kategorija">
        <a @click.prevent="prikaziKategorijo(natecaj._jv.id)" class="naslov" href="#">{{ natecaj.field_display_title }}</a>
        <p v-if="natecaj.body" v-html="natecaj.body.processed" />
        <a v-if="natecaj.field_link.length > 0" :href="natecaj.field_link[0].uri" target="_blank" class="prijava">Prijavni obrazec</a>
      </div>

      <h2>
        Prijave odprte do 11. julija
      </h2>
    </section>

    <p>Podporniki natečajev Tresk #12:</p>
    <div class="sponzorji">
      <a v-for="sponzor in sponzorji" :href="sponzor.field_link.length > 0 ? sponzor.field_link[0].uri : ''" target="_blank">
        <span>{{ sponzor.field_display_title }}</span>
        <img :src="sponzor.field_slika | treskSlika">
      </a>
    </div>

    <section class="roll">
      <span>VIZUALNI NATEČAJ</span>
      <span>VIZUALNI NATEČAJ</span>
      <span>VIZUALNI NATEČAJ</span>
      <span>VIZUALNI NATEČAJ</span>
      <span>VIZUALNI NATEČAJ</span>
      <span>VIZUALNI NATEČAJ</span>
      <span>VIZUALNI NATEČAJ</span>
      <span>VIZUALNI NATEČAJ</span>
      <span>VIZUALNI NATEČAJ</span>
      <span>VIZUALNI NATEČAJ</span>
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
    sponzorji () {
      return this.$store.getters['drupal/get']('node--sponzor')
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
  overflow: hidden;
  padding: 2rem 25px 12rem 2rem;

  background-color: var(--modra);
  min-height: 100vh;
  margin-left: -15px;
  margin-right: -15px;
  color: var(--rumena);
  font-family: "LexendGiga";
}

.natecaji .tekst {
  margin-top: 3rem;
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
}

.natecaji .kategorija a.naslov:hover {
  text-decoration: none !important;
}
.natecaji .kategorija p,
.natecaji .kategorija a.prijava {
  display: none;
}
.natecaji .kategorija.odprta p,
.natecaji .kategorija.odprta a.prijava {
  display: block;
}

.natecaji .kategorija a.prijava {
  font-family: "Migra";
  color: var(--rdeca);
  font-size: 2rem;
  text-transform: uppercase;
  transform: scaleX(0.8);
  transform-origin: left;
  margin-bottom: 2rem;
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

.roll {
  font-family: "Migra";
  color: var(--rdeca);
  white-space: nowrap;
  clear: both;
}
.roll span {
  font-size: 1rem;
  transform: scale(1, 2);
  display: inline-block;
  margin-right: .5rem;
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
</style>
