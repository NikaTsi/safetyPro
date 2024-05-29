import React from 'react'
import { useLanguage } from '../useLanguage'

export default function Ourservices({ main }) {
  const { language } = useLanguage()

  return (
    <div className={`w-[241px] h-[31.5px] flex relative mt-[29px] lg:w-[553px] lg:h-[72px] lg:mt-[60px] lg:mb-[76px] ${main ? "mb-[32px]" : "mb-[56px]"} ${language ==='Geo' ? "lg:w-[600px] w-[280px]" : ''}`}>
      <div className='bg-[#07C870] bg-opacity-60 w-full h-full relative lg:w-full lg:h-full'></div>
      <h1 className={`absolute text-[28px] text-[#323232] font-bold z-10 bottom-[10.3px] left-[15px] lg:text-[64px] lg:leading-[26px] lg:top-[-5px] ${language ==="Geo" ? "lg:text-[40px]" : ""} `}>{language === "Geo" ? "ჩვენი სერვისები" : "OUR SERVICES"}</h1>
    </div>
  )
}
