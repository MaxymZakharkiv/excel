import { ExcelComponent } from '../../core/ExcelComponent'
import { isResize } from '../../helpers/resize'
import { isCell } from '../../helpers/cell'
import { tableResize } from './table.resize'
import { createTable } from './table.template'
import { TableSelection } from './TableSelection'
import { $ } from '../../core/dom'
import { matrix, currentCoords, nextSelector } from './function/index'
import * as actions from '../../stores/actions'

export class Table extends ExcelComponent {
  static className = 'excel__table'

  constructor($root, options) {
    super($root, {
      name: 'Table',
      listeners: ['mousedown', 'keydown', 'input'],
      ...options
    })
  }

  getHtml() {
    return createTable(30, this.store.getState())
  }

  prepare() {
    this.selection = new TableSelection()
  }

  selectCell(cell) {
    this.selection.select(cell)
    this.$emit('table:select', cell)
  }

  init() {
    super.init()
    const cell = this.$root.find('[data-id="0:0"]')
    this.selectCell(cell)
    this.$on('formula:input', info => {
      this.selection.current.text(info)
      this.updateTextInStore(info)
    })
    this.$on('formula:done', () => {
      this.selection.current.focus()
    })
  }

  async resizeTable(e) {
    try {
      const data = await tableResize(this.$root, e)
      this.dispatch(actions.tableResize(data))
    } catch (e) {
      console.log(e)
    }
  }

  onMousedown(e) {
    if (isResize(e)) {
      this.resizeTable(e)
    } else if (isCell(e)) {
      const $target = $(e.target)
      if (e.shiftKey) {
        const [rowPrev, colPrev] = $target.data.id.split(':')

        const [rowCur, colCur] = currentCoords(this.selection.current)

        const cells = matrix(rowPrev, colPrev, rowCur, colCur).map(id => this.$root.find(`[data-id="${id}"]`))
        this.selection.multiplySelect(cells)
      } else {
        this.selectCell($target)
      }
    }
  }

  onKeydown(e) {
    const keys = ['Enter', 'Tab', 'ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown']
    if (keys.includes(e.key) && !e.shiftKey) {
      e.preventDefault()
      const coords = currentCoords(this.selection.current.$el)
      const next = this.$root.find(nextSelector(e.key, coords))
      this.selectCell(next)
    }
  }

  updateTextInStore(value) {
    this.dispatch(
      actions.changeText({
        id: this.selection.current.$el.dataset?.id,
        value
      })
    )
  }
  onInput(e) {
    this.updateTextInStore($(e.target).text())
  }
}
