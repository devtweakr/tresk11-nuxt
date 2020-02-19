/* eslint-disable */
import Vue from 'vue'

const dateFormat = (val, format) => {
  const date = new Date(val)
  return date.toLocaleString()
}

const treskSlika = (field_slika) => {
  return field_slika.uri ? 'https://tresk.si/d' + field_slika.uri.url : null
}

Vue.filter('dateFormat', dateFormat)
Vue.filter('treskSlika', treskSlika)

Vue.prototype.$log = console.log

Vue.prototype.$logjson = obj => console.log(JSON.parse(JSON.stringify(obj)))
