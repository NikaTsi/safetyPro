import React from 'react'

export default function Ourservices({ main }) {
  return (
    <div className={`w-[241px] h-[31.5px] flex relative mt-[29px] ml-[9px] lg:w-[553px] lg:h-[72px] lg:mt-[60px] lg:mb-[76px] 4xl:ml-0 ${main ? "mb-[32px]" : "mb-[56px]"}`}>

      <div className='bg-green-500 bg-opacity-60 w-full h-full relative lg:w-full lg:h-full'></div>
      <h1 className='absolute text-[28px] text-[#323232] font-bold z-10 bottom-[10.3px] left-[15px] lg:text-[64px] lg:leading-[26px] lg:top-[-5px]'>OUR SERVICES</h1>

    </div>
  )
}
