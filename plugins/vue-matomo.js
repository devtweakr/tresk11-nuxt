import Vue from 'vue'
import VueMatomo from 'vue-matomo'

export default ({ app }) => {
  Vue.use(VueMatomo, {
    router: app.router,
    host: 'https://anal.radiostudent.si',
    siteId: 2,

    /** Other configuration options **/
  })
}
