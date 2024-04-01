import { createContext, useContext, useReducer } from "react";
import { ContextType, ProviderProps, StateType } from "./types";
import reducer from "./reducer";


const CounterContext = createContext({} as ContextType)

export const useCounterContext = () => useContext(CounterContext)


export const CounterProvider = ({ children }: ProviderProps) => {
    const initState:StateType = {
        count:0
    }

    const [state, dispatch] = useReducer(reducer,initState)

    return (
        <CounterContext.Provider value={{state, dispatch}}>
            {children}
        </CounterContext.Provider>
    )
}