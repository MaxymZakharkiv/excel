import { ExcelComponent } from '../../core/ExcelComponent'
import { isResize } from '../../helpers/resize'
import { isCell } from '../../helpers/cell'
import { tableResize } from './table.resize'
import { createTable } from './table.template'
import { TableSelection } from './TableSelection'
import { $ } from '../../core/dom'
import { matrix, currentCoords } from '../../core/utils'

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

  prepare() {
    this.selection = new TableSelection()
  }

  init() {
    super.init()
    const cell = this.$root.find('[data-id="0:0"]')
    this.selection.select(cell)
  }

  onMousedown(e) {
    if (isResize(e)) {
      tableResize(this.$root, e)
    } else if (isCell(e)) {
      const $target = $(e.target)
      if (event.shiftKey) {
        const [rowPrev, colPrev] = $target.data.id.split(':')

        const [rowCur, colCur] = currentCoords(this.selection.current)

        const cells = matrix(rowPrev, colPrev, rowCur, colCur).map(id => this.$root.find(`[data-id="${id}"]`))
        this.selection.multiplySelect(cells)
      } else {
        this.selection.select($target)
      }
    }
  }
}
