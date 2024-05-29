import React from 'react'
import { useLanguage } from '../../useLanguage'

export default function SeeServices() {
 const { language } = useLanguage()

  return (
    <button className='flex relative items-center justify-center py-[2px] gap-[7px] px-[8px] w-[130px] rounded-md border border-[##d0d5dd] text-[##344054] text-[14px] leading-[20px] font-medium group shadow-button'>
      <div className='w-[6px] h-[6px] rounded-full bg-[#f7941d] transition-colors duration-300 group-hover:bg-[#07c870]'></div>{language === "Geo" ? "ნახე სერვისი" : "See services"}</button>
  )
}
