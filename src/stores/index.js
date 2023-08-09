import { TABLE_RESIZE } from './const'
export function indexStore(state, action) {
  switch (action.type) {
    case TABLE_RESIZE:
      const preState = state.colState || {}
      preState[action.data.id] = action.data.value
      return { ...state, colState: preState }
    default:
      return state
  }
}
