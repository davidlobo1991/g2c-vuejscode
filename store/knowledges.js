const state = () => ({
  knowledges: null
})

const getters = {
  getKnowledges: (state) => state.knowledges
}

const actions = {
  async getAll() {
    try {
      const response = await this.$axios
        .get('knowledges')
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
  SET_KNOWLEDGES(state, knowledges) {
    state.knowledges = knowledges
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
