import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import FAQs from '../assets/faqs/FAQS.png'
import data from '../data.json'
import { useLanguage } from '../useLanguage'
import '../styles.css'

export default function Faqs() {
  const { language } = useLanguage()
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <main className={`flex flex-col w-full min-h-screen px-[28px] bg-[#FDFEFF] ${language === "Geo" ? "font-Noto" : "font-Inter"}`}>
      <div className='flex flex-col lg:items-center'>

        <div className='flex flex-col w-full tb:flex-row lg:mt-[60px] 4xl:w-[1440px] tb:mb-[20px]'>

          <div className='flex flex-col w-full items-start'>

            <div className={`w-[128px] h-[31.5px] border flex relative mb-[20px] mt-[27px] lg:mt-0 lg:w-[205px] lg:h-[72px] ${language === "Geo" ? "w-[200px] lg:w-[450px]" : ""}`}>
              <div className={`bg-[#07C870] w-full h-full relative`}></div>
              <h1 className='absolute text-[28px] font-bold z-10 bottom-[7.3px] left-[15px] lg:text-[67px] lg:leading-[26px] lg:-top-[5px]'>{language === "Geo" ? "დახმარება" : "FAQs"}</h1>
            </div>

            <h1 className={`text-[24px] font-bold text-[#101828] leading-[36px] lg:text-[48px] lg:leading-[60px] ${language === "Geo" ? "lg:text-[28px] 2xl:text-[33px] 4xl:text-[38px] tb:mb-[12px] lg:mb-[24px]" : ""}  `} >{language === "Geo" ? "ჩვენ აქ ვართ რომ დაგეხმაროთ" : "We’re here to help"}</h1>
            <p className='text-[12px] leading-[30px] text-[#475467] font-regular tb:text-[15px] mt:text-[18px] lg:text-[20px]'>{language === "Geo" ? "კითხვები გაქვთ? ჩვენ დაგეხმარებით." : "Have questions? We’re here to help."}</p>

            <div className='flex w-full justify-center mt-[32px] sm:justify-start'>
              <Link to={'/contact'}>
                <button className='bg-[#f7941d] w-[172px] h-[44px] rounded-[8px] text-[#fff] text-[16px] leading-[24px] hover:bg-[#323232] font-semibold duration-300 ease-in-out active:opacity-90'>{language === "Geo" ? "დავიწყოთ" : "Get started"}</button>
              </Link>
            </div>
          </div>

          <div className='flex w-full justify-center mt-[40px] mb-[11px] tb:m-0 reg:justify-end'>
            <img className='reg:w-[392px] 2xl:w-[462px]' src={FAQs} alt="FAQs image" />
          </div>

        </div>

        <div className='flex flex-col w-full gap-[11px] mb-[28px] items-start lg:gap-[25px] 4xl:w-[1440px]'>
          <h1 className='text-[24px] font-semibold leading-[44px] text-[#f7941d] lg:text-[36px] lg:leading-[44px]'>{language === "Geo" ? "ხშირად დასმული კითხვები" : "Frequently asked questions"}</h1>
          <p className='text-[14px] text-regular text-[#475467] lg:text-[20px] lg:leading-[30px]'>{language === "Geo" ? "ყველა საჭირო ინფორმაცია სერვისის შესახებ" : "Everything you need to know about service."}</p>
        </div>

        <div className='flex flex-col w-full gap-[47px] mt-[30px] 3xl:gap-[24px] 4xl:w-[1440px]'>
              {data.pages.FAQs.info.map((item, index) => (
                <div className={`flex relative flex-col w-full gap-[8px]  ${index !== 5 && "3xl:border-b-2 3xl:pb-[32px] 3xl:border-[#f9fafb]"}`} key={index}>

                  <div className='flex w-full gap-[10px] justify-between items-start'>
                    <h1 className='text-[18px] font-semibold leading-[27px] text-[#323232]'>{language === "Geo" ? item.titleGeo : item.title}</h1>
                    <div className={`flex relative font-Inter justify-center items-center border-[2px] rounded-[50%] min-w-[24px] h-[24px] pb-[2px] font-bold text-[20px] hover:cursor-pointer hover:opacity-80 z-[10]  ${activeIndex === index ? 'border-[#F7941D] text-[#F7941D]' : 'border-[#58595b] text-[#58595b]'}`} onClick={() => handleClick(index)}>{activeIndex === index ? '-' : '+'}</div>
                  </div>

                  <div>
                    <span className={`w-[100%] text-[#323232] text-[16px] font-regular -z-50 ${activeIndex === index ? "open" : "close invisible"}`}>{language === "Geo" ? item.paragraphGeo : item.paragraph}</span>
                  </div>

                </div>
              ))}
        </div>


        <div className='flex w-full mt-[47px] mb-[72px] gap-[32px] items-center flex-col bg-[#f7941d] pt-[32px] pb-[40px] px-[32px] rounded-[16px] lg:mt-[100px] lg:mb-[90px] 4xl:w-[1440px]'>
          <div className='flex flex-col gap-[8px]'>
            <h1 className='text-[20px] text-center leading-[30px] text-[#f2f2f2] font-bold'>{language === "Geo" ? "კვლავ გაქვთ კითხვები?" : "Still have questions?"}</h1>
            <p className={`text-[15px] text-center font-regular text-[#f2f2f2] reg:text-[18px] lg:text-[18px] ${language ==="Geo" ? "lg:max-w-[550px]" : ""}`}>{language === "Geo" ? "ვერ პულობთ თქვენს კითხვაზე პასუხს? მოგვწერეთ და ჩვენი მეგობრული გუნდი დაგეხმარებათ." : "Can’t find the answer you’re looking for? Please chat to our friendly team."}</p>
          </div>
          <Link to={'/contact'}>
            <button className='bg-[#f2f2f2] w-[172px] h-[44px] rounded-[8px] text-[#f7941d] text-[16px] leading-[24px] font-semibold hover:bg-[#323232] hover:text-[#FFF] duration-300 ease-in-out active:opacity-90'>{language === "Geo" ? "დაგვიკავშირდით" : "Get in touch"}</button>
          </Link>

        </div>

      </div>
    </main>
  )
}
