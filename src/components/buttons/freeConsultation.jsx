import React from 'react'
import { Link } from 'react-router-dom'
import { useLanguage } from '../../useLanguage'

function FreeConsultation({ wide }) {
    const { language } = useLanguage()
    return (
        <Link to={'/contact'}>
            <button className={`bg-[#07c870] ${wide ? "w-[268px] h-[60px]" : "w-[254px] h-[64px]"} rounded-[8px] leading-[28px] font-semibold text-[18px] text-[#ffffff] hover:bg-[#F7941D] duration-200 active:opacity-80 shadow-button`}>{language === "Geo" ? "უფასო კონსულტაცია" : "Free Consultation"}</button>
        </Link>

    )
}

export default FreeConsultation