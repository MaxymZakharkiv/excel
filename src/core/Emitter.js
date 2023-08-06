export class Emitter {
  constructor() {
    this.listeners = {}
  }

  emit(eventName, ...args) {
    this.listeners[eventName].forEach(listener => {
      listener(...args)
    })
  }

  subscribe(eventName, func) {
    console.log('subscribe')
    this.listeners[eventName] = this.listeners[eventName] || []
    this.listeners[eventName].push(func)
    return () => {
      this.listeners[eventName] = this.listeners[eventName].filter(listener => listener !== func)
    }
  }
}
