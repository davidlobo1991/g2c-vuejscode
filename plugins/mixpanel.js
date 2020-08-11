import Vue from 'vue'
import mixpanel from 'mixpanel-browser'

const token = process.env.MIX_PANEL_TOKEN || null

mixpanel.init(token, { debug: process.env.MIX_PANEL_DEBUG || true })

Vue.use(mixpanel)

export default (context, inject) => {
  // Inject $mixpanel in Vue, context and store.
  inject('mixpanel', mixpanel)
  // For Nuxt <= 2.12, also add 👇
  context.$mixpanel = mixpanel
}
