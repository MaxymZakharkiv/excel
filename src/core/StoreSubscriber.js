import { isEqual } from '../helpers/store'
export class StoreSubscriber {
  constructor(store) {
    this.store = store
    this.sub = null
    this.preState = {}
  }

  subscribeComponents(components) {
    this.preState = this.store.getState()
    this.sub = this.store.subscribe(state => {
      Object.keys(state).forEach(key => {
        if (!isEqual(this.preState[key], state)) {
          components.forEach(component => {
            if (component.isWatching(key)) {
              const changes = { [key]: state[key] }
              component.storeChanged(changes)
            }
          })
        }
      })
      this.preState = this.store.getState()
    })
  }
  unsubscribeFromStore() {
    this.sub.unsubscribe()
  }
}
