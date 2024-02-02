export type ActionType = {
    type: string
}
export type StateType = {
    collapsed: boolean
}
export const TOGGLE_CONSTANT = 'TOGGLE_COLAPSED'

export const reducer = (state: StateType, action: ActionType): StateType => {
    switch (action.type) {
        case TOGGLE_CONSTANT:

            const stateCopy = {
                ...state,
                collapsed: !state.collapsed
            }
            // stateCopy.collapsed = !state.collapsed
            return stateCopy
        default:
            throw new Error('bad action type')
    }
}
