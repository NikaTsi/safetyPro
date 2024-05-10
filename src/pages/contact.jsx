import React from 'react'
import data from '../data.json'
import Svgs from '../components/svgs'

function Contact() {
    return (
        <main className='flex flex-col w-full font-Inter px-[28px] bg-[#FDFEFF]'>

            <div className='w-[243px] h-[31.5px] flex relative mb-[32px] mt-[27px] lg:w-[553px] lg:h-[72px]'>
                <div className='bg-[#F7941D] bg-opacity-60 w-full h-full relative'></div>
                <h1 className='absolute text-[28px] font-bold z-10 bottom-[7.3px] left-[15px] lg:text-[67px] lg:leading-[26px] lg:-top-[5px]'>CONTACT US</h1>
            </div>

            <div className='flex flex-col w-full px-[15px] pt-[40px] pb-[20px] bg-numeric-background rounded-[20px]'>
                <div>
                    <h1 className='text-[#f7941d] text-[24px] font-bold'>We’d love to hear from you</h1>
                    <p className='text-[20px] font-bold leading-[30px] text-[#fff] mt-[8px] mb-[32px]'>Our friendly team is always here to chat.</p>
                </div>

                <div className='flex flex-col gap-4 w-full rounded-[20px]'>
                    {data.eng.pages['CONTACT US'].cards.map((item, index) => (
                        <div>
                            <img src={require(`../assets${item.images}`)} key={index} />
                            <h1 className='text-[20px] leading-[30px] font-bold text-[#f2f2f2]'>{item.title}</h1>
                            <p className='text-[16px] leading-[24px] font-bold text-[#f2f2f2]'>{item.paragraph}</p>
                        </div>
                    ))}
                </div>

            </div>

                <div className='flex gap-[5px]'>
                    {<Svgs />}
                </div>
        </main>
    )

    /// mailorphone = className='text-[16px] font-bold text-[#f7941d] leading-[24px]'////
}

export default Contact