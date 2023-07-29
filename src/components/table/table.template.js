const CODES = {
  A: 65,
  Z: 90
}

function createCell() {
  return `<div class="cell" contenteditable=""></div>`
}

function createCol(col) {
  return `
        <div class="column">
            ${col}
            <div class="col-resize"></div> 
        </div>
    `
}

function createRow(content, id = '') {
  const isResize = id ? '<div class="row-resize"></div>' : ''
  return `
        <div class="row">
            <div class=row-info>
              ${id}
              ${isResize}
            </div>
            <div class=row-data>${content}</div>
        </div>    
    `
}

function toChar(index) {
  return String.fromCharCode(CODES.A + index)
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
        return createCell()
      }
    })
    .join('')
}

export function createTable(rowCount = 20) {
  const colsCount = CODES.Z - CODES.A + 1
  const rows = []
  rows.push(createRow(createEl({ count: colsCount, name: 'cols' })))
  for (let i = 0; i < rowCount; i++) {
    rows.push(createRow(createEl({ count: colsCount, name: 'cells', index: i }), i + 1))
  }

  return rows.join('')
}
