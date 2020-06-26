import Vue from 'vue'
import Vuex from 'vuex'
import register from './modules/register'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

const store = new Vuex.Store({
  state: () => {
    return { counter: 0 }
  },
  modules: {
    register
  },
  strict: debug
})

export default store
