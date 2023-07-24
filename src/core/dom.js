class Dom {
  constructor(selector) {
    this.$el = typeof selector === 'string' ? document.querySelector(selector) : selector
  }
  html(html) {
    if (typeof html === 'string') {
      this.$el.innerHTML = html
      return this
    }
    return this.$el.outerHTML.trim()
  }

  clear() {
    this.html('')
    return this
  }

  append(node) {
    this.$el.append(node.$el)
  }

  on(eventType, cb) {
    this.$el.addEventListener(eventType, cb)
  }
  off(eventType, cb) {
    this.$el.removeEventListener(eventType, cb)
  }
}

export function $(selector) {
  return new Dom(selector)
}

$.create = (tagName, className = '') => {
  const $el = document.createElement(tagName)
  if (className) {
    $el.classList.add(className)
  }
  return $($el)
}
