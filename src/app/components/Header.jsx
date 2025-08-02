import React from 'react'

const Header = () => {
  return (
    <div>
       <section className='mt-10 p-5'>
        <div className="hidden">

        <img className='' src="/Images/2.png" alt="" />
        <img className='' src="/Images/1.png" alt="" />
        </div>

        <div className='grid grid-cols-2 justify-between gap-2 items-center'>
          <div>
            <h1 className='text-2xl font-bold pb-5 '>EVERYTHING FOR YOUR REMOTE MEETINGS ALL IN ONE PLACE</h1>
            <p className='font-extralight'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit
              malesuada vitae varius velit sem. Aliquet sapien vel lacus purus
              sit. At.
            </p>
            <button className='mt-5 bg-sec px-5 py-1 rounded-2xl text-white'>Download The Theme</button>
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