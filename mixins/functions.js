export const functions = {
  data() {
    return {}
  },
  methods: {
    /**
     * Error Handler
     * @param {Error} error
     * @param {string} title - Optional Title
     */
    handleErrors(error) {
      // eslint-disable-next-line no-console
      console.error(error)
    }
  }
}
