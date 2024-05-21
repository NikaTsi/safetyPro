import React from 'react'
import { Link } from 'react-router-dom'
import OurServices from '../components/ourServices'
import SeeServices from '../components/buttons/seeServices'
import FreeConsultation from '../components/buttons/freeConsultation'
import data from '../data.json'


function Services() {

  const LazyLoadedImage = ({ src, alt }) => {
    return <img src={src} alt={alt} loading="lazy" />;
  };

  return (
    <main className='flex font-Inter flex-col w-full min-h-screen bg-[#FDFEFF] 4xl:items-center'>

      <div className='flex flex-col w-full px-[28px] mb-[47px] 4xl:px-0 4xl:w-[1440px]'>
        <OurServices main={true} />

        <section className='flex flex-wrap w-full items-center justify-center gap-y-[35px] gap-x-[42px] mb-[50px] 3xl:gap-y-[65px] 3xl:mb-[74px] 4xl:gap-x-[26px]'>
          {data.pages.services.map((item, index) => (
            <div className='flex flex-col' key={index}>
              <img className='w-[340px] h-[220px] rounded-[28px]' src={require(`../assets${item.image}`)} alt="" />

              <div className='flex flex-col justify-between h-[100px] w-full mt-[20px]'>
                <h1 className='w-[333px] text-[23px] leading-[27px] text-[#101828] font-semibold 3xl:text-[24px] 3xl:leading-[28px]'>{item.title}</h1>
                <Link className='w-[116px]' to={item.url}>
                  <SeeServices />
                </Link>
              </div>

            </div>
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