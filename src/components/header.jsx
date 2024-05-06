import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/header/logo.svg';
import menu from '../assets/header/burger-menu.svg';
import geo from '../assets/header/geo.svg';
import geoc from '../assets/header/geo-color.svg';
import eng from '../assets/header/eng.svg';
import engc from '../assets/header/eng-color.svg';
import NavigationLinks from './navigationLinks';
import data from '../data.json';

export default function Header() {
    const [isHovered, setIsHovered] = useState(false);
    const [georgian, setGeorgian] = useState(false);

    useEffect(() => {
        const storedLanguage = localStorage.getItem('language');
        if (storedLanguage) {
            setGeorgian(storedLanguage === 'geo');
        }
    }, []);

    function handleLanguageChange() {
        const newLanguage = georgian ? 'eng' : 'geo';
        setGeorgian(!georgian);
        localStorage.setItem('language', newLanguage);
    }

    return (
        <header className='flex w-full justify-center bg-[#FDFEFF] pt-6 pb-[21px] px-[28px] 3xl:pt-[36px] 3xl:pb-[36px]'>
            <div className='flex w-full justify-between items-center 3xl:w-[1138px]'>

                <Link to={"/"}>
                    <img className='w-[167px] cursor-pointer' src={logo} alt="logo" />
                </Link>

                <div className='hidden gap-10 3xl:flex'>
                    <NavigationLinks data={data.eng.navigation} />
                </div>

                <div className='flex gap-[23px]'>
                    <button className='hidden'>contact us</button>

                    <div className={`w-[30px] h-[30px] ${georgian ? "flex" : "hidden"}`} onClick={handleLanguageChange} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
                        <img className={`cursor-pointer ${isHovered ? 'hidden' : ''}`} src={eng} alt="language" />
                        <img className={`cursor-pointer ${isHovered ? '' : 'hidden'}`} src={engc} alt="language" />
                    </div>
                    <div className={`w-[30px] h-[30px] ${georgian ? "hidden" : "flex"}`} onClick={handleLanguageChange} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
                        <img className={`cursor-pointer ${isHovered ? 'hidden' : ''}`} src={geo} alt="language" />
                        <img className={`cursor-pointer ${isHovered ? '' : 'hidden'}`} src={geoc} alt="language" />
                    </div>
                    
                    <img className='cursor-pointer' src={menu} alt="menu" />
                </div>

            </div>
        </header>
    );
}
