import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/header'
import Footer from '../components/footer'
import OurServices from '../components/ourServices'
import SeeServices from '../components/buttons/seeServices'
import FreeConsultation from '../components/buttons/freeConsultation'
import data from '../data.json'

function Services() {


  return (
    <main className='flex font-Inter flex-col w-full min-h-screen'>
      <Header />

      <div className='flex flex-col w-full px-[28px] mb-[47px]'>
        <OurServices main={true} />

        <section className='flex flex-wrap w-full items-center justify-center gap-y-[35px] gap-x-[42px] mb-[50px] 3xl:gap-y-[65px] 3xl:mb-[74px]'>
          {data.eng.pages.services.map((item, index) => (
            <div className='flex flex-col' key={index}>
              <img className='w-[340px]' src={require(`../assets${item.image}`)} />

              <div className='flex flex-col justify-between h-[100px] w-full mt-[20px]'>
                <h1 className='w-[333px] text-[23px] leading-[27px] text-[#101828] font-semibold 3xl:text-[24px] 3xl:leading-[28px]'>{item.title}</h1>
                <Link to={item.url}>
                  <SeeServices/>
                </Link>
              </div>

            </div>
          ))}
        </section>

        <div className='flex w-full justify-center'>
          <FreeConsultation />
        </div>

      </div>

      <Footer />
    </main>
  )
}

export default Services