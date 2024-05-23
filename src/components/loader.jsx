import React from 'react'
import loaderLogo from '../assets/loader/loader-logo.svg'

export default function Loader() {
    return (
        <main className='flex flex-col items-center justify-center bg-[#F7941D] min-h-screen w-full z-[100]'>
            <div className='flex flex-col w-full items-center px-[40px] gap-[50px] lg:gap-[120px] lg:w-[900px]'>
                <img src={loaderLogo} />
                <div className="inline-block h-[52px] w-[52px] animate-spin rounded-full border-4 border-solid border-white border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]" role="status"></div>
            </div>
        </main>
    )
}
