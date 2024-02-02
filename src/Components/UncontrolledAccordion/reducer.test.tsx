import { StateType, TOGGLE_CONSTANT, reducer } from "./reducer"

test('collapsed should be true', () => {
    //data

    const state: StateType = {
        collapsed: false
    }

    //action
    const newState = reducer(state, { type: TOGGLE_CONSTANT })

    //axpection
    expect(newState.collapsed).toBe(true)
})

test('collapsed should be false', () => {
    //data

    const state: StateType = {
        collapsed: true
    }

    //action
    const newState = reducer(state, { type: TOGGLE_CONSTANT })

    //axpection
    expect(newState.collapsed).toBe(false)
})

test('collapsed should be Error', () => {

    const state: StateType = {
        collapsed: true
    }

    expect(() => {
        reducer(state, { type: 'FAKETYPE' })
    }).toThrowError()
})