import { useState,useRef } from 'react'
import Input1 from './components/input1'
import Input2 from './components/input2'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const myRef = useRef()
  const myRef2 = useRef()

  return (
    <div className="App">
      <Input1 ref={myRef} />
      <button onClick={()=>myRef.current.focus()}>focus</button>
      <Input2 ref={myRef2} />
      <button onClick={()=>myRef2.current.focusInput()}>focus input</button>
      <button onClick={()=>myRef2.current.focusEnter()}>focus enter</button>
      <button onClick={()=>myRef2.current.focusCancel()}>focus cancel</button>
    </div>
  )
}

export default App
