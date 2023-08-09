import { $ } from '../../core/dom'

export function tableResize(root, e) {
  return new Promise(resolve => {
    const $resizer = $(e.target)
    const $parent = $resizer.closest('[data-type="resizable"]')
    const coords = $parent.getCoords()
    let value
    const type = e.target.dataset.resize
    const line = type === 'col' ? 'bottom' : 'right'
    $resizer.css({
      opacity: 1,
      [line]: '-5000px'
    })

    const cells = root.findAll(`[data-col="${$parent.data.col}"]`)

    document.onmousemove = event => {
      if (e.target.dataset.resize === 'col') {
        const delta = event.pageX - coords.right
        value = coords.width + delta
        $resizer.css({
          right: -delta + 'px'
        })
      } else {
        const delta = event.pageY - coords.bottom
        value = coords.height + delta
        $resizer.css({
          bottom: -delta + 'px'
        })
      }
    }

    document.onmouseup = () => {
      document.onmousemove = null
      document.onmouseup = null

      if (e.target.dataset.resize === 'col') {
        $parent.css({
          width: value + 'px'
        })
        cells.forEach(i => (i.style.width = value + 'px'))
      } else {
        $parent.css({
          height: value + 'px'
        })
      }

      resolve({
        value,
        id: type === 'col' ? $parent.data.col : null
      })

      $resizer.css({
        opacity: 0,
        bottom: 0,
        right: 0
      })
    }
  })
}
