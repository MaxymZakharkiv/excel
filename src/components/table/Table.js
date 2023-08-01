import { ExcelComponent } from '../../core/ExcelComponent'
import { isResize } from '../../helpers/resize'
import { tableResize } from './table.resize'
import { createTable } from './table.template'
export class Table extends ExcelComponent {
  static className = 'excel__table'

  constructor($root) {
    super($root, {
      listeners: ['mousedown']
    })
  }

  getHtml() {
    return createTable()
  }

  onMousedown(e) {
    if (isResize(e)) {
      tableResize(this.$root, e)
    }
  }
}
