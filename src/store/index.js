import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    // 全局主题
    themeToggle: 'light',
    // 全局搜索框显示隐藏
    showSearch: false,
      userInfo: {}
  },
  mutations: {
    switchTheme(state, theme) {
      state.themeToggle = theme;
      sessionStorage.setItem('theme', state.themeToggle);
      document.head.querySelector('#theme').setAttribute('href',
        `/static/css/theme/${theme}.css`)
    },
    showSearchBar(state, showed) {
        state.showSearch = showed;
    },
      updateUserInfo(state, userInfo) {
        state.userInfo = userInfo;
      }
  }
})

export default store;
