export class TableSelection {
  static classSelected = 'selected'

  constructor() {
    this.group = []
    this.current = null
  }

  select($el) {
    this.clear()
    $el.focus().addClass(TableSelection.classSelected)
    this.group.push($el)
    this.current = $el
  }

  clear() {
    this.group.forEach(i => i.removeClass(TableSelection.classSelected))
    this.group = []
  }

  multiplySelect(group = []) {
    this.clear()
    this.group = group
    this.group.forEach(el => el.addClass(TableSelection.classSelected))
  }
}
