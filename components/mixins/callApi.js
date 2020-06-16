// eslint-disable-next-line no-unused-vars
const apiBackend = {
  mounted() {
    this.$axios.defaults.headers.post['Content-Type'] =
      'application/x-www-form-urlencoded'
    this.$axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*'
  },
  methods: {
    getCallApi(url, data = null) {
      return this.$axios
        .get(url + data, {
          headers: {
            'Access-Control-Allow-Origin': '*'
          }
        })
        .then((response) => response.data)
    },
    postCallApi(url, data = null) {
      return this.$axios
        .post(url, data, {
          headers: {
            'Access-Control-Allow-Origin': '*'
          }
        })
        .then((response) => response.data)
    },
    putCallApi(url, data = null) {
      return this.$axios.put(url, data).then((response) => response.data)
    },
    deleteCallApi(url, data = null) {
      return this.$axios.delete(url, data).then((response) => response.data)
    }
  }
}

export default apiBackend
