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

const actions = {}

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
