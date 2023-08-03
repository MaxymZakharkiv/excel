import { ExcelComponent } from '../../core/ExcelComponent'
import { isResize } from '../../helpers/resize'
import { isCell } from '../../helpers/cell'
import { tableResize } from './table.resize'
import { createTable } from './table.template'
import { TableSelection } from './TableSelection'
import { $ } from '../../core/dom'
import { range, matrix, currentCoords } from '../../core/utils'

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

// function currentCoords(el) {
//   const current = el.$el
//   let rowCur
//   let colCur
//   if (current[0]) {
//     rowCur = current[0].dataset.id.split(':')[0]
//     colCur = current[0].dataset.id.split(':')[1]
//   } else {
//     rowCur = current.dataset.id.split(':')[0]
//     colCur = current.dataset.id.split(':')[1]
//   }
//   return [rowCur, colCur]
// }

// function matrix(rowPrev, colPrev, rowCur, colCur) {
//   const cols = range(+colCur, +colPrev)
//   const rows = range(+rowCur, +rowPrev)
//   return cols.reduce((acc, col) => {
//     rows.forEach(row => acc.push(`${row}:${col}`))
//     return acc
//   }, [])
// }
