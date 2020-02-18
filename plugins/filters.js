import Vue from 'vue'

const dateFormat = (val, format) => {
  const date = new Date(val)
  return date.toLocaleString()
}

Vue.filter('dateFormat', dateFormat)

Vue.prototype.$log = console.log

Vue.prototype.$logjson = obj => console.log(JSON.parse(JSON.stringify(obj)))
