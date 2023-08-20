import { TABLE_RESIZE, CHANGE_TEXT, UPDATE_DATE } from './const'

export function tableResize(data) {
  return {
    type: TABLE_RESIZE,
    data
  }
}

export function changeText(data) {
  return {
    type: CHANGE_TEXT,
    data
  }
}

export function updateDate() {
  return {
    type: UPDATE_DATE
  }
}
