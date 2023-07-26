const CODES = {
  A: 65,
  Z: 90
}

function createCell(content) {
  return `<div class="cell" contenteditable="">${content}</div>`
}

function createCol(col) {
  return `
        <div class="column">
            ${col}
        </div>
    `
}

function createRow(content, id = '') {
  return `
        <div class="row">
            <div class=row-info>${id}</div>
            <div class=row-data>${content}</div>
        </div>    
    `
}

function toChar(index) {
  return String.fromCharCode(CODES.A + index)
}

function toContentCell(name, ind) {
  return `${name}${ind + 1}`
}

function createEl({ count, name, index }) {
  return new Array(count)
    .fill('')
    .map((_, index) => toChar(index))
    .map(el => {
      createCol(el)
      if (name === 'cols') {
        return createCol(el)
      } else if (name === 'cells') {
        return createCell(toContentCell(el, index))
      }
    })
    .join('')
}

export function createTable(rowCount = 20) {
  const colsCount = CODES.Z - CODES.A + 1
  const rows = []
  rows.push(createRow(createEl({ count: colsCount, name: 'cols' })))
  for (let i = 0; i < rowCount; i++) {
    rows.push(createRow(createEl({ count: rowCount, name: 'cells', index: i }), i + 1))
  }

  return rows.join('')
}
