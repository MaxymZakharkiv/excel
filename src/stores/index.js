import { TABLE_RESIZE, CHANGE_TEXT, UPDATE_DATE } from './const'
export function indexStore(state, action) {
  let field
  let preState
  switch (action.type) {
    case TABLE_RESIZE:
      field = action.data.type === 'col' ? 'colState' : 'rowState'
      preState = state[field] || {}
      preState[action.data.id] = action.data.value
      return { ...state, [field]: preState }
    case CHANGE_TEXT:
      preState = state['dataState'] || {}
      preState[action.data.id] = action.data.value
      return { ...state, currentText: action.data.value, dataState: preState }
    case UPDATE_DATE:
      return { ...state, openedDate: new Date().toJSON() }
    default:
      return state
  }
}
