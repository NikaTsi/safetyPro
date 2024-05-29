import React from 'react'
import { Link } from 'react-router-dom'

export default function ErrorPage() {
  return (
    <main className='flex flex-col w-full items-center min-h-screen font-Inter'>
      <section class="py-8 px-4 lg:py-16 lg:px-6">
        <div class="flex flex-col gap-4 max-w-screen-sm text-center ">
          <h1 class="text-7xl tracking-tight font-extrabold lg:text-9xl text-[#F7941D]">404</h1>
          <p class="text-3xl tracking-tight font-bold text-[#000] md:text-4xl">Something's missing.</p>
          <p class="text-lg font-light text-gray-500">Sorry, we can't find that page. You'll find lots to explore on the home page. </p>
          <Link to="/" class="text-[#F7941D] font-medium text-sm px-5 my-4">Back to Homepage</Link>
        </div>
      </section>
    </main>
  )
}
