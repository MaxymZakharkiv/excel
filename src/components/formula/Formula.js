import { ExcelComponent } from '../../core/ExcelComponent'

export class Formula extends ExcelComponent {
  static className = 'excel__formula'

  constructor($root) {
    super($root, {
      name: 'Formula',
      listeners: ['input']
    })
  }

  getHtml() {
    return `
        <div class="info">fx</div>
        <div class="input" contenteditable spellcheck="false"></div>
        `
  }

  onInput(e) {
    console.log('input formula', e)
  }
}
