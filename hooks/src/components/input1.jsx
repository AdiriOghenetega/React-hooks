import React from 'react'
import useMyCustomHook from '../hooks/useMyCustomHook'

const Input1 = (props,ref) => {

  const [state,handleClick] = useMyCustomHook()//a custom hook
  
  console.log(state)
  return (
    <div>
      <input type="text" value={state} onChange={handleClick} ref={ref} />
    </div>
  )
}

export default React.forwardRef(Input1)