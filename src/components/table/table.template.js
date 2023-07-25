const CODES = {
  A: 65,
  Z: 90
}

function createCell() {
  return `<div class="cell" contenteditable="">B2</div>`
}

function createCol(col) {
  return `
        <div class="column">
            ${col}
        </div>
    `
}

function createRow(content) {
  return `
        <div class="row">
            <div class=row-info></div>
            <div class=row-data>${content}</div>
        </div>    
    `
}

function toChar(index) {
  return String.fromCharCode(CODES.A + index)
}

export function createTable(rowCount = 10) {
  const colsCount = CODES.Z - CODES.A + 1
  const rows = []

  const cols = new Array(colsCount)
    .fill('')
    .map((_, index) => toChar(index))
    .map(el => createCol(el))
    .join('')

  rows.push(createRow(cols))

  for (let i = 0; i < rowCount; i++) {
    rows.push(createRow())
  }

  return rows.join('')
}
