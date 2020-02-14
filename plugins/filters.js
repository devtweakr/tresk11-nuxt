import Vue from 'vue'

const dateFormat = (val, format) => {
  const date = new Date(val)
  return date.toLocaleString()
}

Vue.filter('dateFormat', dateFormat)
