/* eslint-disable no-unused-vars */
import React from 'react'

const Navbar = () => {
  return (
    <div className=' flex justify-between items-center my-10 max-w-[1500px] px-10 mx-auto'>
      <h1 className=' text-4xl'>TeamMate</h1>
      <ul className=' flex justify-center items-center gap-10'>
        <li className=' text-xl font-medium'>Home</li>
        <li className=' text-xl font-medium'>Players</li>
        <li className=' text-xl font-medium'>Teams</li>
      </ul>
    </div>
  )
}

export default Navbar
