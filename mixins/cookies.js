export const cookies = {
  methods: {
    /**
     * Get Cookie Value
     * @param {string} cookieName - Cookie Name
     * @returns {string} Cookie Value
     */
    async getCookieValue(cookieName) {
      const value = await document.cookie.match(
        '(^|;)\\s*' + cookieName + '\\s*=\\s*([^;]+)'
      )
      return atob(value ? value.pop() : '')
    },

    /**
     * Set Cookie Value
     * @param {string} cookieName - Cookie Name
     * @param {string} cookieValue - Cookie Value
     * @param {number} days - Total Days to store the cookie
     * @return {void}
     */
    async setCookie(cookieName, cookieValue, days) {
      const date = new Date()
      date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000)
      const expires = 'expires=' + date.toUTCString()
      let domain =
        (location.host.indexOf('www.') && location.host) ||
        location.host.replace('www.', '.')

      domain = domain.split(':')[0]

      document.cookie = await (cookieName +
        '=' +
        btoa(cookieValue) +
        ';' +
        expires +
        ';path=/;domain=' +
        domain)
    },

    /**
     * Delete Cookie
     * @param {string} cookieName
     * @return {void}
     */
    deleteCookie(cookieName) {
      document.cookie =
        cookieName + '=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;'
    }
  }
}
