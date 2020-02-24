/* eslint-disable */
import Vue from 'vue'

const dateFormat = (val) => {
  const MESECI = [
    'januar', 'februar', 'marec', 'april', 'maj', 'junij', 'julij', 'avgust', 'september', 'oktober', 'november', 'december'
  ]

  const date = new Date(val)
  // return date.toLocaleString()
  return date.getDate() + '. ' + MESECI[date.getMonth()]
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
  console.log("FIDIDIID", body, arguments)
  return body
}

Vue.filter('dateFormat', dateFormat)
Vue.filter('treskSlika', treskSlika)
Vue.filter('drupalLinks', drupalLinks)

Vue.prototype.$log = console.log

Vue.prototype.$logjson = obj => console.log(JSON.parse(JSON.stringify(obj)))
