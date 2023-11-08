import React from 'react'

const Header3 = () => {
  return (
    <div className=' bg-gradient-to-r from-red-600 to-red-500 h-60 '>
      <div className=" p-5">
      <h2 className=" text-4xl text-white text-center font-bold">
          Over 157,000 hotels and homes across 35 countries
        </h2>
        <div className="flex justify-center my-5 mx-20 ">
          <input
            type="text"
            placeholder="Search..."
            className=" w-6/12  h-16 outline-none px-3 text-lg border-r-2 border-gray-400 "
            // onChange={(e) => {
            //   setCity(e.target.value);
            // }}
          />
           <input
            type="date"
            placeholder="Search..."
            className="  h-16 outline-none px-3 text-lg border-r-2 border-gray-400 col-span-1"
          />
          <input
            type="date"
            placeholder="Search..."
            className=" h-16 outline-none px-3 text-lg col-span-1"
          />
      </div>
    </div>
    </div>
  )
}

export default Header3;
