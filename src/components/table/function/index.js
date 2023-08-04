import { range } from '../../../core/utils'

export function currentCoords(el) {
  const current = el?.$el ?? el
  let rowCur
  let colCur
  if (current[0]) {
    rowCur = current[0].dataset.id.split(':')[0]
    colCur = current[0].dataset.id.split(':')[1]
  } else {
    rowCur = current.dataset.id.split(':')[0]
    colCur = current.dataset.id.split(':')[1]
  }
  return [rowCur, colCur]
}

export function matrix(rowPrev, colPrev, rowCur, colCur) {
  const cols = range(+colCur, +colPrev)
  const rows = range(+rowCur, +rowPrev)
  return cols.reduce((acc, col) => {
    rows.forEach(row => acc.push(`${row}:${col}`))
    return acc
  }, [])
}

export function nextSelector(key, coords) {
  const MIN_VALUE = 0
  let [row, col] = coords
  if (key === 'Enter') {
    row++
  } else if (key === 'Tab') {
    col++
  } else if (key === 'ArrowLeft') {
    col = col - 1 < MIN_VALUE ? MIN_VALUE : col - 1
  } else if (key === 'ArrowRight') {
    col++
  } else if (key === 'ArrowUp') {
    row = row - 1 < MIN_VALUE ? MIN_VALUE : row - 1
  } else if (key === 'ArrowDown') {
    row++
  }

  return `[data-id="${row}:${col}"]`
}
