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

  text(text) {
    if (this.$el[0]) {
      if (text && typeof text === 'string') {
        this.$el[0].textContent = text
        return this
      }
      if (this.$el[0].tagName.toLowerCase() === 'input') {
        return this.$el.value.trim()
      }
      return this.$el[0].textContent.trim()
    } else {
      if (text && typeof text === 'string') {
        this.$el.textContent = text
        return this
      }
      if (this.$el.tagName.toLowerCase() === 'input') {
        return this.$el.value.trim()
      }
      return this.$el.textContent.trim()
    }
  }

  append(node) {
    this.$el.append(node.$el)
  }

  closest(selector) {
    return $(this.$el.closest(selector))
  }

  getCoords() {
    return this.$el.getBoundingClientRect()
  }

  get data() {
    return this.$el.dataset
  }

  findAll(selector) {
    return this.$el.querySelectorAll(selector)
  }

  on(eventType, cb) {
    this.$el.addEventListener(eventType, cb)
  }
  off(eventType, cb) {
    this.$el.removeEventListener(eventType, cb)
  }

  find(selector) {
    return $(this.$el.querySelectorAll(selector))
  }
  addClass(className) {
    if (this.$el[0]) {
      this.$el[0].classList.add(className)
    } else {
      this.$el.classList.add(className)
    }
  }
  focus() {
    if (this.$el[0]) {
      this.$el[0].focus()
    } else {
      this.$el.focus()
    }
    return this
  }
  removeClass(className) {
    if (this.$el[0]) {
      this.$el[0].classList.remove(className)
    } else {
      this.$el.classList.remove(className)
    }
  }
  clear() {
    this.html('')
    return this
  }
  css(style = {}) {
    Object.entries(style).forEach(([key, value]) => (this.$el.style[key] = value))
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
