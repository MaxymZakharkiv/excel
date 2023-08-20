const CODES = {
  A: 65,
  Z: 90
}


function createCell(ind, rowIndex) {
  return `<div class="cell" data-type="cell" data-col="${ind}" data-id="${rowIndex}:${ind}" contenteditable=""></div>`

const DEFAULT_WIDTH = 120
const DEFAULT_HEIGHT = 24

function getWidth(state, index) {
  return `${state[index] || DEFAULT_WIDTH}px`

}

function getHeight(state, index) {
  return `${state[index] || DEFAULT_HEIGHT}px`
}

function createCell(ind, rowIndex, state) {
  const width = getWidth(state.colState, ind)
  const id = `${rowIndex}:${ind}`
  const data = state.dataState[id] || ''
  return `
    <div class="cell" 
        data-col="${ind}" 
        data-type="cell" 
        style="width:${width}"
        data-id="${id}" 
        contenteditable=""
    >${data}</div>
`
}

function createCol(col, index, width) {
  return `
        <div class="column" data-type="resizable" data-col="${index}" style="width:${width}">
            ${col}
            <div class="col-resize" data-resize="col"></div> 
        </div>
    `
}

function createRow(content, state, id = '') {
  const isResize = id ? '<div class="row-resize" data-resize="row"></div>' : ''
  const height = getHeight(state, id)
  return `
        <div class="row" data-type="resizable" data-row="${id}" style="height: ${height}">
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

function createEl({ count, name, rowIndex, state }) {
  return new Array(count)
    .fill('')
    .map((_, index) => toChar(index))
    .map((el, ind) => {
      if (name === 'cols') {
        const width = getWidth(state.colState, ind)
        return createCol(el, ind, width)
      } else if (name === 'cells') {
        return createCell(ind, rowIndex, state)
      }
    })
    .join('')
}

export function createTable(rowCount = 20, state = {}) {
  const colsCount = CODES.Z - CODES.A + 1
  const rows = []
  let createItem = createEl({ count: colsCount, name: 'cols', state })
  rows.push(createRow(createItem, {}))
  for (let i = 0; i < rowCount; i++) {
    let createElement = createEl({ count: colsCount, name: 'cells', rowIndex: i, state })
    rows.push(createRow(createElement, state.rowState, i + 1))
  }

  return rows.join('')
}
