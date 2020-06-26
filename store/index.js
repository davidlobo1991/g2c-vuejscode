import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export const store = new Vuex.Store({
  state: () => ({
    counter: 0
  }),
  actions: {
    checkUserApi: ({ commit }, data) => {
      try {
        console.log(data)
        return data.axios
          .get('/users/check-nickname/' + data.nick)
          .then((response) => response.data)
      } catch (error) {
        console.log(error)
        throw error
      }
    }
  },
  strict: debug
})
