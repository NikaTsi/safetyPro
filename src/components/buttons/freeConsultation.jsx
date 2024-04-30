import React from 'react'
import { Link } from 'react-router-dom'

function FreeConsultation({ height, width, fontSize }) {
    return (
        <Link to={'/contact'}>
            <button className={`bg-[#07c870] ${height} ${width} rounded-[8px] ${fontSize} leading-[28px] font-semibold text-[#ffffff] hover:bg-[#F7941D] duration-200 active:opacity-80 shadow-button`}>Free Consultation</button>
        </Link>

    )
}

export default FreeConsultation