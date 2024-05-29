import React from 'react';
import { Link } from 'react-router-dom';

const NavigationLinks = ({ data, text, language }) => (
    data.map(item => (
        <Link  key={item.url} to={`${item.url}`} className={`font-bold text-[16px] leading-[26px] hover:text-[#f7941d] cursor-pointer ${text ? "text-[#FFFFFF]" : "text-[#323232]"}`}>
            {language === "Geo" ? item.titleGeo : item.title}
        </Link>
    ))
);

export default NavigationLinks;
