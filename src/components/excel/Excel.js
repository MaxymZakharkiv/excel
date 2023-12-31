import { $ } from '../../core/dom'
import { Emitter } from '../../core/Emitter'
import { StoreSubscriber } from '../../core/StoreSubscriber'
import { updateDate } from '../../stores/actions'

export class Excel {
  constructor(options) {
    this.components = options.components || []
    this.store = options.store
    this.emmiter = new Emitter()
    this.subscriber = new StoreSubscriber(this.store)
  }

  getOptions() {
    const $root = $.create('div', 'excel')

    const componentOptions = {
      emmiter: this.emmiter,
      store: this.store
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

  init() {
    this.store.dispatch(updateDate())
    this.subscriber.subscribeComponents(this.components)
    this.components.forEach(component => component.init())
  }

  destroy() {
    this.subscriber.unsubscribeFromStore()
    this.components.forEach(component => component.destroy())
  }
}
