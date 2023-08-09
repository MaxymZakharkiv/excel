import { storage } from '../helpers/storages'

const defaultState = {
  rowState: {},
  colState: {}
}

export const initialState = storage('resize-table-state') ? storage('resize-table-state') : defaultState
