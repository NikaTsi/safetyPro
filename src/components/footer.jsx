import React from 'react'
import { Link } from 'react-router-dom'
import companyLogo from '../assets/footer/logo.svg'
import EmailLogo from '../assets/footer/mail.svg'
import PhoneLogo from '../assets/footer/phone.svg'
import Svgs from './svgs'

export default function Footer() {
  return (
    <footer className='flex flex-col items-center gap-[44px] w-full bg-[#323232] pt-[74px] pb-[62px] reg:flex-row reg:justify-between reg:items-center reg:px-[48px] reg:py-[55px]'>

      <div className='w-[288px] flex flex-col justify-between reg:items-center reg:gap-[30px]'>
        <Link to={"/"}>
          <img src={companyLogo} alt="logo" />
        </Link>
         <span className='text-[15px] leading-[28px] hidden opacity-70 text-[#fff] reg:flex'>© 2024 Treedesign  All Rights Reserved.</span>
      </div>

      <div className='flex flex-col gap-[14px] '>
        <div className="flex gap-[26px]">
          <img className='w-[20px]' src={EmailLogo} alt="email" />
          <span className='font-normal text-[24px] leading-[26px] text-[#ffff] opacity-90'>safety@pro.ge</span>
        </div>

        <div className="flex gap-[26px]">
          <img className='w-[20px]' src={PhoneLogo} alt="logo" />
          <span className='font-normal text-[24px] leading-[26px] text-[#ffff] opacity-90'>(+995) 322 55 55 55</span>
        </div>

        <div className="flex gap-[5px]">
          <Svgs />
        </div>
      </div>

      <span className='text-[15px] leading-[28px] opacity-70 text-[#fff] reg:hidden'>© 2024 Treedesign  All Rights Reserved.</span>


    </footer>
  )
}
