const state = () => ({
  destinationNick: null,
  sourceNick: null,
  cost: null,
  stateConnection: null
})

const getters = {
  getDestinationNick: (state) => state.destinationNick,
  getSourceNick: (state) => state.sourceNick,
  getCost: (state) => state.cost,
  getStateConnection: (state) => state.stateConnection
}

const actions = {
  async create(destinationId, connectionStatus) {
    try {
      const response = await this.$axios
        .post(`users/${this.$auth.$state.user.id}/connections/create`, {
          destination_user_id: destinationId,
          status: connectionStatus
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
  SET_DESTINATION_NICK(state, destinationNick) {
    state.destinationNick = destinationNick
  },
  SET_SOURCE_NICK(state, sourceNick) {
    state.sourceNick = sourceNick
  },
  SET_COST(state, cost) {
    state.cost = cost
  },
  SET_STATE(state, stateConnection) {
    state.stateConnection = stateConnection
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
