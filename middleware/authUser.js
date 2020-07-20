export default function({ store, redirect }) {
  if (!store.$auth.state.loggedIn || !store.$auth.state.strategy('user')) {
    return redirect('/')
  }
}
