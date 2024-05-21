import React from 'react'
import data from '../data.json'

export default function Partners() {
  return (
    <div className='flex flex-col items-center w-full mt-[63px]'>
      <div className='w-[85%] gap-[9px]'>
        <h1 className='text-[40px] text-[#323232] font-bold'>our partners</h1>
        <h2 className='text-[#757575] font-semibold text-[22px]'>Number of Companies Inspected: <span className='text-[#f7941d]'>250+</span></h2>
      </div>

      <div className='grid grid-cols-2 items-center justify-center gap-x-[30px] gap-y-[25px] mt-[29px] mb-[67px]'>
        {data.pages.main.partners.images.map((item, index) => (
          <div className='flex justify-center items-center'>
            <img src={require(`../assets${item}`)} alt='partners' key={index} />
          </div>
        ))}
      </div>

    </div>
  )
}
