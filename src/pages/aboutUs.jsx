import React from 'react'
import FreeConsultation from '../components/buttons/freeConsultation'
import aboutUsImage from '../assets/aboutUs/aboutUs.svg'
import data from '../data.json'

function AboutUs() {
    return (
        <main className='flex flex-col w-full font-Inter min-h-screen bg-[#F2F2F2]'>

            <div className='w-[182px] h-[31px] ml-[28px] flex relative mt-[29px] lg:w-[553px] lg:h-[72px]'>
                <div className='bg-[#F7941D] w-full h-full relative lg:w-full lg:h-full'></div>
                <h1 className='absolute text-[28px] text-[#323232] font-bold z-10 bottom-[6px] left-[15px] lg:text-[64px] lg:leading-[26px] lg:top-[-5px]'>ABOUT US</h1>
            </div>

            <section className='flex flex-col w-full px-[28px] gap-[50px] mt-[43px] mb-[31px]'>

                <img src={aboutUsImage} alt="" />

                <div className='flex flex-col w-full gap-[20px]'>
                    <h1 className='text-[24px] font-bold leading-[26px] text-[#323232]'>{data.eng.pages['ABOUT US'].sectionOne.title}</h1>
                    <p className='text-[16px] font-regular'>{data.eng.pages['ABOUT US'].sectionOne.paragraph}</p>
                </div>

                <div className='flex flex-col w-full gap-[20px]'>
                    <h1 className='text-[24px] font-bold leading-[26px text-[#323232]'>{data.eng.pages['ABOUT US'].sectionTwo.title}</h1>
                    {data.eng.pages['ABOUT US'].sectionTwo.specialParagraphs.map((item, index) => (
                        <p className='text-[16px] font-regular'><span className='font-bold text-[#f7941d]'>{item}</span>{data.eng.pages['ABOUT US'].sectionTwo.paragraphs[index]}</p>
                    ))}

                </div>

                <div className='flex flex-col w-full gap-[20px]'>
                    <h1 className='text-[24px] font-bold leading-[26px] text-[#323232]'>{data.eng.pages['ABOUT US'].sectionThree.title}</h1>
                    <p className='text-[16px] font-regular'>{data.eng.pages['ABOUT US'].sectionThree.paragraph}</p>
                </div>

                <div className='flex flex-col w-full gap-[20px]'>
                    <h1 className='text-[24px] font-bold leading-[26px] text-[#323232]'>{data.eng.pages['ABOUT US'].sectionFour.title}</h1>
                    <p className='text-[16px] font-regular'>{data.eng.pages['ABOUT US'].sectionFour.paragraph}</p>
                </div>

                <div className='flex flex-col w-full gap-[20px]'>
                    <h1 className='text-[24px] font-bold leading-[26px] text-[#323232]'>{data.eng.pages['ABOUT US'].sectionFive.title}</h1>
                    <p className='text-[16px] font-regular'>{data.eng.pages['ABOUT US'].sectionFive.paragraph}</p>
                </div>

                <div className='flex justify-center'>
                    <FreeConsultation />
                </div>

            </section>

        </main>
    )
}

export default AboutUs