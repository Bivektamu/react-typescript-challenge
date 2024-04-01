import React from 'react'

interface Props {
    text: string,
    updateText: Function
}

const Input = ({text, updateText}:Props) => {
  return (
    <input type="text" name="" id="" value={text} onChange={e=>updateText(e)} />
  )
}

export default Input