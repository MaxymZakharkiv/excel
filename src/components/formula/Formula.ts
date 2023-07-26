import { ExcelComponent } from '../../core/ExcelComponent'

export class Formula extends ExcelComponent {
  static className: string = 'excel__formula'

  constructor($root: string) {
    super($root, {
      name: 'Formula',
      listeners: ['input']
    })
  }

  getHtml(): string {
    return `
        <div class="info">fx</div>
        <div class="input" contenteditable spellcheck="false"></div>
        `
  }

  onInput(e: EventTarget): void {
    console.log('input formula', e)
  }
}
