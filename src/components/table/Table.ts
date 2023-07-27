import { ExcelComponent } from '../../core/ExcelComponent'
import { createTable } from './table.template.ts'
export class Table extends ExcelComponent {
  static className = 'excel__table'
  getHtml() {
    return createTable()
  }
}

// export default Table
