import { ExcelComponent } from '../../core/ExcelComponent'

export class Formula extends ExcelComponent {
  static className = 'excel__formula'

  constructor($root, options) {
    super($root, {
      name: 'Formula',
      listeners: ['input'],
      ...options
    })
  }

  getHtml() {
    return `
        <div class="info">fx</div>
        <div class="input" contenteditable spellcheck="false"></div>
        `
  }

  onInput(e) {
    const data = e.target.textContent.trim()
    this.emmiter.emit('asd', data)
  }
}
