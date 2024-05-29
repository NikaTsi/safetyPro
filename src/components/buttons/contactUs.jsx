import React from 'react'
import { Link } from 'react-router-dom'

export default function ContactUs({width, border, language}) {
    return (
        <Link to={"/contact"}>
            <button  className={`bg-[#f7941d] text-[#ffffff] rounded-[8px] h-[44px] text-[16px] font-semibold leading-[24px] ${width} hover:bg-[#323232] duration-300 active:opacity-80 shadow-button ${border ? "border border-[#f7941d]" : ""}`}>{language === "Geo" ? "მოგვწერეთ" : "Contact us"}</button>
        </Link>
    )
}
