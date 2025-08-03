import React from 'react'

const Header = () => {
  return (
    <div className='max-w-[1200px] mx-auto'>
       <section className='mt-10 p-5'>
        <div className="hidden">

        <img className='' src="/Images/2.png" alt="" />
        <img className='' src="/Images/1.png" alt="" />
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 justify-between gap-5 md:gap-2 lg:gap-3 '>
          <div>
            <h1 className='text-2xl lg:text-4xl font-bold pb-5 lg:pb-10'>EVERYTHING FOR YOUR REMOTE MEETINGS ALL IN ONE PLACE</h1>
            <p className='font-extralight lg:pb-10'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit
              malesuada vitae varius velit sem. Aliquet sapien vel lacus purus
              sit. At.
            </p>
            <button className='mt-5 bg-sec px-5 py-1 lg:px-10 lg:py-5 rounded-2xl text-white'>Download The Theme</button>
          </div>

          <div>
            <img src="/Images/banner.jpg" alt="Banner" />
          </div>
        </div>
      </section>
    </div>
  )
}

export default Header