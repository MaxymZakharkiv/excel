import { createStore } from '../core/createStore'
import { describe, it, expect, beforeEach } from 'vitest'

describe('testing createStore', () => {
  let store
  let initialState = {
    count: 0
  }

  const reducer = (state = 0, action) => {
    if (action.type === 'ADD') {
      return { ...state, count: state.count + 1 }
    }
    return state
  }

  beforeEach(() => {
    store = createStore(reducer, initialState)
  })

  it('return store object', () => {
    expect(store).toBeDefined()
    expect(store.dispatch).toBeDefined()
    expect(store.subscribe).toBeDefined()
    expect(store.getState).not.toBeUndefined()
  })
  it('return object as a state', () => {
    expect(store.getState()).toBeInstanceOf(Object)
  })

  it('return default state', () => {
    expect(store.getState()).toEqual(initialState)
  })
  it('change state if actions exists', () => {
    store.dispatch({ type: 'ADD' })
    expect(store.getState().count).toBe(1)
  })
  it('not change state if actions do not exists', () => {
    store.dispatch({ type: 'NOT_EXIST_ACTIONS' })
    expect(store.getState().count).toBe(0)
  })
  it('should dispatch in async way', () => {
    return new Promise(resolve => {
      setTimeout(() => {
        store.dispatch({ type: 'ADD' })
      }, 500)
      setTimeout(() => {
        expect(store.getState().count).toBe(1)
        resolve()
      }, 1000)
    })
  })
})
