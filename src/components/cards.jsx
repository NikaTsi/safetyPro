import React from 'react'
import data from '../data.json'
import LearnMore from './buttons/learnMore'

export default function Cards() {
  return (
    <section className='flex flex-wrap w-full justify-center gap-y-[31px]'>
        {data.eng.pages.main.services.img.map((item, index) => (
            <div className='flex items-center justify-center flex-col  w-[146px] gap-[20px]' key={index}>
                <img src={require(`../assets${item}`)} />
                <h1 className='text-center w-[120px] h-[45px] text-[12px] text-[#f2f2f2] font-medium tracking-normal'>{data.eng.pages.main.services.heading[index]}</h1>
                <LearnMore BorderColor={"border border-[#f7941d]"} TextColor={"text-[#f2f2f2]"}/>
            </div>
        ))}
    </section>
  )
}
