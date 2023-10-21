'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Dot from '@/public/icons/menu-dot.svg'

function FileCard() {


    return (
        <div className='border p-2  rounded-md'>
            <div className='w-full h-[160px]  rounded bg-gradient-to-r from-gray-50 to-gray-100 overflow-hidden'>
                <Image alt='file-image' src={`data:image/png;base64,`} className='h-full w-full object-cover' height={500} width={500} ></Image>
            </div>
            <div className='mt-1 flex items-center justify-between'>
                <p className='font-medium text-[#2b2061] text-sm' >Qr code </p>
                <span className='h-[20px] w-[20px] cursor-pointer'>
                    <Dot className='h-full w-full' />
                </span>
            </div>
        </div>
    )
}

export default FileCard