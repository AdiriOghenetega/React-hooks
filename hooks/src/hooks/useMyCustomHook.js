import { useState } from "react"

const useMyCustomHook = () => {
    const [state,setState]=useState('')
  function handleClick(e){
    e.preventDefault()
    setState(e.target.value)
  }
  return (
    [state,handleClick]
  )
}

export default useMyCustomHook