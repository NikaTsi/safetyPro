import React from 'react'
import { Link } from 'react-router-dom'
import OurServices from '../components/ourServices'
import SeeServices from '../components/buttons/seeServices'
import FreeConsultation from '../components/buttons/freeConsultation'
import data from '../data.json'
import { useLanguage } from '../useLanguage'


function Services() {
  const { language } = useLanguage()

  return (
    <main className={`flex flex-col w-full min-h-screen bg-[#FDFEFF] 4xl:items-center ${language === "Geo" ? "font-Noto" : "font-Inter"}`}>

      <div className='flex flex-col w-full px-[28px] mb-[47px] 4xl:px-0 4xl:w-[1440px]'>
        <OurServices main={true} />

        <section className='flex flex-wrap w-full items-center justify-center gap-y-[35px] gap-x-[42px] mb-[50px] 3xl:gap-y-[65px] 3xl:mb-[74px] 4xl:gap-x-[26px]'>
          {data.pages.services.map((item, index) => (
            <Link to={item.url} key={index}>
              <div className='flex flex-col transform transition-transform duration-300 hover:-translate-y-2 rounded-[28px]'>
                <img className='w-[340px] h-[220px] rounded-[28px]' src={require(`../assets${item.image}`)} alt="" />

                <div className='flex flex-col justify-between h-[80px] w-full mt-[20px]'>
                  <h1 className={`w-[333px] leading-[28px] text-[#101828] font-semibold ${language === "Geo" ? "text-[20px]" : "text-[24px]"}`}>
                    {language === "Geo" ? item.titleGeo : item.title}
                  </h1>
                </div>
              </div>
              
              <SeeServices />
            </Link>

          ))}
        </section>


        <div className='flex w-full justify-center'>
          <FreeConsultation />
        </div>

      </div>

    </main>
  )
}

export default Services