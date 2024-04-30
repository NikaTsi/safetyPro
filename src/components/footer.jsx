import React from 'react'
import { Link } from 'react-router-dom'
import companyLogo from '../assets/footer/logo.svg'
import EmailLogo from '../assets/footer/mail.svg'
import PhoneLogo from '../assets/footer/phone.svg'

export default function Footer() {
  return (
    <footer className='flex flex-col items-center gap-[44px] w-full bg-[#323232] pt-[74px] pb-[62px]'>

      <div className='w-[288.6px] h-[50px] flex flex-col justify-between'>
        <Link to={"/"}>
          <img src={companyLogo} alt="logo" />
        </Link>
      </div>

      <div className='flex flex-col gap-[14px] w-[288.6px] h-[116px]'>
        <div className="flex flex-row  gap-[26px]">
          <img src={EmailLogo} alt="email" />
          <span className='font-normal text-[24px] leading-[26px] text-[#ffff] opacity-90'>safety@pro.ge</span>
        </div>
        <div className="flex flex-row  gap-[26px]">
          <img src={PhoneLogo} alt="logo" />
          <span className='font-normal text-[24px] leading-[26px] text-[#ffff] opacity-90'>(+995) 322 55 55 55</span>
        </div>
        <div className="flex flex-row  gap-[26px] border border-red-500 h-[36px]">
        </div>
      </div>

      <span className='text-[15px] leading-[28px] opacity-70 text-[#fff]'>© 2024 Treedesign  All Rights Reserved.</span>


    </footer>
  )
}
