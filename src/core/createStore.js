export function createStore(root, initState = []) {
  let state = root({ ...initState }, { type: '__INIT__' })
  let listeners = []

  return {
    subscribe(func) {
      listeners.push(func)
      return {
        unsubscribe() {
          listeners = listeners.filter(i => i !== func)
        }
      }
    },
    dispatch(action) {
      state = root(state, action)
      listeners.forEach(listener => listener(state))
    },
    getState() {
      return JSON.parse(JSON.stringify(state))
    }
  }
}
