export default function({ store, redirect }) {
  if (
    store.$auth.$state.loggedIn &&
    store.$auth.$state.strategy === 'g2c_user'
  ) {
    return redirect('/home')
  } else if (
    store.$auth.$state.loggedIn &&
    store.$auth.$state.strategy === 'user'
  ) {
    return redirect('/user-profile')
  }
}
