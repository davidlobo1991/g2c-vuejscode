// eslint-disable-next-line no-unused-vars
const apiBackend = {
  methods: {
    getCallApi(url, data = null) {
      return this.$axios.get(url + data).then((response) => response.data)
    },
    postCallApi(url, data = null) {
      const transformRequest = (jsonData = {}) =>
        Object.entries(jsonData)
          .map((x) => `${encodeURIComponent(x[0])}=${encodeURIComponent(x[1])}`)
          .join('&')

      return this.$axios
        .post(url, transformRequest(data), {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        })
        .then((response) => response.data)
    },
    /*  postCallApi(url, data = null) {
      return this.$axios.post(url, data).then((response) => response.data)
    }, */
    putCallApi(url, data = null) {
      return this.$axios.put(url, data).then((response) => response.data)
    },
    deleteCallApi(url, data = null) {
      return this.$axios.delete(url, data).then((response) => response.data)
    }
  }
}

export default apiBackend
