import { $ } from '../../core/dom'
import { ExcelComponent } from '../../core/ExcelComponent'
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
    if (e.target.dataset.resize) {
      const $resizer = $(e.target)
      const $parent = $resizer.closest('[data-type="resizable"]')
      const coords = $parent.getCoords()

      console.log(coords)

      document.onmousemove = event => {
        if (e.target.dataset.resize === 'col') {
          const delta = event.pageX - coords.right
          const composeWidth = coords.width + delta
          $parent.$el.style.width = composeWidth + 'px'
        } else {
          const delta = event.pageY - coords.bottom
          const composeHeight = coords.height + delta
          $parent.$el.style.height = composeHeight + 'px'
        }
      }

      document.onmouseup = () => {
        document.onmousemove = null
      }
    }
  }
}
