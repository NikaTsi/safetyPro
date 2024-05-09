import React from 'react'

function Contact() {
    return (
        <main className='flex flex-col w-full font-Inter px-[28px] bg-[#FDFEFF]'>

            <div className='w-[243px] h-[31.5px] flex relative mb-[32px] mt-[27px] lg:w-[553px] lg:h-[72px]'>
                <div className='bg-[#F7941D] bg-opacity-60 w-full h-full relative'></div>
                <h1 className='absolute text-[28px] font-bold z-10 bottom-[7.3px] left-[15px] lg:text-[67px] lg:leading-[26px] lg:-top-[5px]'>CONTACT US</h1>
            </div>

            <div className='flex flex-col w-full px-[15px] pt-[40px] pb-[20px]'>
                <div>
                    <h1>We’d love to hear from you</h1>
                    <p className='mt-[8px] mb-[32px]'>Our friendly team is always here to chat.</p>
                </div>

                <div></div>
            </div>

        </main>
    )
}

export default Contact