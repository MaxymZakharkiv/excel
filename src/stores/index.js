import { TABLE_RESIZE, CHANGE_TEXT } from './const'
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
      // console.log(action.data)
      preState = state['dataState'] || {}
      preState[action.data.id] = action.data.value
      return { ...state, currentText: action.data.value, dataState: preState }
    default:
      return state
  }
}
