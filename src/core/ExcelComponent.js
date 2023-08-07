import { DomListener } from './DomListener'

export class ExcelComponent extends DomListener {
  constructor($root, options = {}) {
    super($root, options.listeners)
    this.emmiter = options.emmiter
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

  prepare() {}

  destroy() {
    this.removeDOM()
    this.unsubscribers.forEach(unsub => unsub())
  }
}
