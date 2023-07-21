import {$} from '../../core/dom'

export class Excel {
  constructor(selector, options) {
    this.$el = document.querySelector(selector);
    this.components = options.components || [];
  }

  getOptions(){
    const $root = $.create('div', 'excel')
    this.components.forEach(Component => {
      const $el = $.create('div', Component.className)
      const instance = new Component($el)
      $el.innerHTML = instance.getHtml()
      $root.append($el)
    })
    return $root
  }

  render(){
    this.$el.append(this.getOptions())
  }
}
