import React from 'react'
import { Avatar } from './BlogCard'

const AppBar = () => {
  return (
    <div className='border-b border-slate-300 flex justify-between px-10 w-full py-4'>
        <div className='font-bold text-slate-600 flex flex-col justify-center'>
            Blog App
        </div>
        <div>
            <Avatar name={"S"} size={10} />
        </div>
    </div>
  )
}

export default AppBar