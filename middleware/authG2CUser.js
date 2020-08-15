export default function({ store, redirect }) {
  if (
    !store.$auth.$state.loggedIn ||
    !(store.$auth.$state.strategy === 'g2c_user') ||
    !store.$auth.$storage.getCookie('tokenid') ||
    !store.$auth.$storage.getCookie('tokens1') ||
    !store.$auth.$storage.getCookie('tokenc1')
  ) {
    return redirect('/')
  }
}
