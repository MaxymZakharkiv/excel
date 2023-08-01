const CODES = {
  A: 65,
  Z: 90
}

function createCell(ind) {
  return `<div class="cell" data-col="${ind}" contenteditable=""></div>`
}

function createCol(col, index) {
  return `
        <div class="column" data-type="resizable" data-col="${index}">
            ${col}
            <div class="col-resize" data-resize="col"></div> 
        </div>
    `
}

function createRow(content, id = '') {
  const isResize = id ? '<div class="row-resize" data-resize="row"></div>' : ''
  return `
        <div class="row" data-type="resizable">
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
    .map((el, ind) => {
      if (name === 'cols') {
        return createCol(el, ind)
      } else if (name === 'cells') {
        return createCell(ind)
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
