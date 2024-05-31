import React from 'react';
import { Link } from 'react-router-dom';
import ContactUs from '../components/buttons/contactUs';
import Consultation from '../components/buttons/freeConsultation';
import helmet from '../assets/main/helmet.png';
import Cards from '../components/cards';
import data from '../data.json';
import Partners from '../components/partners';
import Statistics from '../components/statistics';
import { useLanguage } from '../useLanguage';




function Main() {
    const { language } = useLanguage();

    const aboutUsGeo = data.pages.aboutUs.sectionOneGeo.paragraph.split(' ')
    const splicedStatement = aboutUsGeo.slice(0, 10)

    return (
        <main className={`flex flex-col min-h-screen w-full bg-[#FDFEFF] lg:bg-main-background bg-no-repeat bg-contain bg-[bottom] 4xl:items-center ${language === "Geo" ? "font-Noto" : "font-Inter"}`}>
            <div className='flex flex-col w-full items-center px-[28px] 4xl:px-0 4xl:w-[1440px]'>
                <div className='flex relative flex-col w-full items-start pt-[55px] pl-[43px] pb-[30px] pr-[5px] gap-[50px] rounded-[20px] bg-[#000] bg-background1 bg-no-repeat bg-cover 3xl:bg-background1-desktop lg:pt-[193px] lg:pl-[150px] lg:h-[640px]'>
                    <div className='absolute bg-[#D9D9D9] opacity-80 top-[44px] left-[28px] w-[71px] h-[1px] lg:left-[110px] lg:w-[163px] lg:h-[3px] lg:top-[153px]'></div>
                    <div className='absolute bg-[#F7941D] top-[75px] left-[28px] w-[242px] h-[32px] lg:w-[553px] lg:h-[72px] lg:top-[225px] lg:left-[110px]'></div>
                    <h1 className={`text-[28px] font-bold leading-[35px]  z-10 tracking-[-1px] text-[#fff] lg:text-[64px] lg:leading-[70px]`}>{language === "Geo" ? <>დაიცავი ხვალინდელი <br /> დღე დღეს.</> : <>PROTECT YOUR <br /> TOMORROW TODAY</>}</h1>
                    <div className='pl-[35px] lg:pr-[158px] lg:mt-[150px] lg:w-full lg:flex lg:justify-end'>
                        <ContactUs language={language} width={"w-[172px]"} />
                    </div>
                </div>

                <div className='flex flex-col w-full mt-[34px] mb-[8px] md:flex-row md:mb-[24px] lg:mb-[64px] reg:items-center'>
                    <div>
                        <h1 className='font-bold text-[28px] text-[#323232] lg:text-[48px]'>{language === "Geo" ? "ჩვენს შესახებ" : "about us"}</h1>
                        <p className='font-medium text-[12px] text-[#323232] mt-[11px] mb-[13px] lg:text-[19px]'>{language === "Geo" ? splicedStatement.join(' ') : data.pages.aboutUs.sectionOne.paragraph}</p>
                        <div className='w-[116px]'>
                            <Link to={"/aboutUs"}>
                                <button className='flex relative items-center justify-center py-[2px] gap-[7px] px-[8px] w-[115px] rounded-md border border-[##d0d5dd] text-[##344054] text-[14px] leading-[20px] font-medium group shadow-button'>
                                    <div className='w-[6px] h-[6px] rounded-full bg-[#f7941d] transition-colors duration-300 group-hover:bg-[#07c870]'></div>{language === "Geo" ? "გაიგე მეტი" : "learn more"}</button>
                            </Link>
                        </div>
                    </div>

                    <img className="my-[20px] md:my-0 md:w-[60%] mix-blend-multiply" src={helmet} />
                </div>

                <section className='flex flex-col w-full items-center gap-[52px] bg-[#323232] rounded-[20px] sm:px-[17px] py-[33px] pb-[39px] lg:px-[40px]'>
                    <p className='hidden text-[#fff] text-[50px] font-bold lg:flex'>{language === "Geo" ? "ჩვენი სერვისები" : "our services"}</p>
                    <Cards />
                    <Consultation wide={true} />
                </section>

                <Partners />
                <Statistics />

                <div className='w-full mt-[82px] mb-[38px] flex flex-col gap-[63px] reg:flex-row reg:relative reg:gap-0 reg:justify-between'>
                    <div className='relative reg:w-[40%]'>
                        <div className='bg-[#07c870] w-[95%] 2xl:w-full h-[49px] 2xl:h-[72px]'></div>
                        <h1 className='absolute text-[#323232] text-[40px] font-bold leading-[47px] ml-[6px] w-[30px] top-[-25px] 2xl:top-[-30px] 2xl:text-[60px] 2xl:leading-[70px] 2xl:tracking-[-2px]'>{language === "Geo" ? data.pages.main.section.titleGeo[0] : data.pages.main.section.title[0]}</h1>
                        <p className={`text-[#323232] text-[20px] font-regular mt-[40px] 2xl:text-[24px] ${language === "Geo" ? "2xl:mt-[50px]" : ""}`}>{language === "Geo" ? data.pages.main.section.paragraphGeo[0] : data.pages.main.section.paragraph[0]}</p>
                    </div>

                    <div className='hidden opacity-60 reg:flex shadow-line  w-[1px] h-[230px] bg-[#58595B] left-[50%]'></div>

                    <div className='relative flex flex-col reg:w-[40%]'>
                        <div className='bg-[#f7941d] w-[95%] h-[49px] 2xl:w-full 2xl:h-[72px]'></div>
                        <h1 className='absolute text-[#323232] text-[40px] font-bold leading-[47px] ml-[6px] w-[30px] top-[-25px] 2xl:top-[-30px] 2xl:text-[60px] 2xl:leading-[70px] 2xl:tracking-[-2px]'>{language === "Geo" ? data.pages.main.section.titleGeo[1] : data.pages.main.section.title[1]}</h1>
                        <p className={`text-[#323232] text-[20px] font-regular mt-[40px] 2xl:text-[24px] ${language === "Geo" ? "2xl:mt-[50px]" : ""}`}>{language === "Geo" ? data.pages.main.section.paragraphGeo[1] : data.pages.main.section.paragraph[1]}</p>
                    </div>
                </div>

                <div className='flex pt-[28px] gap-[60px] px-[24px] pb-[32px] flex-col w-full mb-[68px] bg-background2 bg-background-tint bg-no-repeat bg-cover rounded-[20px]  reg:justify-center reg:gap-[53px] reg:items-start reg:px-[40px] reg:mt-[40px] lg:px-[90px] lg:pt-[70px] lg:pb-[140px]'>
                    <h1 className='text-[37px] tb:w-[470px] font-bold text-[#fff] opacity-90 leading-[50px] lg:text-[72px] lg:leading-[81px] reg:w-[200px] lg:w-[200px]'>{language === "Geo" ? <>დაიცავი ხვალინდელი დღე <span className='text-[#f7941d]'>დღეს.</span></> : <>PROTECT YOUR TOMMOROW <span className='text-[#f7941d]'>TODAY</span></>}</h1>
                    <Consultation wide={true} />
                </div>

            </div>

        </main>
    );
}

export default Main;
