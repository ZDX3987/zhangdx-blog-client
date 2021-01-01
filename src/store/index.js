import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    themeToggle: 'light'
  },
  mutations: {
    toggleTheme(state, theme) {
      state.themeToggle = theme;
      sessionStorage.setItem('theme', state.themeToggle);
      document.head.querySelector('#theme').setAttribute('href',
        `/static/css/theme/${theme}.css`)
    }
  }
})

export default store;
