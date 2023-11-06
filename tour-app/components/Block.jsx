import Image from 'next/image'
import React from 'react'

const Block = ({title,para}) => {
  return (
    <div className=' border-r border-gray-300 w-60 h-full flex items-center px-3'>
    <Image
    src={"/demo.svg"}
    alt='demo'
    height={200}
    width={200}
    className=' h-10 w-10 rounded-full mr-5 '
    />
    <div>
        <h3 className='font-bold'>{title}</h3>
        <p className=' text-gray-400 text-xs line-clamp-1 '>{para}</p>

    </div>
      
    </div>
  )
}

export default Block
