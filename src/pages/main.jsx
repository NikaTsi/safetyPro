import React, { useState, useEffect } from 'react';
import ContactUs from '../components/buttons/contactUs';
import Consultation from '../components/buttons/freeConsultation';
import SeeServices from '../components/buttons/seeServices';
import helmet from '../assets/main/helmet.svg';
import Cards from '../components/cards';
import data from '../data.json';
import Partners from '../components/partners';
import Statistics from '../components/statistics';

function Main() {

    return (
        <main className='flex flex-col min-h-screen w-full font-Inter bg-[#FDFEFF]'>

                    <div className='flex flex-col w-full items-center px-[28px]'>
                        <div className='flex relative flex-col w-full items-start pt-[55px] pl-[43px] pb-[30px] gap-[50px] rounded-[20px] bg-background-tint bg-background1-mobile bg-no-repeat bg-cover 3xl:bg-background1-desktop'>
                            <div className='absolute bg-[#D9D9D9] opacity-80 top-[44px] left-[28px] w-[71px] h-[1px]'></div>
                            <div className='absolute bg-[#F7941D] top-[75px] left-[28px] w-[242px] h-[32px] '></div>
                            <h1 className='text-[28px] font-bold leading-[35px] text-[#FFFF] z-10 tracking-[-1px]'>PROTECT YOUR <br /> TOMORROW TODAY</h1>
                            <div className='pl-[35px]'>
                                <ContactUs width={"w-[172px]"} />
                            </div>
                        </div>

                        <div className='flex flex-col w-full mt-[34px] mb-[8px] '>
                            <div>
                                <h1 className='font-bold text-[28px] text-[#323232]'>about us</h1>
                                <p className='font-medium text-[12px] text-[#323232] mt-[11px] mb-[13px]'>{data.eng.pages['ABOUT US'].sectionOne.paragraph}</p>
                                <SeeServices />
                            </div>

                            <img className='bg-fixed' src={helmet} />
                        </div>

                        <section className='flex flex-col items-center gap-[52px] bg-[#323232] rounded-[20px] px-[17px] py-[33px] pb-[39px]'>
                            <Cards />
                            <Consultation wide={true} />
                        </section>

                        <Partners />
                        <Statistics />

                        <div className='w-full mt-[82px] mb-[38px] flex flex-col gap-[63px]'>
                            <div className='relative'>
                                <div className='bg-[#07c870] w-[95%] h-[49px]'></div>
                                <h1 className='absolute text-[#323232] text-[40px] font-bold leading-[47px] ml-[6px] w-[30px] top-[-25px]'>{data.eng.pages.main.section.title[0]}</h1>
                                <p className='text-[#323232] text-[20px] font-regular mt-[40px]'>{data.eng.pages.main.section.paragraph[0]}</p>
                            </div>

                            <div className='hidden'></div>

                            <div className='relative'>
                                <div className='bg-[#f7941d] w-[95%] h-[49px]'></div>
                                <h1 className='absolute text-[#323232] text-[40px] font-bold leading-[47px] ml-[6px] w-[30px] top-[-25px]'>{data.eng.pages.main.section.title[1]}</h1>
                                <p className='text-[#323232] text-[20px] font-regular mt-[40px]'>{data.eng.pages.main.section.paragraph[1]}</p>
                            </div>
                        </div>

                        <div className='flex h-[400px] flex-col w-full mb-[68px] bg-background2-mobile bg-background-tint bg-no-repeat bg-cover rounded-[20px] items-center justify-around '>
                            <h1 className='text-[37px] font-bold text-[#fff] opacity-90 leading-[50px] ml-[24px]'>PROTECT YOUR TOMMOROW  <span className='text-[#f7941d]'>TODAY</span></h1>
                            <Consultation wide={true} />
                        </div>

                    </div>

        </main>
    );
}

export default Main;
