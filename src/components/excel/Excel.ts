import { $ } from '../../core/dom'

export class Excel {
  constructor(selector: string, options) {
    this.$el = $(selector)
    this.components = options.components || []
  }

  getOptions() {
    const $root = $.create('div', 'excel')
    this.components = this.components.map(Component => {
      const $el = $.create('div', Component.className)
      const instance = new Component($el)

      window[Component.className] = instance

      $el.html(instance.getHtml())
      $root.append($el)
      return instance
    })
    return $root
  }

  render(): void {
    this.$el.append(this.getOptions())

    this.components.forEach(component => component.init())
  }
}

// export default Excel
