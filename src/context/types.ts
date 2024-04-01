import { Dispatch, ReactNode } from "react"

export enum ActionType {
    Increment = 'Increment',
    Decrement = 'Decrement'
}
export type Action = {
    type: ActionType
}
export type ContextType = {
    state: StateType,
    dispatch: Dispatch<Action>
}
export type ProviderProps = {
    children: ReactNode
}
export type StateType = {
    count: number
}

