import Vue from 'vue'
import mixpanel from 'mixpanel-browser'

// const token = process.env.MIX_PANEL_TOKEN || null

// mixpanel.init(token, true)
mixpanel.init(
  '6853623bf838a6be74c88550a816bd2a',
  { api_host: 'https://api-eu.mixpanel.com' },
  ''
)

Vue.use(mixpanel)

export default (context, inject) => {
  // Inject $mixpanel in Vue, context and store.
  inject('mixpanel', mixpanel)
  // For Nuxt <= 2.12, also add 👇
  context.$mixpanel = mixpanel
}
