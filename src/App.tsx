// import { ChangeEvent, useState } from 'react'
import './App.css'
import Dots from './components/Dots'
// import Counter from './components/Counter'
// import Input from './components/Input'

function App() {
  // const [count, setCount] = useState<number>(0)
  // const [text, setText] = useState<string>('')
 
  // const updateText = (e:ChangeEvent<HTMLInputElement>) => {
  //   setText(e.target.value)
  // }

  return (
    <>
     {/* <Counter count={count} setCount={setCount} /> */}
     {/* <Input text={text} updateText={(e:ChangeEvent<HTMLInputElement>)=>updateText(e)} /> */}
     <Dots />
    </>
  )
}

export default App
