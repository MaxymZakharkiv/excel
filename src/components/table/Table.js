import { ExcelComponent } from '../../core/ExcelComponent'
import { isResize } from '../../helpers/resize'
import { isCell } from '../../helpers/cell'
import { tableResize } from './table.resize'
import { createTable } from './table.template'
import { TableSelection } from './TableSelection'
import { $ } from '../../core/dom'
import { matrix, currentCoords, nextSelector } from './function/index'

export class Table extends ExcelComponent {
  static className = 'excel__table'

  constructor($root, options) {
    super($root, {
      name: 'Table',
      listeners: ['mousedown', 'keydown'],
      ...options
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
    this.emmiter.subscribe('asd', info => {
      this.selection.current.text(info)
    })
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

  onKeydown(e) {
    const keys = ['Enter', 'Tab', 'ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown']
    if (keys.includes(e.key) && !e.shiftKey) {
      e.preventDefault()
      const coords = currentCoords(this.selection.current.$el)
      const next = this.$root.find(nextSelector(e.key, coords))
      this.selection.select(next)
    }
  }
}
