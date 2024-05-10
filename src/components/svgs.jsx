import React from 'react'
import { Link } from 'react-router-dom'
import data from '../data.json'

export default function Svgs() {
    return (
        <>
            {data.eng.footer.map((item, i) => (
                <Link to={item.href} target={`item${i}`} key={i}>
                    <svg className='fill-[#fff] cursor-pointer hover:fill-[#F7941D] block' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
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
