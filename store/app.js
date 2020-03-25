export default {
  state: {
    siteTitle: 'Tresk #11',
    language: 'SI'
  },
  mutations: {
    toggleLang (state) {
      state.language = (state.language === 'SI') ? 'EN' : 'SI'
      debugger
    }
  }
}
