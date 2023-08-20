import { ExcelComponent } from '../../core/ExcelComponent'
import { $ } from '@/core/dom'
import { ActiveRoute } from '../../router/activeRoute'

export class Header extends ExcelComponent {
  static className = 'excel__header'

  constructor($root, options) {
    super($root, {
      name: 'Header',
      listeners: ['click'],
      ...options
    })
  }
  getHtml() {
    return `
        <input type="text" class="input" value="Нова таблиця" />
    
          <div>
    
            <div class="button" data-btn="del">
              <i class="material-icons" data-btn="del">delete</i>
            </div>
    
            <div class="button" data-btn="exit">
              <i class="material-icons" data-btn="exit">exit_to_app</i>
            </div>
    
          </div>
          `
  }

  onClick(e) {
    const target = $(e.target)
    if (target.data.btn === 'del') {
      const decision = confirm('Ви хочете видалити цю таблицю?')
      if (decision) {
        localStorage.removeItem(`excel:${ActiveRoute.param}`)
        ActiveRoute.navigate('')
      }
    } else if (target.data.btn === 'exit') {
      ActiveRoute.navigate('')
    }
  }
}
