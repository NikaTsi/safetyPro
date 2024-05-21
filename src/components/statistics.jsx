import React from 'react'
import data from '../data.json'

export default function Statistics() {
    return (
        <section className='flex flex-col w-full text-center bg-[#2f2f2f] rounded-[20px] gap-4 px-4 pt-[18px] pb-[21px]'>
            {data.pages.main.cards.text.map((item, index) => (
                <div className='flex flex-col items-center w-full bg-[#58595B] gap-4 rounded-[20px] px-[17px] pt-[41px] pb-[35px]' key={index}> 
                    <span className='text-[22px] leading-[29px] font-bold text-[#FFF]'>{item}</span>
                    <h1 className='text-[41px] text-[#f7941d] font-semibold'>{data.pages.main.cards.heading[index]}</h1>
                    <p className='text-[18px] font-normal text-[#FFF] px-[20px]'>{data.pages.main.cards.paragraph[index]}</p>
                </div>
            ))}
        </section>
    )
}
