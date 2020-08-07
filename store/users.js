const state = () => ({
  nick: null,
  email: null,
  mobile_prefix: null,
  mobile_number: null
})

const getters = {
  getNick: (state) => state.nick,
  getEmail: (state) => state.email,
  getMobilePrefix: (state) => state.mobile_prefix,
  getMobileNumber: (state) => state.mobile_number
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
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
