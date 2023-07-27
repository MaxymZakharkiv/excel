enum CODES {
  A = 65,
  Z = 90
}

function createCell() {
  return `<div class="cell" contenteditable=""></div>`
}

function createCol(col: string) {
  return `
        <div class="column">
            ${col}
        </div>
    `
}

function createRow(content: string, id: number | '' = '') {
  return `
        <div class="row">
            <div class=row-info>${id}</div>
            <div class=row-data>${content}</div>
        </div>    
    `
}

function toChar(index: number) {
  return String.fromCharCode(CODES.A + index)
}

type TypeCreateEl = {
  count: number
  name: 'cols' | 'cells'
}

function createEl({ count, name }: TypeCreateEl) {
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

export function createTable(rowCount = 20): string {
  const colsCount = CODES.Z - CODES.A + 1
  const rows = []
  rows.push(createRow(createEl({ count: colsCount, name: 'cols' })))
  for (let i: number = 0; i < rowCount; i++) {
    const id: number = i + 1
    rows.push(createRow(createEl({ count: rowCount, name: 'cells' }), id))
  }

  return rows.join('')
}
