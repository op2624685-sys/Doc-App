import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='fixed top-0 left-0 z-[50] w-full py-7 flex flex-row-reverse text-white font-semibold py-5 px-8 text-xl bg-black/30 backdrop-blur-sm'>
        <div className='flex gap-10'>
        <Link to='Doc-App'className='bg-black/30 px-4 py-2 rounded-md'>Home</Link>
        <Link to='Doc-App/edit'className='bg-black/30 px-4 py-2 rounded-md'>Edit</Link>
        <Link to='Doc-App/create'className='bg-black/30 px-4 py-2 rounded-md' >Add Docs.</Link>
        </div>
    </div>
  )
}

export default Navbar
