import React from 'react'
import data from '../data.json'
import { useLanguage } from '../useLanguage'

export default function Partners() {
  const { language } = useLanguage()

  return (
    <div className='flex flex-col items-center w-full mt-[63px] tb:items-start'>
      
      <div className='w-[85%] gap-[9px]'>
        <h1 className='text-[40px] text-[#323232] font-bold lg:text-[48px]'>{language === "Geo" ? "ჩვენი პარტნიორები" : "our partners"}</h1>
        <h2 className='text-[#757575] font-semibold text-[22px]'>{language === "Geo" ? "გამოკვლეული კომპანიების რიცხვი" : "Number of Companies Inspected"}: <span className='text-[#f7941d]'>250+</span></h2>
      </div>

      <div className='grid grid-cols-2 items-center justify-center gap-x-[30px] gap-y-[25px] mt-[29px] mb-[67px] sm:flex w-full sm:flex-wrap lg:mt-[20px] lg:mb-[44px]'>
        {data.pages.main.partners.images.map((item, index) => (
          <div className='flex justify-center items-center mix-blend-multiply' key={index}>
            <img src={require(`../assets${item}`)} alt='partners' key={index} />
          </div>
        ))}
      </div>

    </div>
  )
}
