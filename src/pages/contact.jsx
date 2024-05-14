import React from 'react'
import data from '../data.json'
import Svgs from '../components/svgs'

function Contact() {

    const handleEmailClick = () => {
        window.location.href = `mailto:safetyproge@gmail.com`;
    };

    const arrayOfInfo = [<Svgs />, "safetyproge@gmail.com", "+995 505 05 27 37"]


    return (
        <main className='flex flex-col w-full items-center font-Inter pb-[44px] px-[28px] bg-[#FDFEFF] lg:pb-[70px]'>

            <div className='flex flex-col w-full items-center 4xl:w-[1440px]'>
                <div className='flex w-full justify-start'>
                    <div className='w-[243px] h-[31.5px] flex relative mb-[32px] mt-[27px] lg:w-[553px] lg:h-[72px] 3xl:mt-[60px]'>
                        <div className='bg-[#F7941D] bg-opacity-60 w-full h-full relative'></div>
                        <h1 className='text-[#323232] absolute text-[28px] font-bold z-10 bottom-[7.3px] left-[15px] lg:text-[67px] lg:leading-[26px] lg:-top-[5px]'>CONTACT US</h1>
                    </div>
                </div>

                <div className='flex flex-col w-full px-[15px] pt-[40px] pb-[20px] bg-background-tint bg-numeric-background bg-cover bg-no-repeat rounded-[20px] overflow-clip reg:px-[46px] reg:pt-[77px] reg:pb-[125px] lg:mt-[27px]'>
                    <div>
                        <h1 className='text-[#f7941d] text-[24px] font-bold lg:text-[48px] lg:leading-[60px]'>We’d love to hear from you</h1>
                        <p className='text-[20px] font-bold leading-[30px] text-[#fff] mt-[8px] mb-[32px] lg:mb-[64px] lg:mt-[24px]'>Our friendly team is always here to chat.</p>
                    </div>

                    <div className='flex flex-col gap-4 w-full lg:flex-row lg:gap-[3%] lg:items-center lg:justify-between'>
                        {data.eng.pages['CONTACT US'].cards.map((item, index) => (
                            <div className='p-[24px] rounded-[28px] bg-gray-100 bg-opacity-30 lg:w-full'>
                                <img src={require(`../assets${item.images}`)} key={index} />
                                <h1 className='text-[20px] leading-[30px] font-bold text-[#f2f2f2] pt-[64px]'>{item.title}</h1>
                                <p className='text-[16px] leading-[24px] font-semibold text-[#f2f2f2]'>{item.paragraph}</p>
                                <span className='flex gap-[20px] text-[#f7941d] text-[16px] font-bold leading-[24px] mt-[24px]'>{arrayOfInfo[index]}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </main>
    )


}
export default Contact