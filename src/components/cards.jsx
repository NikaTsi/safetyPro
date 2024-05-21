import React from 'react'
import data from '../data.json'
import { Link } from 'react-router-dom'

export default function Cards() {
  return (
    <section className='flex flex-wrap w-full justify-center gap-y-[31px]'>
      {data.pages.main.services.img.map((item, index) => (
        <div className='flex items-center justify-center flex-col  w-[146px] gap-[20px]' key={index}>
          <img src={require(`../assets${item}`)} />
          <h1 className='text-center w-[120px] h-[45px] text-[12px] text-[#f2f2f2] font-medium tracking-normal'>{data.pages.main.services.heading[index]}</h1>
          <Link to={data.pages.main.services.urls[index]}>
            <button className={`text-[14px] w-[101px] h-[36px] rounded-[8px] leading-[20px] text-[#f2f2f2] border border-[#f7941d] hover:text-[#07C870] duration-300 active:opacity-80 border-opacity-80 shadow-button`}>learn more</button>
          </Link>
        </div>
      ))}
    </section>
  )
}
