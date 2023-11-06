import React from 'react'
import Image from 'next/image'

const Header1 = () => {
  return (
    <div className='flex h-20 px-10'>
      <Image src={"/logo.png"} alt='logo' height={200} width={200} className='w-28 h-28'/>
    </div>
  )
}

export default Header1
