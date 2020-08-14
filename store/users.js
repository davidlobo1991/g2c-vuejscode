const state = () => ({
  nick: null,
  email: null,
  mobile_prefix: null,
  mobile_number: null,
  name: null,
  last_name: null,
  summary: null,
  title: null
})

const getters = {
  getNick: (state) => state.nick,
  getEmail: (state) => state.email,
  getMobilePrefix: (state) => state.mobile_prefix,
  getName: (state) => state.name,
  getLastName: (state) => state.last_name,
  getSummary: (state) => state.summary,
  getTitle: (state) => state.title
}

const actions = {
  async show({ getters }, dataObject) {
    try {
      const response = await this.$axios
        .get('users')
        .then((response) => response)

      return response
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error)
      throw error
    }
  },

  async edit({ getters }, dataObject) {
    try {
      const response = await this.$axios
        .put(`users/${this.$auth.$state.user.data.id}`, {
          name: getters.getName,
          surname: getters.getLastName
        })
        .then((response) => response)

      return response
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error)
      throw error
    }
  }
}

const mutations = {
  SET_NICK(state, nick) {
    state.nick = nick
  },
  SET_EMAIL(state, email) {
    state.email = email
  },
  SET_MOBILE_PREFIX(state, mobilePrefix) {
    state.mobile_prefix = mobilePrefix
  },
  SET_MOBILE_NUMBER(state, mobileNumber) {
    state.mobile_number = mobileNumber
  },
  SET_NAME(state, name) {
    state.name = name
  },
  SET_LAST_NAME(state, lastName) {
    state.last_name = lastName
  },
  SET_SUMMARY(state, summary) {
    state.summary = summary
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
