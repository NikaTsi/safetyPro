import React from 'react'
import { Link } from 'react-router-dom'

export default function LearnMore({TextColor, BorderColor, bgColor}) {
  return (
    <Link>
      <button className={`text-[14px] w-[101px] h-[36px] rounded-[8px] leading-[20px] ${TextColor} ${BorderColor} ${bgColor} hover:text-[#07C870] duration-300 active:opacity-80 border-opacity-80 shadow-button`}>learn more</button>
    </Link>
  )
}
