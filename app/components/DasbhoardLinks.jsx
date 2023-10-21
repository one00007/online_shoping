'use client'
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'


function DasbhoardLinks({ active,page, Icon, link }) {

    const pathname = usePathname()
    return (
        <>
            <Link href={link} className={`text-sm flex rounded-md mb-5 ${(pathname == link) ? `text-[${active}] font-medium` : "text-gray-400"}`} >
                <div className="icon h-[20px] w-[20px]">
                    <Icon className='h-full w-full' />
                </div>
                <span className='ms-2 my-auto'>{page}</span>
            </Link>
        </>
    )
}

export default DasbhoardLinks