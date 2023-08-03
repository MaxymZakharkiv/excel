export function capitalize(str) {
  if (typeof str !== 'string') {
    return ''
  }
  return str.charAt(0).toUpperCase() + str.slice(1)
}

export function range(start, end) {
  if (start > end) {
    ;[end, start] = [start, end]
  }
  return new Array(end - start + 1).fill('').map((_, index) => start + index)
}

export function currentCoords(el) {
  const current = el.$el
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
