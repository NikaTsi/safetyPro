import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import data from '../data.json';
import qr from '../assets/footer/pr.png';

export default function Svgs() {
    const arrayOfsize = ["10", "16", "17"];
    const [qrImg, setQrImg] = useState(false);

    const isMobile = useMediaQuery({ query: '(max-width: 1023px)' });

    return (
        <div className='flex relative w-full gap-[20px]'>
            {!isMobile && qrImg && (
                <img className="absolute w-[270px] top-[-270px] object-cover" src={qr} alt="QR Code" />
            )}
            {data.footer.map((item, i) => (
                <Link to={item.href} target={`item${i}`} key={i} onClick={(e) => {
                    if (!isMobile && i === 1) {
                        e.preventDefault();
                        setQrImg(!qrImg);
                    }
                }}>
                    <svg className='fill-[#fff] cursor-pointer hover:fill-[#F7941D] block' xmlns="http://www.w3.org/2000/svg" width={arrayOfsize[i]} height="24" viewBox={`0 0 ${arrayOfsize[i]} 24`}>
                        {item.d ?
                            <path fillRule="evenodd" clipRule="evenodd" d={item.d} /> :
                            <g clipPath="url(#clip0_358_2337)">
                                {item.arrayD.map((d, index) => (
                                    <path key={index} d={d} />
                                ))}
                            </g>
                        }
                    </svg>
                </Link>
            ))}
        </div>
    );
}
