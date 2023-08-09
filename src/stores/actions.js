import { TABLE_RESIZE } from './const'

export function tableResize(data) {
  return {
    type: TABLE_RESIZE,
    data
  }
}
