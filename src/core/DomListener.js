import { capitalize } from '../core/utils'

export class DomListener {
  constructor($root, listeners = []) {
    this.$root = $root
    this.listeners = listeners
  }

  initDOM() {
    this.listeners.forEach(listener => {
      const method = getMethodName(listener)
      if (this[method]) {
        this[method] = this[method].bind(this)
        this.$root.on(listener, this[method])
      } else {
        throw new Error(`Method ${method} is not implement in component`)
      }
    })
  }

  removeDOM() {
    this.listeners.forEach(listener => {
      const method = getMethodName(listener)
      this.$root.off(listener, this[method])
    })
  }
}

function getMethodName(eventName) {
  return 'on' + capitalize(eventName)
}
