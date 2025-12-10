import React from 'react'
import Image from 'next/image'

function NavOne() {
  return (
    <div className='w-full h-7  bg-[#85413F] gap-80 justify-center items-center flex'>
      
      <div className='flex justify-between font-medium inter text-white gap-16 list-none items-center'>
        <li className='underline'>normal</li>
        <li className='underline'>moderen</li>
      </div>

      <div className='flex py-1.5 h-full gap-12 items-center'>

   

     

        <div className=' h-full  flex items-center justify-center'>
          <Image
            src="/assets/tuter.png"
            alt="logo"
            width={0}
            height={0}
          />
        </div>

     
  <div className='h-full  flex items-center justify-center'>
          <Image
            src="/assets/mata.png"
            alt="logo"
            width={0}
            height={0}
          />
        </div>


 <div className='h-full flex items-center justify-center'>
          <Image
            src="/assets/yt.png"
            alt="logo"
            width={0}
            height={0}
          />
        </div>


 <div className='h-full  flex items-center justify-center'>
          <Image
            src="/assets/insta.png"
            alt="logo"
            width={0}
            height={0}
          />
        </div>


      </div>

    </div>
  )
}

export default NavOne
