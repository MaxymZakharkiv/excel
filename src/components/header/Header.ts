import { ExcelComponent } from '../../core/ExcelComponent'

export class Header extends ExcelComponent {
  static className: string = 'excel__header'
  getHtml(): string {
    return `
        <input type="text" class="input" value="Нова таблиця" />
    
          <div>
    
            <div class="button">
              <i class="material-icons">delete</i>
            </div>
    
            <div class="button">
              <i class="material-icons">exit_to_app</i>
            </div>
    
          </div>
          `
  }
}
