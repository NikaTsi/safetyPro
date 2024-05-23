import React from 'react'
import { Link } from 'react-router-dom'
import companyLogo from '../assets/footer/logo.svg'
import EmailLogo from '../assets/footer/mail.svg'
import PhoneLogo from '../assets/footer/phone.svg'
import Svgs from './svgs'

export default function Footer() {

  const handleEmailClick = () => {
    window.location.href = `mailto:safetyproge@gmail.com`;
  };

  const handlePhoneClick = () => {
    window.location.href = `tel:505 05 27 37`;
  };

  return (
    <footer className='flex font-Inter justify-center w-full bg-[#323232] pt-[74px] pb-[62px] md:px-[48px] md:py-[70px]'>

      <div className='flex flex-col items-start gap-[44px] md:flex-row md:w-full md:justify-between md:items-center 3xl:w-[1440px]'>
        <div className='w-[288px] flex flex-col justify-between md:items-center md:gap-[30px]'>
          <Link to={"/"}>
            <img src={companyLogo} alt="logo" />
          </Link>
          <span className='text-[15px] leading-[28px] hidden opacity-70 text-[#fff] md:flex'>© 2024 Treedesign  All Rights Reserved.</span>
        </div>

        <div className='flex flex-col gap-[14px]'>
          <div className="flex gap-[26px]">
            <img className='w-[20px]' src={EmailLogo} alt="email" />
            <span onClick={handleEmailClick} className='font-normal text-[20px] leading-[26px] text-[#ffff] opacity-90 cursor-pointer hover:text-[#F7941D] hover:underline'>safetyproge@gmail.com</span>
          </div>

          <div className=" flex gap-[26px]">
            <img className='w-[20px]' src={PhoneLogo} alt="logo" />
            <span onClick={handlePhoneClick} className='font-normal text-[20px] leading-[26px] text-[#ffff] opacity-90 cursor-pointer hover:text-[#F7941D] hover:underline'>(+995) 505 05 27 37</span>
          </div>

            <Svgs />
        </div>

        <span className='text-[15px] leading-[28px] opacity-70 text-[#fff] md:hidden'>© 2024 Treedesign  All Rights Reserved.</span>
      </div>


    </footer>
  )
}
