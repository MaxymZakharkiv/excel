export class Excel {
  constructor(selector, options) {
    this.$el = document.querySelector(selector);
    this.components = options.components || [];
  }

  getOptions(){
    const $root = document.createElement('div')
    this.components.forEach(Component => {
      const instance = new Component()
      $root.insertAdjacentHTML('beforeend', instance.getHtml())
    })
    return $root
  }

  render(){
    this.$el.append(this.getOptions())
  }
}
