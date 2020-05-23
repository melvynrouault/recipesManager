export default function ({ store, error }) {
  if (store.state.user) {
    console.log("connecté")
    // error({
    //   message: 'You are not connected',
    //   statusCode: 403
    // })
  }
}
