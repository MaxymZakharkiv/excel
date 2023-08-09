import { TABLE_RESIZE } from './const'
export function indexStore(state, action) {
  console.log(action)
  let field
  switch (action.type) {
    case TABLE_RESIZE:
      field = action.data.type === 'col' ? 'colState' : 'rowState'
      const preState = state[field] || {}
      preState[action.data.id] = action.data.value
      return { ...state, [field]: preState }
    default:
      return state
  }
}
