export class DomListener {
  constructor($root, listeners = []) {
    this.$root = $root
    this.listeners = listeners
  }

  initDOM() {
    console.log(this.listeners)
  }

  removeDOM() {}
}
