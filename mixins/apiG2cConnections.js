import { functions } from '~/mixins/functions'

export const apiG2cConnections = {
  mixins: [functions],
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
     * @param tokenid
     * @param tokens1
     * @param tokenc1
     * @param application
     * @param sourcenick
     * @param destinationnick
     * @param amount
     * @param lockuntil
     * @param description
     * @returns {Promise<unknown>}
     */
    walletPropose(
      tokenid,
      tokens1,
      tokenc1,
      application,
      sourcenick,
      destinationnick,
      amount,
      lockuntil,
      description
    ) {
      try {
        return new Promise((resolve, reject) => {
          // eslint-disable-next-line no-undef
          g2cclient_walletConditionalPropose(
            {
              tokenid,
              tokens1,
              tokenc1,
              application,
              sourcenick,
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
     * @param tokenid
     * @param tokens1
     * @param tokenc1
     * @param application
     * @param sourcenick
     * @param path
     * @param name
     * @param destinationnick
     * @returns {Promise<unknown>}
     */
    shareUserObject(
      tokenid,
      tokens1,
      tokenc1,
      application,
      sourcenick,
      path,
      name,
      destinationnick
    ) {
      try {
        return new Promise((resolve, reject) => {
          // eslint-disable-next-line no-undef
          g2cclient_shareUserObjectPropose(
            {
              tokenid,
              tokens1,
              tokenc1,
              application,
              sourcenick,
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
  }
}
