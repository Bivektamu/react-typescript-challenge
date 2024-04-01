import { Action, ActionType, StateType } from "./types"


const reducer = (state: StateType, action: Action) => {
    switch (action.type) {
        case ActionType.Increment:
            return { ...state, count: state.count + 1 }
        case ActionType.Decrement:
            return { ...state, count: state.count - 1 }
        default:
            return state
            break;
    }
}

export default reducer