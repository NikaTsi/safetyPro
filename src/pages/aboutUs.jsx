import React from 'react'
import FreeConsultation from '../components/buttons/freeConsultation'
import aboutUsImage from '../assets/aboutUs/aboutUs.svg'
import data from '../data.json'

function AboutUs() {
    return (
        <main className='flex w-full font-Inter min-h-screen bg-[#FDFEFF] 4xl:justify-center'>
            <div className='flex flex-col w-full 4xl:w-[1440px]'>

                <div className='w-[182px] h-[31px] ml-[28px] flex relative mt-[29px] lg:w-[553px] lg:h-[72px] lg:mt-[60px] lg:mb-[76px] 4xl:ml-0'>
                    <div className='bg-[#F7941D] w-full h-full relative lg:w-full lg:h-full'></div>
                    <h1 className='absolute text-[28px] text-[#323232] font-bold z-10 bottom-[6px] left-[15px] lg:text-[64px] lg:leading-[26px] lg:top-[-5px]'>ABOUT US</h1>
                </div>

                <section className='flex relative flex-col w-full px-[28px] gap-[50px] mt-[43px] pb-[31px] lg:mt-0 4xl:bg-[#F2F2F2] 4xl:px-[40px] 4xl:py-[60px] 4xl:rounded-[28px] 4xl:mb-[80px] 4xl:w-[1380px]'>

                    <div className='flex flex-col w-full gap-[50px] tb:flex-row-reverse tb:gap-[20px] md:justify-between 4xl:flex-row'>
                        <img className='tb:w-[280px] md:w-auto 4xl:w-[450px] 4xl:absolute top-[-158px] right-[-60px]' src={aboutUsImage} />

                        <div className='flex flex-col w-full gap-[20px] reg:w-[425px] lg:w-[525px] 4xl:w-[800px]'>
                            <h1 className='text-[24px] font-bold leading-[26px] text-[#323232] lg:text-[36px]'>{data.eng.pages['ABOUT US'].sectionOne.title}</h1>
                            <p className='text-[16px] font-regular lg:text-[20px] lg:leading-[33px]'>{data.eng.pages['ABOUT US'].sectionOne.paragraph}</p>
                        </div>
                    </div>

                    <div className='flex flex-col w-full gap-[20px] lg:gap-[25px]'>
                        <h1 className='text-[24px] font-bold leading-[26px] text-[#323232] lg:text-[36px]'>{data.eng.pages['ABOUT US'].sectionTwo.title}</h1>
                        {data.eng.pages['ABOUT US'].sectionTwo.specialParagraphs.map((item, index) => (
                            <p className='text-[16px] font-regular lg:text-[20px] lg:leading-[28px]'><span className='font-bold text-[#f7941d]'>{item}</span>{data.eng.pages['ABOUT US'].sectionTwo.paragraphs[index]}</p>
                        ))}

                    </div>

                    <div className='flex flex-col w-full gap-[20px] lg:gap-[25px]'>
                        <h1 className='text-[24px] font-bold leading-[26px] text-[#323232] lg:text-[36px]'>{data.eng.pages['ABOUT US'].sectionThree.title}</h1>
                        <p className='text-[16px] font-regular lg:text-[20px] lg:leading-[34px]'>{data.eng.pages['ABOUT US'].sectionThree.paragraph}</p>
                    </div>

                    <div className='flex flex-col w-full gap-[20px] lg:gap-[25px]'>
                        <h1 className='text-[24px] font-bold leading-[26px] text-[#323232] lg:text-[36px]'>{data.eng.pages['ABOUT US'].sectionFour.title}</h1>
                        <p className='text-[16px] font-regular lg:text-[20px] lg:leading-[34px]'>{data.eng.pages['ABOUT US'].sectionFour.paragraph}</p>
                    </div>

                    <div className='flex flex-col w-full gap-[20px] lg:gap-[25px]'>
                        <h1 className='text-[24px] font-bold leading-[26px] text-[#323232] lg:text-[36px]'>{data.eng.pages['ABOUT US'].sectionFive.title}</h1>
                        <p className='text-[16px] font-regular lg:text-[20px]'>{data.eng.pages['ABOUT US'].sectionFive.paragraph}</p>
                    </div>

                    <div className='flex justify-center lg:justify-start'>
                        <FreeConsultation />
                    </div>

                </section>

            </div>
        </main>
    )
}

export default AboutUs