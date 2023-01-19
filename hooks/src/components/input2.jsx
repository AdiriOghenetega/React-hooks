import React,{useImperativeHandle,useRef} from 'react'
import useMyCustomHook from '../hooks/useMyCustomHook'

const Input2 = (props,ref) => {

  const [state,handleClick] = useMyCustomHook()//a custom hook

  const cancelRef = useRef()
  const inputRef = useRef()
  const enterRef = useRef()

  useImperativeHandle(ref,()=>{
    return {
        focusInput : ()=> inputRef.current.focus(),
        focusCancel : ()=> cancelRef.current.focus(),
        focusEnter : ()=> enterRef.current.focus(),
    }
  },[])
  
  console.log(state)
  return (
    <div>
      <input type="text" value={state} onChange={handleClick} ref={inputRef} />
      <button ref={enterRef} style={{}} >focus enter</button>
      <button ref={cancelRef} >focus cancel</button>
    </div>
  )
}

export default React.forwardRef(Input2)