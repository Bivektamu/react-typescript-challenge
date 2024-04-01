import React, { useEffect } from 'react'
import { CounterProvider, useCounterContext } from '../context'

import { ActionType } from '../context/types'


const Counter = ({ }) => {
    const { state, dispatch } = useCounterContext()
    const { count } = state

    return (

        <div>
            <h1>Counter</h1>
            {count}
            <button type="button" onClick={() => dispatch({ type: ActionType.Increment })}>{ActionType.Increment}</button>
            <button type="button" onClick={() => dispatch({ type: ActionType.Decrement })}>{ActionType.Decrement}</button>
        </div>
    )
}

export default Counter