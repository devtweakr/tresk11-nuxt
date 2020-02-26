/* eslint-disable */
import Vue from 'vue'

const MESECI = [
  'januar', 'februar', 'marec', 'april', 'maj', 'junij', 'julij', 'avgust', 'september', 'oktober', 'november', 'december'
]

const dateFormat = (val) => {
  const date = new Date(val)
  // return date.toLocaleString()
  return date.getDate() + '. ' + MESECI[date.getMonth()]
}

const dateTimeFormat = (val) => {
  const date = new Date(val)
  return date.getDate()
    + '. ' + MESECI[date.getMonth()]
    + " " + date.getHours()
    + ":" + String(date.getMinutes()).padStart(2, '0')
}

const treskSlika = (field_slika) => {
  const defaulti = [
    'https://i.redd.it/hfjd0svm6gtz.png',
    'https://lh3.googleusercontent.com/proxy/cJ1p0dH-s9vnlF1aKQBpdEDtDGAcJ8i2G4X39Sl3_oUjW8QE6YfueJHF9hmNE8uwrwD0gC2IAJH3r05hL6h-_-t24ut8ljY_yPcBxek0rKGCuf3uvL3QW1tv0PU',
    'https://www.meme-arsenal.com/memes/53546583e715c39bb17fcc3deebce071.jpg',
    'https://i.kym-cdn.com/photos/images/facebook/001/038/768/e01.jpg',
    'https://i.kym-cdn.com/photos/images/original/001/131/656/15d.jpg'
  ]

  return field_slika && field_slika.uri
    ? 'https://tresk.si' + field_slika.uri.url
    : defaulti[Math.floor(Math.random() * defaulti.length)]
}

const drupalLinks = (body) => {
  // Resevanje decoupled routing problema, s pomocjo path aliasov
  const zamenjave = [
    // Lokacija
    [/href="\/d\/lokacija\/(.+?)"/g, 'href="/program/lokacija/$1"'],
    // Zalozba
    [/href="\/d\/zalozba\/(.+?)"/g, 'href="/program/zalozba/$1"'],
    // Artist / Band
    [/href="\/d\/artist\/(.+?)"/g, 'href="/program/artist/$1"'],
    // Pogovori
    [/href="\/d\/dogodek\/(.+?)"/g, 'href="/program/pogovori"'],
    // Basic strani
    ['href="/d/basic-page/kontakt', 'href="/kontakt"'],
    ['href="/d/basic-page/o-tresku-11', 'href="/o-tresku"'],
    ['href="/d/basic-page/sejmisce', 'href="/program/sejmisce"'],
    ['href="/d/basic-page/urnik', 'href="/program/urnik"'],
    ['href="/d/zalozbe', 'href="/program/zalozbe"'],
    // Slike
    [/src="\/d\/(.+?)"/g, 'src="https://tresk.si/d/$1"']
  ]

  return zamenjave.reduce((cisto, zamenjavi) => {
    return cisto.replace(zamenjavi[0], zamenjavi[1])
  }, body)
}
const summary = (body) => {
  return body.substring(0, 250) + "..."
}

const getAlias = (entity, type) => {
  const replacements = {
    artist: [/\/artist\/(.+)/, '/program/artist/$1'],
    zalozba: [/\/zalozba\/(.+)/, '/program/zalozba/$1'],
    lokacija: [/\/lokacija\/(.+)/, '/program/lokacija/$1'],
    pogovor: [/\/dogodek\/(.+)/, '/program/pogovor/$1']
  }

  return entity.field_path.replace(replacements[type][0], replacements[type][1])
}

Vue.filter('dateFormat', dateFormat)
Vue.filter('dateTimeFormat', dateTimeFormat)
Vue.filter('treskSlika', treskSlika)
Vue.filter('drupalLinks', drupalLinks)
Vue.filter('getAlias', getAlias)
Vue.filter('summary', summary)

Vue.prototype.$log = console.log

Vue.prototype.$logjson = obj => console.log(JSON.parse(JSON.stringify(obj)))
