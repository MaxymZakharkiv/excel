import {$} from '../../core/dom'

export class Excel {
  constructor(selector, options) {
    this.$el = $(selector);
    this.components = options.components || [];
  }

  getOptions(){
    const $root = $.create('div', 'excel')
    this.components.forEach(Component => {
      // const $el = $.create('div', Component.className)
      // const instance = new Component($el)
      const instance = new Component()
      const $el = $
        .create('div', Component.className)
        .html(instance.getHtml())  
        // $el.html(instance.getHtml())
      $root.append($el)
    })
    return $root
  }

  render(){
    this.$el.append(this.getOptions())
  }
}
