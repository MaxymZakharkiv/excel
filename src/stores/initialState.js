import { storage } from '../helpers/storages'
import { storageName } from '../pages/ExcelPage'

const defaultState = {
  rowState: {},
  colState: {},
  currentText: '',
  dataState: {},
  openedDate: new Date().toJSON()
}

const idTable = window.location.hash.split('/')[1]
export const initialState = storage(storageName(idTable)) ? storage(storageName(idTable)) : defaultState
