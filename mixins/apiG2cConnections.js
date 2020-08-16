import { functions } from '~/mixins/functions'

export const apiG2cConnections = {
  mixins: [functions],
  data() {
    return {
      g2c_connections_application: 'networksv.com',
      g2c_connections_nick: '',
      g2c_connections_tokenid: '',
      g2c_connections_tokens1: '',
      g2c_connections_tokenc1: '',
      g2c_connections_path: '/',
      g2c_connections_type: 'userConnection',
      g2c_connections_encoding: 5,
      g2c_connections_permissions: 2
    }
  },
  methods: {
    /**
     *
     * @param value
     * @param mode
     * @returns {Promise<string | null>}
     */
    exchangeRates(value, mode = 'USD2SAT') {
      try {
        return new Promise((resolve, reject) => {
          // eslint-disable-next-line no-undef
          g2c_exchangeRates(value, mode, (response) => {
            if (response === undefined) {
              reject(Error('Undefined response'))
            }
            if (response.hasOwnProperty('error')) {
              reject(new Error(response.error))
            } else {
              resolve(response)
            }
          })
        })
          .then((response) => response)
          .catch((error) => {
            this.handleErrors(error)
            throw error
          })
      } catch (error) {
        this.handleErrors(error)
        throw error
      }
    },

    /**
     *
     * @param destinationnick
     * @param amount
     * @param lockuntil
     * @param description
     * @returns {Promise<unknown>}
     */
    walletPropose(destinationnick, amount, lockuntil, description) {
      try {
        return new Promise((resolve, reject) => {
          const tokenid = this.g2c_connections_tokenid
          const tokens1 = this.g2c_connections_tokens1
          const tokenc1 = this.g2c_connections_tokenc1
          const application = this.g2c_connections_application
          const sourceNick = this.g2c_connections_nick

          // eslint-disable-next-line no-undef
          g2cclient_walletConditionalPropose(
            {
              tokenid,
              tokens1,
              tokenc1,
              application,
              sourceNick,
              destinationnick,
              amount,
              lockuntil,
              description
            },
            (response) => {
              if (response === undefined) {
                reject(Error('Undefined response'))
              }
              if (response.hasOwnProperty('error')) {
                reject(new Error(response.error))
              } else {
                resolve(response.data)
              }
            }
          )
        })
          .then((response) => response)
          .catch((error) => {
            this.handleErrors(error)
            throw error
          })
        // eslint-disable-next-line no-unreachable
      } catch (error) {
        this.handleErrors(error)
        throw error
      }
    },

    /**
     *
     * @returns {Promise<unknown>}
     */
    createUserObject(destinationnick, sendMessage, txid) {
      try {
        return new Promise((resolve, reject) => {
          const tokenid = this.g2c_connections_tokenid
          const tokens1 = this.g2c_connections_tokens1
          const tokenc1 = this.g2c_connections_tokenc1
          const application = this.g2c_connections_application
          const nick = this.g2c_connections_nick
          const type = this.g2c_connections_type
          const path = this.g2c_connections_path
          const permissions = this.g2c_connections_permissions
          const encoding = this.g2c_connections_encoding
          const data = {
            from: this.g2c_nick,
            to: destinationnick,
            message: sendMessage,
            timestamp: Date.now()
          }

          // eslint-disable-next-line no-undef
          g2cclient_createUserObject(
            {
              tokenid,
              tokens1,
              tokenc1,
              application,
              nick,
              type,
              path,
              data,
              permissions,
              encoding,
              txid
            },
            (response) => {
              if (response === undefined) {
                reject(Error('Undefined response'))
              }
              if (response.hasOwnProperty('error')) {
                reject(new Error(response.error))
              } else {
                resolve(response.data)
              }
            }
          )
        })
          .then((response) => response)
          .catch((error) => {
            this.handleErrors(error)
            throw error
          })
        // eslint-disable-next-line no-unreachable
      } catch (error) {
        this.handleErrors(error)
        throw error
      }
    },

    /**
     * @param name
     * @param destinationnick
     * @returns {Promise<unknown>}
     */
    shareUserObject(name, destinationnick) {
      try {
        return new Promise((resolve, reject) => {
          const tokenid = this.g2c_connections_tokenid
          const tokens1 = this.g2c_connections_tokens1
          const tokenc1 = this.g2c_connections_tokenc1
          const application = this.g2c_connections_application
          const nick = this.g2c_connections_nick
          const path = this.g2c_connections_path

          // eslint-disable-next-line no-undef
          g2cclient_shareUserObjectPropose(
            {
              tokenid,
              tokens1,
              tokenc1,
              application,
              nick,
              path,
              name,
              destinationnick
            },
            (response) => {
              if (response === undefined) {
                reject(Error('Undefined response'))
              }
              if (response.hasOwnProperty('error')) {
                reject(new Error(response.error))
              } else {
                resolve(response.data)
              }
            }
          )
        })
          .then((response) => response)
          .catch((error) => {
            this.handleErrors(error)
            throw error
          })
        // eslint-disable-next-line no-unreachable
      } catch (error) {
        this.handleErrors(error)
        throw error
      }
    }
  },
  mounted() {
    this.g2c_connections_nick = this.$auth.user.data.nick
    this.g2c_connections_tokenid = this.$auth.$storage.getCookie('tokenid')
    this.g2c_connections_tokens1 = this.$auth.$storage.getCookie('tokens1')
    this.g2c_connections_tokenc1 = this.$auth.$storage.getCookie('tokenc1')
  }
}
