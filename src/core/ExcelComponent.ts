import { DomListener } from './DomListener'

export class ExcelComponent extends DomListener {
  constructor($root, options = {}) {
    super($root, options.listeners)
  }
  toHTML(): string {
    return ''
  }

  init(): void {
    this.initDOM()
  }

  destroy(): void {
    this.removeDOM()
  }
}
