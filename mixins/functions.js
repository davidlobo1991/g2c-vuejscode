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
    handleErrors(error, title) {
      if (title.length > 0) {
        // eslint-disable-next-line no-console
        console.error(title)
      }

      // eslint-disable-next-line no-console
      console.error(error)
    }
  }
}
