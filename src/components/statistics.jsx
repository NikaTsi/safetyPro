import React from 'react';
import data from '../data.json';
import { useLanguage } from '../useLanguage';

export default function Statistics() {
  const { language } = useLanguage()
  
  return (
    <section className='flex flex-col w-full text-center bg-[#2f2f2f] rounded-[20px] gap-4 px-4 pt-[18px] pb-[21px] lg:flex-row lg:bg-statistics bg-no-repeat bg-cover lg:pt-[90px] lg:pb-[120px] reg:mb-[10px] lg:mb-[40px] 2xl:gap-[40px] 2xl:px-[80px]'>
      {data.pages.main.cards.map((item, index) => (
        <div className="flex flex-col items-center w-full bg-[#58595B] gap-4 rounded-[20px] px-[17px] pt-[41px] pb-[35px] lg:backdrop-blur-[8px] lg:bg-white-15" key={index} > 
          <span className={`leading-[29px] font-bold text-[#FFF] ${language === "Geo" ? "lg:h-[50px] text-[20px]" : "text-[22px]"}`}>{language === "Geo" ? item.textGeo : item.text}</span>
          <h1 className='text-[41px] text-[#f7941d] font-semibold'>{item.heading}</h1>
          <p className={`font-normal text-[#FFF] ${language === "Geo" ? "text-[16px]" : "text-[18px]"}`}>{language === "Geo" ? item.paragraphGeo : item.paragraph}</p>
        </div>
      ))}
    </section>
  );
}
