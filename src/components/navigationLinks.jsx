import React from 'react'
import { Link } from 'react-router-dom'

const NavigationLinks = ({ data }) => (
    data.map(item => (
        <Link key={item.url} to={`${item.url}`} className='font-semibold text-[16px] leading-[26px] text-[#323232] hover:text-[#f7941d] cursor-pointer'>{item.title}</Link>
    ))
)

export default NavigationLinks