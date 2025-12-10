import React from 'react'
import Image from 'next/image'
const NavTwo = () => {
  return (
    <div className='w-full  px-12 flex justify-between h-20'>
     <div className='w-96 h-full'>
  <Image className='obejct-cover'
                 src="/assets/logo.png"
                 alt="logo"
                 width={1000}
                 height={1000}
               />

     </div>


<div className='flex items-center gap-16  justify-between'>
  

  <div className='w-48 '>
  <Image
                 src="/assets/ad.png"
                 alt="logo"
                 width={1000}
                 height={100}
               />

     </div>

 <div className='w-16 '>
  <Image
                 src="/assets/n1.png"
                 alt="logo"
                 width={1000}
                 height={100}
               />

     </div>


</div>


      
    </div>
  )
}

export default NavTwo
