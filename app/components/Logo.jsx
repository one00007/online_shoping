import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function Logo() {
    return (
        <Link href='#' className='block p-1 mb-5 h-[50px] mx-auto w-[170px]'>
            <Image alt='alt' height={1000} width={1000} className='object-cover w-full h-full' src={'/images/stock/logo.jpeg'} />
        </Link>
    )
}

export default Logo