import { DomListener } from './DomListener'

export class ExcelComponent extends DomListener {
  constructor($root, options = {}) {
    super($root, options.listeners)
    this.emmiter = options.emmiter

    this.prepare()
  }
  toHTML() {
    return ''
  }

  init() {
    this.initDOM()
  }

  prepare() {}

  destroy() {
    this.removeDOM()
  }
}
