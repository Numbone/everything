import React, { useState } from 'react'
import classes from  './styles.module.scss'
const Counter = () => {
  const [count,setCount]=useState(0)
  return (
    <>
    <div>{count}</div>
    <div className='btn' onClick={()=>setCount(count+1)}>increment</div>
    <div className='btn' onClick={()=>setCount(count-1)}>decrement</div>
    </>
  )
}

export default Counter