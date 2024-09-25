import Link from 'next/link'
import React from 'react'
import BackToTop from '../common/BackToTop'

const Footer = () => {
  return (
 <>
    <div className='relative  h-screen bg-red-50 flex justify-center items-center'>
        <Link className=' top-0 left-0 absolute' href="/about">
        <button className='py-3 px-5 border bg-slate-950 text-white'>back</button>
        </Link>
        Footer</div>
        <BackToTop/>
        </>
  )
}

export default Footer