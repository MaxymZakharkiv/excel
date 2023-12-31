import { ExcelComponent } from '../../core/ExcelComponent'
import { $ } from '../../core/dom'

export class Formula extends ExcelComponent {
  static className = 'excel__formula'

  constructor($root, options) {
    super($root, {
      name: 'Formula',
      listeners: ['input', 'keydown'],
      subscribe: ['currentText'],
      ...options
    })
  }

  getHtml() {
    return `
        <div class="info">fx</div>
        <div class="input" contenteditable spellcheck="false"></div>
        `
  }

  init() {
    super.init()

    this.$formula = this.$root.find('.input')

    this.$on('table:select', cell => {
      this.$formula.text(cell.text())
    })
  }

  storeChanged({ currentText }) {
    this.$formula.text(currentText)
  }

  onInput(e) {
    this.$emit('formula:input', $(e.target).text())
  }

  onKeydown(e) {
    if (e.key === 'Enter' || e.key === 'Tab') {
      e.preventDefault()
      this.$emit('formula:done')
    }
  }
}
