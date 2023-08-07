import { $ } from '../../core/dom'
import { Emitter } from '../../core/Emitter'

export class Excel {
  constructor(selector, options) {
    this.$el = $(selector)
    this.components = options.components || []
    this.emmiter = new Emitter()
  }

  getOptions() {
    const $root = $.create('div', 'excel')

    const componentOptions = {
      emmiter: this.emmiter
    }

    this.components = this.components.map(Component => {
      const $el = $.create('div', Component.className)
      const instance = new Component($el, componentOptions)

      window[Component.className] = instance

      $el.html(instance.getHtml())
      $root.append($el)
      return instance
    })
    return $root
  }

  render() {
    this.$el.append(this.getOptions())

    this.components.forEach(component => component.init())
  }

  destroy() {
    this.components.forEach(component => component.destroy())
  }
}
