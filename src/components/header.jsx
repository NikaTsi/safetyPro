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
import Contact from '../components/buttons/contactUs'

export default function Header() {
    const [isHovered, setIsHovered] = useState(false);
    const [georgian, setGeorgian] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    const handleOpen = () => {
        setIsOpen(!isOpen);
    }
    const handleClose = () => {
        setIsOpen(false);
    }

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
        <header className={`flex relative w-full justify-center bg-[#FDFEFF] pt-6 pb-[21px] px-[28px] 3xl:pt-[36px] 3xl:pb-[36px] z-[1000] ${isOpen ? "sticky top-0 left-0" : ""}`}>
            <div className='flex w-full justify-between items-center 3xl:w-[1138px]'>

                <Link to={"/"} onClick={handleClose}>
                    <img className='w-[167px] cursor-pointer' src={logo} alt="logo" />
                </Link>

                <div className='hidden gap-10 3xl:flex'>
                    <NavigationLinks data={data.eng.navigation} />
                </div>

                <div className='flex items-center gap-[23px]'>
                    <button className='hidden'>contact us</button>

                    <div className={`w-[30px] h-[30px] ${georgian ? "flex" : "hidden"}`} onClick={handleLanguageChange} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
                        <img className={`cursor-pointer ${isHovered ? 'hidden' : ''}`} src={eng} alt="language" />
                        <img className={`cursor-pointer ${isHovered ? '' : 'hidden'}`} src={engc} alt="language" />
                    </div>
                    <div className={`w-[30px] h-[30px] ${georgian ? "hidden" : "flex"}`} onClick={handleLanguageChange} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
                        <img className={`cursor-pointer ${isHovered ? 'hidden' : ''}`} src={geo} alt="language" />
                        <img className={`cursor-pointer ${isHovered ? '' : 'hidden'}`} src={geoc} alt="language" />
                    </div>

                    <div onClick={handleOpen} className='flex flex-col gap-[5px] z-10 md:hidden cursor-pointer'>
                        <div className={`w-[26px] h-[3px] bg-[#1D1C1E] rounded-[4px] transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-[8px]' : ""}`}></div>
                        <div className={`w-[26px] h-[3px] bg-[#1D1C1E] rounded-[4px] transition-all duration-300 ${isOpen ? 'opacity-0' : "flex"}`}></div>
                        <div className={`w-[26px] h-[3px] bg-[#1D1C1E] rounded-[4px] transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-[8px]' : ""} `}></div>
                    </div>

                    {isOpen && (
                        <div className='flex flex-col absolute top-[70px] left-0 z-[100] h-[350px] justify-center items-center rounded-b-[20px] w-full gap-[20px] bg-[#323232]'>
                            {
                                data.eng.navigation.map(item => (
                                    <Link onClick={handleClose} key={item.url} to={`${item.url}`} className={`font-semibold text-[16px] leading-[26px] hover:text-[#f7941d] text-[#FFFFFF] cursor-pointer`}>
                                        {item.title}
                                    </Link>
                                ))
                            }
                            <Link onClick={handleClose} to={"/contact"}>
                                <button className={`bg-[#f7941d] text-[#ffffff] rounded-[8px] h-[44px] text-[16px] font-semibold leading-[24px] w-[121px] hover:bg-[#323232] duration-300 active:opacity-80 shadow-button border border-[#f7941d]`}>Contact us</button>
                            </Link>
                        </div>
                    )}
                </div>

            </div>
        </header>
    );
}
