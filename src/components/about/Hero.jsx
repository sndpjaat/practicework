"use client"
import Link from 'next/link'
import React, { useState } from 'react'

const Hero = () => {
  const [count, setCount] = useState(0)
  const [toggle, setToggle] = useState(false)
  return (
    <div className=' h-screen bg-slate-500 relative flex justify-center items-center'>
      <Link className=' top-0 left-0 absolute' href="/">
        <button className='py-3 px-5 border bg-slate-950 text-white'>go to back</button>
      </Link>
      <div className=' flex flex-col items-center '>
        <p className=' text-5xl'>{count}</p>
        <div className='pt-5 flex gap-5'>
          <button className='py-3 px-5  border bg-slate-950 text-white ' onClick={() => setCount(count - 1)}>minus</button>
          <button className='py-3 px-5  border bg-slate-950 text-white ' onClick={() => setCount(count + 1)}>plus</button>
          <button className='py-3 px-5  border bg-slate-950 text-white ' onClick={() => setCount(count * 2)}>multiply</button>
          <button className='py-3 px-5  border bg-slate-950 text-white ' onClick={() => setCount(count / 2)}>devide</button>
          <button className='py-3 px-5  border bg-slate-950 text-white ' onClick={() => setCount(0)}>reset</button>
        </div>
        <div className=' flex flex-col items-center'>
          <h1 className={`pt-5 text-5xl ${toggle ? " text-black" : "text-red-900"}`}>{toggle ? "jaat" : "sandeep"}</h1>
          <button className={`py-3 px-5 mt-4 border bg-slate-950 text-white ${toggle ? "bg-red-400" : "bg-slate-600"}`} onClick={() => setToggle(!toggle)}>{toggle ?  "click" :"sign"}</button>
    
        </div>
      </div>
    </div>
  )
}

export default Hero