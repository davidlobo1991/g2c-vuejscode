const state = () => ({
  languages: null
})

const getters = {
  getLanguages: (state) => state.languages
}

const actions = {
  async getAll() {
    try {
      const response = await this.$axios
        .get('languages')
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
  SET_LANGUAGES(state, languages) {
    state.languages = languages
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
