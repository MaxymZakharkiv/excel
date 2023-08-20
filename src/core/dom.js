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
<<<<<<< HEAD
    // this.$el.classList.add(className)
=======
>>>>>>> 73a716a3947905c5bd6e7918be8218d7527d9b8f
    if (this.$el[0]) {
      this.$el[0].classList.add(className)
    } else {
      this.$el.classList.add(className)
    }
<<<<<<< HEAD
=======
  }
  focus() {
    if (this.$el[0]) {
      this.$el[0].focus()
    } else {
      this.$el.focus()
    }
    return this
>>>>>>> 73a716a3947905c5bd6e7918be8218d7527d9b8f
  }
  removeClass(className) {
    if (this.$el[0]) {
      this.$el[0].classList.remove(className)
    } else {
      this.$el.classList.remove(className)
    }
<<<<<<< HEAD
=======
  }
  clear() {
    this.html('')
    return this
>>>>>>> 73a716a3947905c5bd6e7918be8218d7527d9b8f
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
