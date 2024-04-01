import React, { ChangeEvent, MouseEvent, MouseEventHandler, useEffect, useState } from 'react'

interface Dot {
    x: number,
    y: number
}
interface State {
    dots: Dot[],
    deleted: Dot[],
    undo: number,
}
const initState: State = {
    dots: [],
    deleted: [],
    undo: 0,
}
const Dots = () => {
    const [dotState, setDotState] = useState(initState)

    const addDot = (e: MouseEvent<HTMLDivElement>) => {
        const newDot: Dot = { x: e.clientX, y: e.clientY }
        setDotState(prev => ({
            ...prev,
            dots: [...dotState.dots, newDot],
            undo: dotState.undo + 1,
        })
        )
    }

    const undoClicked = (e: MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation()
        const dots = [...dotState.dots]
        const deletedDot = dots[dots.length - 1]
        dots.pop()
        setDotState((prev) => ({
            ...prev,
            dots,
            deleted: [...prev.deleted, deletedDot],
            undo: dotState.undo - 1,
        })
        )
    }
    const redoClicked = (e: MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation()
        const deletedDots = [...dotState.deleted]
        const deletedDot = deletedDots[deletedDots.length - 1]
        deletedDots.pop()
        console.log(deletedDots)
        console.log(deletedDot)
        setDotState((prev) => ({
            ...prev,
            dots: [...prev.dots, deletedDot],
            deleted: deletedDots,
            undo: dotState.undo + 1,
        })
        )
    }
    useEffect(() => {
        console.log(dotState)
    }, [dotState])
    const { dots, deleted } = dotState
    return (
        <div className='container' onClick={addDot}>
            {dots.length > 0 && <button type="button" onClick={undoClicked}>Undo</button>}
            {deleted.length > 0 && <button type="button" onClick={redoClicked}>Redo</button>}

            {dots.length > 0 &&
                <>
                    {dots.map((dot, i) =>
                        <span className='dot' key={i} style={{ top: dot.y - 5 + 'px', left: dot.x - 5 + 'px' }}></span>
                    )}
                </>
            }
        </div>
    )
}

export default Dots