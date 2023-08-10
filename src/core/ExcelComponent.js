import { DomListener } from './DomListener'

export class ExcelComponent extends DomListener {
  constructor($root, options = {}) {
    super($root, options.listeners)
    this.emmiter = options.emmiter
    this.store = options.store
    this.subscribe = options.subscribe || []
    this.unsubscribers = []
    this.prepare()
  }
  toHTML() {
    return ''
  }

  init() {
    this.initDOM()
  }

  $emit(event, ...args) {
    this.emmiter.emit(event, ...args)
  }

  $on(event, func) {
    const unsub = this.emmiter.subscribe(event, func)
    this.unsubscribers.push(unsub)
  }

  dispatch(action) {
    this.store.dispatch(action)
  }

  isWatching(key) {
    return this.subscribe.includes(key)
  }

  storeChanged() {}

  prepare() {}

  destroy() {
    this.removeDOM()
    this.unsubscribers.forEach(unsub => unsub())
  }
}
