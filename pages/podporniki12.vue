<template>
  <div class="podporniki odsek">
    <section class="roll">
      <span v-for="n in 20" :key="n">PODPORNIKI</span>
    </section>

    <h2>Podporniki</h2>

    <div v-for="kategorija in kategorije">
      <h3>{{ kategorija.name }}</h3>
      <b-row>
        <b-col
          :key="sponzor.id"
          v-for="sponzor in kategorija.sponzorji"
          class="sponzor mb-4"
          cols="6"
          sm="4"
          md="3"
        >
          <a :href="sponzor.field_link[0] ? sponzor.field_link[0].uri : '#'" target="_blank">
            <b-img :src="sponzor.field_slika | treskSlika" class="sponzor-logo mt-3" fluid center />
            <h4 class="text-center mt-3">
              {{ sponzor.title }}
            </h4>
          </a>
        </b-col>
      </b-row>
    </div>

    <section class="roll">
      <span v-for="n in 40" :key="n">PODPORNIKI</span>
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
    kategorije () {
      const vsiSponzorji = Object.values(this.$store.getters['drupal/get']('node--sponzor'))

      return vsiSponzorji.reduce((kat, sponzor) => {
        const kategorija = sponzor.field_tip_podpornika.name

        if (!kat[kategorija]) {
          kat[kategorija] = {
            name: kategorija,
            sponzorji: []
          }
        }

        kat[kategorija].sponzorji.push(sponzor)

        return kat
      }, {})
    }
  }
}
</script>

<style scoped>
.sponzor-logo {
  max-height: 110px;
}

.podporniki {
  background-color: var(--temnomodra);
  color: var(--modra);
}
.podporniki a {
  color: var(--modra);
}
.podporniki > h2 {
  color: var(--oranzna);
  margin-bottom: 2rem;
}
.podporniki h3 {
  text-transform: uppercase;
  color: var(--rdeca);
}
.podporniki .roll {
  color: var(--zelena);
}
</style>
