"use client"
import React from 'react'

const Navbar = () => {
  return (
    <div>
            <div className="flex justify-between px-5 py-2 items-center ">
                <img src="./Images/logo.png" alt="" />
                <div className="">
                    <ul className='hidden md:flex sm:flex lg:flex gap-5 '>
                        <li>Home</li>
                        <li>About </li>
                        <li>Contact</li>
                        <li>Servie</li>
                    </ul>
                </div>
                <button className='bg-sec rounded-2xl text-white px-4 text-sm font-medium py-1'>
                    Sign Up 
                </button>
            </div>
    </div>
  )
}

export default Navbar