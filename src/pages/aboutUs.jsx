import React from 'react'
import FreeConsultation from '../components/buttons/freeConsultation'
import aboutUsImage from '../assets/aboutUs/aboutUs.png'
import data from '../data.json'
import { useLanguage } from '../useLanguage'

function AboutUs() {
    const { language } = useLanguage()

    return (
        <main className={`flex w-full min-h-screen bg-[#FDFEFF] 4xl:justify-center ${language === "Geo" ? "font-Noto" : "font-Inter"}`}>
            <div className='flex flex-col w-full 4xl:w-[1440px]'>

                <div className={`w-[182px] h-[31px] ml-[28px] flex relative mt-[29px] lg:w-[553px] lg:h-[72px] lg:mt-[60px] lg:mb-[76px] 4xl:ml-0 ${language === "Geo" ? "w-[240px]" : ""} `}>
                    <div className='bg-[#F7941D] w-full h-full relative lg:w-full lg:h-full'></div>
                    <h1 className={`absolute text-[28px] text-[#323232] font-bold z-10 bottom-[6px] left-[15px] lg:text-[64px] lg:leading-[26px] lg:top-[-5px] ${language ==="Geo" ? "text-[15px] " : ''} `}>{language === "Geo" ? "ჩვენს შესახებ" : "ABOUT US"}</h1>
                </div>

                <section className='flex relative flex-col w-full px-[28px] gap-[50px] mt-[43px] pb-[31px] lg:mt-0 4xl:bg-[#F2F2F2] 4xl:px-[40px] 4xl:py-[60px] 4xl:rounded-[28px] 4xl:mb-[80px] 4xl:w-[1380px]'>

                    <div className='flex flex-col w-full gap-[50px] tb:flex-row-reverse tb:items-center tb:gap-[20px] md:justify-between 4xl:flex-row'>
                        <img className='w-full rounded-[28px] tb:w-[50%] reg:w-[40%] 4xl:w-[450px] 4xl:absolute top-[-126px] right-[-60px]' src={aboutUsImage} />

                        <div className='flex flex-col w-full gap-[20px] reg:w-[425px] lg:w-[525px] 4xl:w-[800px] '>
                            <h1 className='text-[24px] font-bold leading-[26px] text-[#323232] lg:text-[36px]'>{language === "Geo" ? data.pages.aboutUs.sectionOneGeo.title : data.pages.aboutUs.sectionOne.title}</h1>
                            <p className='text-[16px] font-regular lg:text-[20px] lg:leading-[33px]'>{language === "Geo" ? data.pages.aboutUs.sectionOneGeo.paragraph : data.pages.aboutUs.sectionOne.paragraph}</p>
                        </div>
                    </div>

                    <div className='flex flex-col w-full gap-[20px] lg:gap-[25px]'>
                        <h1 className='text-[24px] font-bold leading-[26px] text-[#323232] lg:text-[36px]'>{language === "Geo" ? data.pages.aboutUs.sectionTwoGeo.title : data.pages.aboutUs.sectionTwo.title}</h1>
                        {language === "Geo" ?
                            <>
                                {
                                    data.pages.aboutUs.sectionTwoGeo.paragraphs.map((item, index) => (
                                        <p key={index} className='text-[16px] font-regular ml-[15p] lg:text-[20px] lg:leading-[28px]'><span className='lg:mr-[15px]'>{index + 1}. </span>{item}</p>
                                    ))
                                }
                            </>
                            :
                            <>
                                {
                                    data.pages.aboutUs.sectionTwo.specialParagraphs.map((item, index) => (
                                        <p key={index} className='text-[16px] font-regular lg:text-[20px] lg:leading-[28px]'><span className='font-bold text-[#f7941d]'>{item}</span>{data.pages.aboutUs.sectionTwo.paragraphs[index]}</p>
                                    ))
                                }
                            </>
                        }
                    </div>


                    <div className='flex flex-col w-full gap-[20px] lg:gap-[25px]'>
                        <h1 className='text-[24px] font-bold leading-[26px] text-[#323232] lg:text-[36px]'>{language === "Geo" ? data.pages.aboutUs.sectionThreeGeo.title : data.pages.aboutUs.sectionThree.title}</h1>
                        <p className='text-[16px] font-regular lg:text-[20px] lg:leading-[34px]'>{language === "Geo" ? data.pages.aboutUs.sectionThreeGeo.paragraph : data.pages.aboutUs.sectionThree.paragraph}</p>
                    </div>

                    <div className='flex flex-col w-full gap-[20px] lg:gap-[25px]'>
                        <h1 className='text-[24px] font-bold leading-[26px] text-[#323232] lg:text-[36px]'>{language === "Geo" ? data.pages.aboutUs.sectionFourGeo.title : data.pages.aboutUs.sectionFour.title}</h1>
                        <p className='text-[16px] font-regular lg:text-[20px] lg:leading-[34px]'>{language === "Geo" ? data.pages.aboutUs.sectionFourGeo.paragraph : data.pages.aboutUs.sectionFour.paragraph}</p>
                    </div>

                    <div className='flex flex-col w-full gap-[20px] lg:gap-[25px]'>
                        <h1 className='text-[24px] font-bold leading-[26px] text-[#323232] lg:text-[36px]'>{language === "Geo" ? data.pages.aboutUs.sectionFiveGeo.title : data.pages.aboutUs.sectionFive.title}</h1>
                        <p className='text-[16px] font-regular lg:text-[20px]'>{language === "Geo" ? data.pages.aboutUs.sectionFiveGeo.paragraph : data.pages.aboutUs.sectionFive.paragraph}</p>
                    </div>

                    <div className='flex justify-center lg:justify-start'>
                        <FreeConsultation language={language} />
                    </div>

                </section>

            </div>
        </main>
    )
}

export default AboutUs