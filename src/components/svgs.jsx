import React from 'react'
import { Link } from 'react-router-dom'
import data from '../data.json'

export default function Svgs() {
    const arrayOfsize = ["10", "16", "17"]
    return (
        <>
            {data.eng.footer.map((item, i) => (
                <Link to={item.href} target={`item${i}`} key={i}>
                    <svg className='fill-[#fff] cursor-pointer hover:fill-[#F7941D] block' xmlns="http://www.w3.org/2000/svg" width={arrayOfsize[i]} height="24" viewBox={`0 0 ${arrayOfsize[i]} 24`}>
                        {item.d ?
                            <path fillRule="evenodd" clipRule="evenodd" d={item.d} /> :
                            <g clip-path="url(#clip0_358_2337)">
                                {item.arrayD.map((d, index) => (
                                    <path key={index} d={d} />
                                ))}
                            </g>
                        }
                    </svg>
                </Link>
            ))}
        </>
    )
}
